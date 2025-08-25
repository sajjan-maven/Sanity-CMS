import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FooterLinksProps {
  footerLinks: {
    companyLogo: {
      asset?: {
        url: string;
      };
    };
    backedBy: {
      asset?: {
        url: string;
      };
    };
    socialLinks?: Array<{
      platform: string;
      url: string;
      icon?: {
        asset?: {
          url: string;
        };
      };
    }>;
    certifications?: Array<{
      label: string;
      icon?: {
        asset?: {
          url: string;
        };
      };
    }>;
    reviewBadges?: Array<{
      url: string;
      icon?: {
        asset?: {
          url: string;
        };
      };
    }>;
    platform?: Array<{
      label: string;
      url: string;
      badge?: string;
    }>;
    resources?: Array<{
      label: string;
      url: string;
      badge?: string;
    }>;
    companys?: Array<{
      label: string;
      url: string;
      badge?: string;
    }>;
    getStarted?: Array<{
      label: string;
      url: string;
      badge?: string;
    }>;
    freeTools?: Array<{
      label: string;
      url: string;
      badge?: string;
    }>;
    customers?: Array<{
      label: string;
      url: string;
      badge?: string;
    }>;
    popularGuides?: Array<{
      label: string;
      url: string;
      badge?: string;
    }>;
  };
}

