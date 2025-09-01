"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { ArrowRightIcon } from "lucide-react";
import 'atropos/css';
import NewButton from "./newButton";
import { useDemoData } from "@/hooks/use-demo-data";

export default function HomePageEmailCapture() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { setDemoEmail, setIsEmailSubmitted, linkedinFatId, msclkid, gclid } = useDemoData();
    const router = useRouter();

    const validateEmail = (email: string) => {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    };

    const handleEmailEntry = (value: string) => {
        setEmail(value);
        setError(false);
    };

    const sendToZapier = (eventType: string, payload: { email: string, fatId?: string | null }) => {
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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email) {
            setIsEmailSubmitted(false);
            return;
        }
        if (!validateEmail(email)) {
            setIsEmailSubmitted(false);
            setError(true);
            return;
        }

        try {
            setLoading(true);
            setDemoEmail(email);
            setIsEmailSubmitted(true);

            // Primary submission to HubSpot
            const hubspotResponse = await fetch('/api/hubspotform', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fields: {
                        email,
                        ...(linkedinFatId && { linkedin_fat_id: linkedinFatId }),
                        ...(gclid && { gclid }),
                        ...(msclkid && { msclkid })
                    },
                    pageContext: {
                        pageUri: window.location.href,
                        pageName: "home"
                    }
                })
            });

            if (!hubspotResponse.ok) {
                throw new Error('HubSpot submission failed');
            }

            sendToZapier('home', {
                email,
                ...(linkedinFatId && { linkedin_fat_id: linkedinFatId }),
                ...(gclid && { gclid }),
                ...(msclkid && { msclkid })
            });

            router.push('/demo');
        } catch (err) {
            console.error("Submission failed:", err);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-fit mx-auto mt-8 mb-4 min-[1490px]:mt-10">
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 items-center">
                <div className="w-[280px]">
                    <input
                        type="email"
                        className={`block w-full bg-white shadow border rounded-xl px-3 py-2 h-[48px] outline-none active:outline-none font-label-regular text-[#7b7481] z-50 pointer-events-auto
                            ${error ? "border-red-500" : "border-transparent hover:border hover:border-gray-500"}`}
                        placeholder="Business email"
                        value={email}
                        onChange={(e) => handleEmailEntry(e.target.value)}
                        required
                        disabled={loading}
                    />
                </div>
                <div className="w-[280px] sm:w-[150px]">
                    <NewButton
                        variant="secondary"
                        type="button"
                        className="py-[7px] w-[280px] min-h-[48px] sm:w-auto flex group active:[&_svg]:translate-x-1.5 hover:[&_svg]:w-4 z-50 pointer-events-auto"
                        onClick={handleSubmit}
                        disabled={loading}
                    >
                        <div className="flex justify-center items-center">
                            <span className="font-medium text-base leading-4 whitespace-nowrap pl-2">
                                {loading ? "Processing..." : "Get started"}
                            </span>
                        </div>
                        {!loading && <ArrowRightIcon className="ml-2 h-4 w-0 transition-all ease-in duration-200" />}
                    </NewButton>
                </div>
            </div>
        </div>
    )
}