"use client";
import { ArrowRightIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Script from "next/script";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import NewButton from "@/components/ui/newButton";
import { useDemoData } from "@/hooks/use-demo-data";

interface FormData {
    email: string;
    firstname: string;
    lastname: string;
    linkedin_fat_id: string;
}

interface FormErrors {
    email?: string;
    firstname?: string;
    lastname?: string;
}

interface ZapierPayload {
    email: string;
    firstname?: string;
    lastname?: string;
    linkedin_fat_id?: string;
    gclid?: string;
    msclkid?: string;
}

export default function DemoForm() {
    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hubspotMeetingUrl, setHubspotMeetingUrl] = useState("");
    const [iframeLoading, setIframeLoading] = useState(false);
    const { linkedinFatId, demoEmail, isEmailSubmitted, setIsEmailSubmitted, gclid, msclkid } = useDemoData();
    const [formData, setFormData] = useState<FormData>({
        email: "",
        firstname: "",
        lastname: "",
        linkedin_fat_id: linkedinFatId
    });
    const [errors, setErrors] = useState<FormErrors>({});

    useEffect(() => {
        if (demoEmail && isEmailSubmitted) {
            setLoading(true);
            setFormData(prev => ({ ...prev, email: demoEmail }));

            const simulateEmailSubmit = async () => {
                try {
                    const res = await fetch("/api/hubspot/contacts", {
                        method: "POST",
                        body: JSON.stringify({ email: demoEmail }),
                        headers: { "Content-Type": "application/json" },
                    });

                    const data = await res.json();

                    if (res.ok) {
                        setStep(2);
                    } else {
                        setErrors({ email: data.message || "Please complete your details above" });
                    }
                } catch (error) {
                    console.error("Failed to submit:", error);
                    setErrors({ email: "Connection error. Please try again or continue below" });
                    setFormData(prev => ({ ...prev, email: demoEmail }));
                } finally {
                    setLoading(false);
                    setIsEmailSubmitted(false);
                }
            };

            simulateEmailSubmit();
        }
    }, [demoEmail, isEmailSubmitted, setIsEmailSubmitted]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const validateEmail = (email: string): boolean => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const sendToZapier = (eventType: string, payload: ZapierPayload) => {
        // Fire-and-forget to Zapier
        fetch('/api/zapier', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                event_type: eventType,
                data: payload
            })
        }).catch(error => {
            console.error('Zapier submission failed silently:', error);
        });
    };

    const handleEmailSubmit = async () => {
        if (!formData.email) {
            setErrors({ email: "Please enter your business email" });
            return;
        }
        if (!validateEmail(formData.email)) {
            setErrors({ email: "Please enter a valid email address" });
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/hubspot/contacts", {
                method: "POST",
                body: JSON.stringify({ email: formData.email.trim() }),
                headers: { "Content-Type": "application/json" },
            });

            const data = await res.json();

            if (res.ok) {
                setStep(2);
            } else {
                setErrors({ email: data.message || "There was an error saving your email. Please try again." });
            }
        } catch (error) {
            setErrors({ email: "Connection error. Please try again later." });
            console.error(String(error));
        } finally {
            setLoading(false);
        }
    };

    const validateForm = (): FormErrors => {
        const newErrors: FormErrors = {};
        if (!formData.firstname.trim()) newErrors.firstname = "First name is required";
        else if (formData.firstname.length > 50) newErrors.firstname = "First name too long (max 50 characters)";

        if (!formData.lastname.trim()) newErrors.lastname = "Last name is required";
        else if (formData.lastname.length > 50) newErrors.lastname = "Last name too long (max 50 characters)";

        return newErrors;
    };

    const handleFinalSubmit = async () => {
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setLoading(true);
        try {
            const hubspotResponse = await fetch("/api/hubspot/form-submit", {
                method: "POST",
                body: JSON.stringify({ email: formData.email, firstname: formData.firstname, lastname: formData.lastname }),
                headers: { "Content-Type": "application/json" },
            });

            if (!hubspotResponse.ok) {
                throw new Error('HubSpot submission failed');
            }

            sendToZapier('demo', {
                email: formData.email,
                firstname: formData.firstname,
                lastname: formData.lastname,
                ...(linkedinFatId && { linkedin_fat_id: linkedinFatId }),
                ...(gclid && { gclid: gclid }),
                ...(msclkid && { msclkid: msclkid })
            });

            setStep(3);
            const constructMeetingUrl = (): string => {
                try {
                    const baseUrl = "https://meetings-na2.hubspot.com/jay-srinivasan?utm_source=website&utm_campaign=demo_page";
                    const params = new URLSearchParams({
                        email: formData.email,
                        firstname: encodeURIComponent(formData.firstname.trim()),
                        lastname: encodeURIComponent(formData.lastname.trim()),
                        embed: "true",
                    });
                    return `${baseUrl}&${params.toString()}`;
                } catch (e) {
                    console.error("Error constructing meeting URL:", e);
                    return "#";
                }
            };
            setHubspotMeetingUrl(constructMeetingUrl());
        } catch (error) {
            setErrors({
                email: error instanceof Error ? error.message :
                    "Connection error. Please try again later."
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full">
            <div className="flex flex-col items-start gap-8 relative w-full">
                {/* STEP 1: Email capture */}
                {step === 1 && (
                    <div className="flex flex-col items-start gap-5 relative w-full transition-all duration-300 ease-in-out">
                        {loading ? (
                            <div className="flex justify-center w-full py-8">
                                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-900"></div>
                            </div>
                        ) :
                            <div className="flex flex-col items-start gap-2 relative w-full">
                                <label className="flex h-4 items-center gap-2 relative w-full">
                                    <span className="flex-1 mt-[-1.00px] font-label-medium font-[number:var(--label-medium-font-weight)] text-[#7b7481] text-[length:var(--label-medium-font-size)] tracking-[var(--label-medium-letter-spacing)] leading-[var(--label-medium-line-height)] [font-style:var(--label-medium-font-style)]">
                                        Business email
                                    </span>
                                </label>
                                <input
                                    name="email"
                                    className={`h-[54px] bg-white w-full rounded-xl border border-solid ${errors.email ? "border-red-500" : "border-[#c6c4cc]"
                                        } shadow-shadow-sm px-4`}
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                />
                                {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                            </div>}

                        <NewButton
                            variant="secondary"
                            className="w-full py-4 group active:[&_svg]:translate-x-1.5 hover:[&_svg]:translate-x-0.8"
                            onClick={handleEmailSubmit}
                            disabled={loading}
                        >
                            {loading ? (
                                <span className="font-h6-medium font-[number:var(--h6-medium-font-weight)] text-white text-[length:var(--h6-medium-font-size)] tracking-[var(--h6-medium-letter-spacing)] leading-[var(--h6-medium-line-height)] whitespace-nowrap [font-style:var(--h6-medium-font-style)]">
                                    Processing...
                                </span>
                            ) : (
                                <>
                                    <span className="font-h6-medium font-[number:var(--h6-medium-font-weight)] text-white text-[length:var(--h6-medium-font-size)] tracking-[var(--h6-medium-letter-spacing)] leading-[var(--h6-medium-line-height)] whitespace-nowrap [font-style:var(--h6-medium-font-style)]">
                                        Get Started
                                    </span>
                                    {!loading && <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-200" />}
                                </>
                            )}
                        </NewButton>
                    </div>
                )}

                {/* STEP 2: Full form */}
                {step === 2 && (
                    <div className="flex flex-col items-start relative w-full animate-fadeIn transition-all duration-300 ease-in-out">
                        {/* Email field (pre-filled) */}
                        <div className="flex flex-col items-start gap-2 relative w-full mb-5">
                            <label className="flex h-4 mb-2 text-[#7b7481] items-center gap-2 relative w-full">
                                Business email
                            </label>
                            <input
                                className="h-[54px] bg-white w-full rounded-xl border border-solid border-[#c6c4cc] shadow-shadow-sm px-4"
                                value={formData.email}
                                disabled
                            />
                        </div>
                        <div className="mb-5">
                            {/* First name and Last name fields */}
                            <div className="flex items-start gap-6 relative w-full">
                                {/* First name */}
                                <div className="flex flex-col pb-5 items-start relative flex-1">
                                    <label className="flex h-4 mb-2 text-[#7b7481] items-center gap-2 relative w-full">
                                        First name
                                    </label>
                                    <input
                                        name="firstname"
                                        className={`h-[54px] bg-white w-full rounded-xl border border-solid ${errors.firstname ? "border-red-500" : "border-[#c6c4cc]"
                                            } shadow-shadow-sm px-4`}
                                        value={formData.firstname}
                                        onChange={handleChange}
                                        aria-invalid={!!errors.firstname}
                                        aria-describedby={errors.firstname ? "firstname-error" : undefined}
                                    />
                                    {errors.firstname && <p className="absolute bottom-0 left-1 text-red-500 text-xs mt-1">{errors.firstname}</p>}
                                </div>

                                {/* Last name  */}
                                <div className="flex flex-col pb-5 items-start relative flex-1">
                                    <label className="flex h-4 mb-2 text-[#7b7481] items-center gap-2 relative w-full">
                                        Last name
                                    </label>
                                    <input
                                        name="lastname"
                                        className={`h-[54px] bg-white w-full rounded-xl border border-solid ${errors.lastname ? "border-red-500" : "border-[#c6c4cc]"
                                            } shadow-shadow-sm px-4`}
                                        value={formData.lastname}
                                        onChange={handleChange}
                                        aria-invalid={!!errors.lastname}
                                        aria-describedby={errors.lastname ? "lastname-error" : undefined}
                                    />
                                    {errors.lastname && <p className="absolute bottom-0 left-1 text-red-500 text-xs mt-1">{errors.lastname}</p>}
                                </div>
                            </div>
                        </div>

                        {/* Submit button */}
                        <NewButton
                            variant="secondary"
                            className="w-full py-4 group active:[&_svg]:translate-x-1.5 hover:[&_svg]:translate-x-0.8"
                            onClick={handleFinalSubmit}
                            disabled={loading}
                        >
                            <span className="font-h6-medium font-[number:var(--h6-medium-font-weight)] text-white text-[length:var(--h6-medium-font-size)] tracking-[var(--h6-medium-letter-spacing)] leading-[var(--h6-medium-line-height)] whitespace-nowrap [font-style:var(--h6-medium-font-style)]">
                                {loading ? "Processing..." : "Schedule a demo"}
                            </span>
                            {!loading && <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform duration-200" />}
                        </NewButton>
                    </div>
                )}

                {step === 3 && (
                    <div className="flex flex-col items-center justify-center w-full h-full animate-fadeIn transition-all duration-300 ease-in-out">
                        {iframeLoading && (
                            <div className="flex items-center justify-center h-[600px]">
                                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
                            </div>
                        )}
                        <div
                            className="meetings-iframe-container w-full min-h-[600px]"
                            data-src={hubspotMeetingUrl}
                            style={{ display: iframeLoading ? "none" : "block" }}
                        />
                        <Script
                            strategy="afterInteractive"
                            type="text/javascript"
                            src="https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js"
                            onLoad={() => setIframeLoading(false)}
                            onError={() => setIframeLoading(false)}
                        />
                    </div>
                )}
            </div>
            {/* Privacy notice */}
            <p className={`w-full text-[#363338] ${step === 1 ? 'block' : 'hidden'} text-xs leading-[16.2px] text-center mt-3`}>
                We respect your privacy. By submitting, you agree to our{" "}
                <Link href="/privacy" rel="noopener noreferrer" target="_blank" className="underline">
                    privacy policy.
                </Link>
            </p>
        </div>
    )
}