export default function FooterLinks({ footerLinks }: FooterLinksProps) {

  const fallbackConfig = {
    companyLogo: {
      src: "/footer/Logo.svg",
      alt: "Footer-logo",
      width: 115,
      height: 25,
    },
    socialLinks: [
      { href: 'https://www.youtube.com/@Stitchflow', src: '/footer/yt.svg', alt: 'YouTube' },
      { href: 'https://www.instagram.com/stitchflowhq', src: '/footer/ig.svg', alt: 'Instagram' },
      { href: 'https://x.com/stitchflowHQ', src: '/footer/x.svg', alt: 'X' },
      { href: 'https://www.linkedin.com/company/stitchflowhq', src: '/footer/in.svg', alt: 'LinkedIn' },
    ],
  };

  const config = {
    companyLogo: footerLinks?.companyLogo?.asset?.url || fallbackConfig.companyLogo.src,
    socialLinks: footerLinks?.socialLinks && footerLinks.socialLinks.length > 0
      ? footerLinks.socialLinks.map((link) => ({
        href: link.url,
        src: link.icon?.asset?.url || '/footer/yt.svg',
        alt: link.platform
      }))
      : fallbackConfig.socialLinks,
    certifications: footerLinks?.certifications && footerLinks.certifications.length > 0
      ? footerLinks.certifications.map((cert) => ({
        src: cert.icon?.asset?.url || '',
        alt: cert.label
      }))
      : [],
    reviewBadges: footerLinks?.reviewBadges || [],
  };

  return (
    <div className="w-full bg-[#363338] pb-10 md:pb-16 lg:pl-16">
      <div className="max-w-[1256px] mx-auto flex flex-col justify-center md:flex-row w-full gap-4 md:gap-16 px-4">
        <div className="w-full md:max-w-[148px]">
          <Image
            src={config.companyLogo}
            alt={'companyLogo'}
            width={115}
            height={25}
            className="mx-auto md:mr-auto md:ml-0"
          />

          <ul className="flex w-full items-center justify-center gap-1 md:justify-between mt-6">
            {config.socialLinks.map(({ href, src, alt }) => (
              <li key={alt}>
                <Link
                  href={href}
                  title={alt}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center justify-center w-8 h-8 border border-transparent text-gray-900 rounded-full"
                >
                  <Image src={src} alt={alt} width={30} height={30} />
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex md:flex-col md:justify-start md:items-start justify-center gap-2 mt-6">
            <div className="text-white text-[12px]">Backed by</div>
            <Image src={footerLinks?.backedBy?.asset?.url || ''} alt='ventures' width={100} height={40} />
          </div>

          <div className="mt-6 lg:mt-14 text-[15px] text-gray-500">
            {config.certifications.length > 0 && (
              <ul className="grid grid-cols-3 md:grid-cols-2 items-start justify-center gap-3 w-fit mx-auto lg:w-full lg:max-w-[300px]">
                {config.certifications.map(({ src, alt }, index) => (
                  <li key={index} className="max-w-16 max-h-16 md:max-w-[100px] md:max-h-[100px]">
                    <Image src={src} alt={alt} width={100} height={100} />
                  </li>
                ))}
              </ul>
            )}
            <div className="flex md:flex-col md:justify-start md:items-start justify-center gap-3 mt-6">
              {config.reviewBadges.map(({ url, icon }, index) => (
                <Link key={index} href={typeof url == "string" ? url : "#"} target="_blank">
                  <Image src={icon?.asset?.url || ''} alt={typeof url == "string" ? url : "#"} width={113} height={56} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full flex md:block">
          <div className="flex flex-col lg:justify-between md:flex-row md:flex-wrap w-full">
            <div className="w-full px-2 mt-10 md:mt-0 md:max-w-[25%]">
              <div className="text-[15px] font-semibold text-white">Platform</div>
              <ul className="mt-3 space-y-2 pb-8">
                {footerLinks?.platform?.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={typeof link.url == "string" ? link.url : "#"}
                      className="inline-flex sm:items-center text-sm text-[#C6C4CC]"
                    >
                      <span className="hover:underline">{link.label}</span>
                      {link.badge && (
                        <span className={`ml-2 mt-0.5 sm:mt-0 ${link.badge === 'new' ? 'bg-[#F07E10] text-white' : 'bg-[#F8BA51] text-black'
                          }  h-fit text-xs font-medium px-1 py-0.5 rounded-sm`}>
                          {link.badge === 'new' ? 'New' : 'Popular'}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full px-2 mt-10 md:mt-0 md:max-w-[25%]">
              <div className="text-[15px] font-semibold text-white">Resource</div>
              <ul className="mt-3 space-y-2 pb-8">
                {footerLinks?.resources?.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={typeof link.url == "string" ? link.url : "#"}
                      className="inline-flex sm:items-center text-sm text-[#C6C4CC]"
                    >
                      <span className="hover:underline">{link.label}</span>
                      {link.badge && (
                        <span className={`ml-2 mt-0.5 sm:mt-0 ${link.badge === 'new' ? 'bg-[#F07E10] text-white' : 'bg-[#F8BA51] text-black'
                          }  h-fit text-xs font-medium px-1 py-0.5 rounded-sm`}>
                          {link.badge === 'new' ? 'New' : 'Popular'}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full px-2 mt-10 md:mt-0 md:max-w-[25%]">
              <div className="text-[15px] font-semibold text-white">Companys</div>
              <ul className="mt-3 space-y-2 pb-8">
                {footerLinks?.companys?.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={typeof link.url == "string" ? link.url : "#"}
                      className="inline-flex sm:items-center text-sm text-[#C6C4CC]"
                    >
                      <span className="hover:underline">{link.label}</span>
                      {link.badge && (
                        <span className={`ml-2 mt-0.5 sm:mt-0 ${link.badge === 'new' ? 'bg-[#F07E10] text-white' : 'bg-[#F8BA51] text-black'
                          }  h-fit text-xs font-medium px-1 py-0.5 rounded-sm`}>
                          {link.badge === 'new' ? 'New' : 'Popular'}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full px-2 mt-10 md:mt-0 md:max-w-[25%]">
              <div className="text-[15px] font-semibold text-white">Get Started</div>
              <ul className="mt-3 space-y-2 pb-8">
                {footerLinks?.getStarted?.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={typeof link.url == "string" ? link.url : "#"}
                      className="inline-flex sm:items-center text-sm text-[#C6C4CC]"
                    >
                      <span className="hover:underline">{link.label}</span>
                      {link.badge && (
                        <span className={`ml-2 mt-0.5 sm:mt-0 ${link.badge === 'new' ? 'bg-[#F07E10] text-white' : 'bg-[#F8BA51] text-black'
                          }  h-fit text-xs font-medium px-1 py-0.5 rounded-sm`}>
                          {link.badge === 'new' ? 'New' : 'Popular'}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col lg:justify-between md:flex-row md:flex-wrap w-full md:mt-10">
            <div className="w-full px-2 mt-10 md:mt-0 md:max-w-[25%]">
              <div className="text-[15px] font-semibold text-white">Free Tools</div>
              <ul className="mt-3 space-y-2 pb-8">
                {footerLinks?.freeTools?.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={typeof link.url == "string" ? link.url : "#"}
                      className="inline-flex sm:items-center text-sm text-[#C6C4CC]"
                    >
                      <span className="hover:underline">{link.label}</span>
                      {link.badge && (
                        <span className={`ml-2 mt-0.5 sm:mt-0 ${link.badge === 'new' ? 'bg-[#F07E10] text-white' : 'bg-[#F8BA51] text-black'
                          }  h-fit text-xs font-medium px-1 py-0.5 rounded-sm`}>
                          {link.badge === 'new' ? 'New' : 'Popular'}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full px-2 mt-10 md:mt-0 md:max-w-[25%]">
              <div className="text-[15px] font-semibold text-white">Customers</div>
              <ul className="mt-3 space-y-2 pb-8">
                {footerLinks?.customers?.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={typeof link.url == "string" ? link.url : "#"}
                      className="inline-flex sm:items-center text-sm text-[#C6C4CC]"
                    >
                      <span className="hover:underline">{link.label}</span>
                      {link.badge && (
                        <span className={`ml-2 mt-0.5 sm:mt-0 ${link.badge === 'new' ? 'bg-[#F07E10] text-white' : 'bg-[#F8BA51] text-black'
                          }  h-fit text-xs font-medium px-1 py-0.5 rounded-sm`}>
                          {link.badge === 'new' ? 'New' : 'Popular'}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full px-2 mt-10 md:mt-0 md:max-w-[50%]">
              <div className="text-[15px] font-semibold text-white">Popular Guides</div>
              <ul className="mt-3 space-y-2 pb-8">
                {footerLinks?.popularGuides?.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={typeof link.url == "string" ? link.url : "#"}
                      className="inline-flex sm:items-center text-sm text-[#C6C4CC]"
                    >
                      <span className="hover:underline">{link.label}</span>
                      {link.badge && (
                        <span className={`ml-2 mt-0.5 sm:mt-0 ${link.badge === 'new' ? 'bg-[#F07E10] text-white' : 'bg-[#F8BA51] text-black'
                          }  h-fit text-xs font-medium px-1 py-0.5 rounded-sm`}>
                          {link.badge === 'new' ? 'New' : 'Popular'}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}