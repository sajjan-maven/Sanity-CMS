"use client";
import React, { useEffect, useState, useRef } from "react";
import { ArrowRightIcon, X, Menu } from "lucide-react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
// import Button from "./Button";
import Link from "next/link";
import NewButton from "./newButton";
// import { urlForImage } from "@/sanity/lib/image";

// Types
interface DropdownItem {
    title: string;
    description: string;
    path: string;
}

// Types
interface MenuItem {
    name: string;
    hasDropdown: boolean;
    dropdownItems?: DropdownItem[];
    path?: string;
}

// Dropdown Content Component
const DropdownContent = ({ items, toggleDropdown, setIsOpen }: { items: { title: string; description: string; path: string }[], toggleDropdown: any, setIsOpen: any }) => {
    const router = useRouter();

    const handleClick = (path: string) => {
        router.push(path);
        toggleDropdown(null);
        setIsOpen(false)
    };

    return (
        <div className="w-full md:w-[500px] pt-1 md:pt-3">
            <div className="rounded-2xl border border-gray-200 shadow-[0_2px_6px_rgba(0,0,0,0.05),0_8px_24px_rgba(0,0,0,0.08)] p-5 bg-white space-y-4 relative z-[60]">
                {items.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleClick(item.path)}
                        className="cursor-pointer hover:bg-[#F8F5F3] p-2 rounded-lg"
                    >
                        <p className="font-semibold text-sm text-gray-800">{item.title}</p>
                        <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

// Notification Banner Component
const NotificationBanner = ({
    icon,
    text,
    link,
    linkText,
    backgroundColor,
    textColor,
    linkColor,
    onClose,
}: {
    icon:  {
        asset?: {
            url?: string;
        };
    };
    text: string;
    link: string;
    linkText: string;
    backgroundColor: any;
    textColor: any;
    linkColor: any;
    onClose: () => void;
}) => {
    return (
        <div className="relative flex justify-center items-center pl-5 pr-12 gap-2 w-full bg-[#000] min-h-9"
          style={{ backgroundColor: backgroundColor?.hex }}>
            {icon.asset?.url && <Image
                className="hidden md:block"
                src={icon.asset?.url || '/dummy'}
                width={20}
                height={20}
                alt={"announcement icon"}
            />}
            <p className="text-center p-1 text-white text-[14px] font-medium"
              style={{ color: textColor?.hex }}>
                {text}
                {link && <Link
                    target="_blank"
                    href={link}
                    className="text-[#f8be65] inline-flex items-center pl-1 gap-1 group hover:underline hover:[&_svg]:translate-x-1 cursor-pointer"
                    style={{ color: linkColor?.hex }}>
                    <span>{linkText}</span>
                    <svg
                        className="transition-all ease-in duration-200"
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 448 512"
                    >
                        <path
                            d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
                            fill="currentColor"
                        />
                    </svg>
                </Link>}
            </p>

            <div
                onClick={onClose}
                className="absolute top-1/2 right-6 transform -translate-y-1/2 cursor-pointer"
            >
                <X className="text-white w-4 h-4" />
            </div>
        </div>
    );
};

// Desktop Navigation Component
const DesktopNavigation = ({
    menuItems,
    activeDropdown,
    toggleDropdown,
    ctaButton,
}: {
    menuItems: MenuItem[];
    activeDropdown: number | null;
    toggleDropdown: (index: number) => void;
    ctaButton: { text: string; link: string, variant: 'primary' | 'secondary' | 'danger' | 'outline' };
}) => {
    const router = useRouter();

    return (
        <nav className="hidden lg:flex justify-between w-full">
            <ul className="relative flex items-center lg:right-[35px] xl:right-0 lg:gap-2 xl:gap-6 lg:px-2 xl:px-0">
                {menuItems.map((item, index) => (
                    <li key={index} className="relative group">
                        {item.hasDropdown ? (
                            <>
                                <button
                                    onClick={() => toggleDropdown(index)}
                                    className="flex items-center gap-1 cursor-pointer font-medium text-[#363338] hover:text-gray-600 focus:outline-none py-2"
                                >
                                    {item.name}
                                    <svg
                                        className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === index ? "rotate-180" : ""
                                            }`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 9l-7 7-7-7"
                                        />
                                    </svg>
                                </button>

                                <div
                                    className={`absolute top-full left-0 mt-2 transition-all duration-200 ease-in-out z-50 ${activeDropdown === index
                                        ? "opacity-100 visible translate-y-1"
                                        : "opacity-0 invisible -translate-y-1"
                                        }`}
                                >
                                    {item.dropdownItems && (
                                        <DropdownContent
                                            items={item.dropdownItems}
                                            toggleDropdown={toggleDropdown}
                                            setIsOpen={() => {}} // Provide a no-op function to satisfy required prop
                                        />
                                    )}
                                </div>
                            </>
                        ) : (
                            <Link
                                href={typeof item.path === "string" ? item.path : "#"}
                                className="font-medium text-[#363338] hover:text-gray-600 py-2 block"
                            >
                                {item.name}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>

            <div className="relative hidden lg:flex justify-end items-center gap-3">
                <NewButton
                    variant={ctaButton.variant}
                    onClick={() => router.push(ctaButton.link)}
                    className="group active:[&_svg]:translate-x-1.5 hover:[&_svg]:translate-x-0.8"
                >
                    {ctaButton.text}
                    <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-200" />
                </NewButton>
            </div>
        </nav>
    );
};

// Mobile Navigation Component
const MobileNavigation = ({
    isOpen,
    menuItems,
    activeDropdown,
    toggleDropdown,
    ctaButton,
    onItemClick,
    setIsOpen
}: {
    isOpen: boolean;
    menuItems: MenuItem[];
    activeDropdown: number | null;
    toggleDropdown: (index: number) => void;
    ctaButton: { text: string; link: string };
    onItemClick: () => void;
    setIsOpen: () => void;
}) => {
    const router = useRouter();

    if (!isOpen) return null;

    return (
        <div className="w-full z-40 lg:hidden">
            <div className="p-4 pb-10 space-y-6 bg-white">
                {menuItems.map((item, index) => (
                    <div key={index} className="space-y-4">
                        <button
                            onClick={() => item.hasDropdown && toggleDropdown(index)}
                            className="flex items-center justify-between w-full font-semibold text-lg"
                        >
                            {item.name}
                            {item.hasDropdown && (
                                <svg
                                    className={`w-4 h-4 ml-1 transition-transform ${activeDropdown === index ? "rotate-180" : ""
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            )}
                        </button>
                        {item.hasDropdown && activeDropdown === index && item.dropdownItems && (
                            <DropdownContent items={item.dropdownItems} toggleDropdown={toggleDropdown} setIsOpen={setIsOpen} />
                        )}
                    </div>
                ))}
                <div className="flex flex-row gap-4 pt-6 flex-wrap">
                    <NewButton
                        variant="secondary"
                        onClick={() => {
                            router.push(ctaButton.link);
                            onItemClick();
                        }}
                        className="group active:[&_svg]:translate-x-1.5 hover:[&_svg]:translate-x-0.8"
                    >
                        {ctaButton.text}
                        <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-200" />
                    </NewButton>
                </div>
            </div>
        </div>
    );
};

// Main Header Component
const NavbarComponent = ({ navbarSetting, announcementBannerSettings }: { navbarSetting: any, announcementBannerSettings: any}) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
    const [showNotification, setShowNotification] = useState(true);
    const router = useRouter();
    const headerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > (showNotification ? 32 : 0));
        };

        const handleClickOutside = (event: MouseEvent) => {
            if (headerRef.current && !headerRef.current.contains(event.target as Node)) {
                setActiveDropdown(null);
            }
        };

        window.addEventListener("scroll", handleScroll);
        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showNotification]);

    const handleDropdownItemClick = (path: string) => {
        router.push(path);
        setActiveDropdown(null);
        setIsOpen(false);
    };

    const toggleDropdown = (index: number) => {
        setActiveDropdown(activeDropdown === index ? null : index);
    };

    const { logo, menuItems, ctaButton } = navbarSetting;
    const { icon, show, text, link, linkText, backgroundColor, textColor, linkColor } = announcementBannerSettings

    return (
        <header className="sticky z-[999] top-0 inset-x-0">
            {show && showNotification && (
                <NotificationBanner
                    icon={icon}
                    text={text}
                    link={link}
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    linkColor={linkColor}
                    linkText={linkText}
                    onClose={() => setShowNotification(false)}
                />
            )}

            <div
                ref={headerRef}
                className={`z-[80] w-full transition-all duration-500 ease-in-out 
                ${isScrolled ? "bg-[rgba(248,245,243,0.85)] backdrop-blur-[5px]" : "bg-[#f8f5f3d9]"}`}
            >
                <div className="relative w-full max-w-[1220px] flex items-center py-3 px-6 mx-auto">
                    <div className="flex w-full items-center justify-between">
                        <div className="flex items-center gap-4 md:gap-12 w-full">
                            {/* Logo */}
                            <div className="cursor-pointer" onClick={() => handleDropdownItemClick("/")}>
                                <Image
                                    alt={logo.alt}
                                    src={logo?.src.asset.url ?? '' }
                                    width={logo.width}
                                    height={logo.height}
                                    priority
                                />
                            </div>

                            <DesktopNavigation
                                menuItems={menuItems}
                                activeDropdown={activeDropdown}
                                toggleDropdown={toggleDropdown}
                                ctaButton={ctaButton}
                            />
                        </div>

                        {/* Mobile Menu Toggle */}
                        <button
                            className="lg:hidden p-2 top-1 right-3 absolute"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                <MobileNavigation
                    isOpen={isOpen}
                    menuItems={menuItems}
                    activeDropdown={activeDropdown}
                    toggleDropdown={toggleDropdown}
                    ctaButton={ctaButton}
                    onItemClick={() => setIsOpen(false)}
                    setIsOpen={() => setIsOpen}
                />
            </div>
        </header>
    );
};

export default NavbarComponent;