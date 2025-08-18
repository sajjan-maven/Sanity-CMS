"use client";
import Link from "next/link";
import React, { useEffect, useState, useRef } from "react";
import { Id, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface SocialMediaComponentProps {
    blogUrl?: string;
    title?: string;
}

const SocialMediaComponent: React.FC<SocialMediaComponentProps> = ({ blogUrl, title }) => {
    const [currentUrl, setCurrentUrl] = useState("");
    const toastShown = useRef<Id | null>(null);
    useEffect(() => {
        if (!blogUrl && typeof window !== "undefined") {
            setCurrentUrl(window.location.href);
        }
    }, [blogUrl]);

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.stitchflow.com";
    let shareUrl = blogUrl || currentUrl;
    // Ensure full URL with domain
    if (!shareUrl.startsWith("http")) {
        shareUrl = `${baseUrl}${shareUrl.startsWith("/") ? `/blog/${shareUrl}` : `/blog/${shareUrl}`}`;
    }
    const finalUrl = encodeURIComponent(shareUrl);

    const encodedTitle = encodeURIComponent(title || "Check out this blog!");

    const socialLinks = {
        // linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${finalUrl}`,
        twitter: `https://x.com/intent/post?url=${finalUrl}&text=${encodedTitle}`,
        reddit: `https://www.reddit.com/submit?url=${finalUrl}&title=${encodedTitle}`,
    };

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(shareUrl);

            if (!toastShown.current) {
                const toastId = toast.success("Link Copied!", {
                    position: "bottom-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                toastShown.current = toastId; // Store the toast ID
            }

            setTimeout(() => {
                if (toastShown.current) {
                    toast.dismiss(toastShown.current); // Dismiss toast safely
                    toastShown.current = null;
                }
            }, 2000);
        } catch (err) {
            console.error("Failed to copy:", err);
            toast.error("Failed to copy link", {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    };

    return (
        <div className="flex gap-1">
            <div>
                <button onClick={handleCopy} className="p-1.5 md:p-2 rounded-full border border-gray-200 flex justify-center items-center">
                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.525 13.657l2.652-2.652.707.707-2.652 2.652c-1.269 1.27-3.327 1.27-4.596 0-1.27-1.27-1.27-3.327 0-4.596l2.652-2.652.707.707-2.652 2.652c-.879.879-.879 2.303 0 3.182.879.879 2.303.879 3.182 0zm6.187-4.773l-.707-.707 2.652-2.652c.879-.879.879-2.303 0-3.182-.879-.879-2.303-.879-3.182 0L7.823 4.995l-.707-.707 2.652-2.652c1.269-1.27 3.327-1.27 4.596 0 1.27 1.27 1.27 3.327 0 4.596l-2.652 2.652zm-5.45 1.62l4.242-4.242-.766-.766-4.242 4.242.766.766z" fillRule="nonzero" fillOpacity="1" fill="#000" stroke="none"></path></svg>
                </button>
            </div>
            <div>
                <Link href={socialLinks.twitter} className="p-1.5 md:p-2 rounded-full border border-gray-200 flex justify-center items-center" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32"><path d="M18.42,14.009L27.891,3h-2.244l-8.224,9.559L10.855,3H3.28l9.932,14.455L3.28,29h2.244l8.684-10.095,6.936,10.095h7.576l-10.301-14.991h0Zm-3.074,3.573l-1.006-1.439L6.333,4.69h3.447l6.462,9.243,1.006,1.439,8.4,12.015h-3.447l-6.854-9.804h0Z"></path></svg>
                </Link>
            </div>
            <div>
                <Link href={socialLinks.reddit} className="p-1.5 md:p-2 rounded-full border border-gray-200 flex justify-center items-center" target="_blank" rel="noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32"><path d="M27.332,10.323c-1.07,0-2.055,.361-2.842,.967-2.143-1.326-4.848-2.16-7.807-2.271v-.013c0-1.983,1.474-3.629,3.386-3.9v-.003c.347,1.47,1.666,2.564,3.242,2.564,1.84,0,3.331-1.491,3.331-3.331s-1.491-3.331-3.331-3.331c-1.609,0-2.95,1.14-3.262,2.657-2.694,.289-4.798,2.574-4.798,5.343v.017c-2.93,.123-5.605,.957-7.729,2.274-.789-.611-1.779-.974-2.853-.974-2.578,0-4.668,2.09-4.668,4.668,0,1.871,1.099,3.483,2.688,4.228,.155,5.419,6.06,9.778,13.323,9.778s13.176-4.364,13.323-9.787c1.576-.75,2.666-2.357,2.666-4.217,0-2.578-2.09-4.668-4.668-4.668ZM7.334,17.952c.078-1.693,1.203-2.992,2.51-2.992s2.307,1.373,2.229,3.066c-.078,1.693-1.054,2.308-2.363,2.308s-2.453-.689-2.375-2.382Zm13.596,4.424c-.804,1.922-2.703,3.273-4.919,3.273s-4.114-1.351-4.919-3.273c-.095-.228,.061-.483,.306-.508,1.437-.145,2.991-.225,4.613-.225s3.175,.08,4.613,.225c.245,.025,.401,.28,.306,.508Zm1.384-2.043c-1.307,0-2.285-.614-2.363-2.308-.078-1.693,.92-3.066,2.229-3.066s2.433,1.299,2.51,2.992c.078,1.693-1.068,2.382-2.375,2.382Z"></path></svg>
                </Link>
            </div>
            <ToastContainer />
        </div>
    );
};

export default SocialMediaComponent;
