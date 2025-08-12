"use client";

import { ArrowRightIcon } from "lucide-react";
import React, { useState } from "react";
import { PageBuilderType } from "@/types";
import NewButton from "@/components/ui/newButton";
import { useDemoData } from "@/hooks/use-demo-data";

export type JoinOurNewsletterBlockProps = PageBuilderType<"joinOurNewsletterBlock">;

export default function JoinOurNewsletterBlock(props: JoinOurNewsletterBlockProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankyou, setShowThankyou] = useState(false);
  const { linkedinFatId, gclid, msclkid } = useDemoData();
  const [error, setError] = useState(false);

  const {
    title,
    description,
    placeholder,
    buttonText,
    successMessage,
    processingText,
    spacing,
    backgroundColor,
    successBorderColor,
    successTextColor
  } = props;

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
  };

  const handleEmailEntry = (value: string) => {
    setEmail(value);
    setError(false);
  };

  const sendToZapier = async (eventType: string, payload: {
    email: string,
    linkedin_fat_id?: string | null,
    gclid?: string | null,
    msclkid?: string | null
  }) => {
    try {
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
    } catch (error) {
      console.error('Error initializing Zapier submission:', error);
    }
  };

  const handleClick = async (e: React.MouseEvent) => {
    e.preventDefault();

    if (!email) {
      setIsSubmitting(false);
      return;
    }
    if (!validateEmail(email)) {
      setIsSubmitting(false);
      setError(true);
      return;
    }

    try {
      setIsSubmitting(true);

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
            pageName: "tools"
          }
        })
      });

      if (!hubspotResponse.ok) {
        throw new Error('HubSpot submission failed');
      }

      // Fire-and-forget to Zapier
      sendToZapier('tools', {
        email,
        ...(linkedinFatId && { linkedin_fat_id: linkedinFatId }),
        ...(gclid && { gclid }),
        ...(msclkid && { msclkid })
      });

      setEmail("");
      setShowThankyou(true);
    } catch (error) {
      console.error("Error submitting email:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      className="px-6 w-full"
      style={{
        paddingTop: `${spacing?.top || 40}px`,
        paddingBottom: `${spacing?.bottom || 80}px`
      }}
    >
      <div
        className="flex flex-col max-w-[1256px] items-center p-8 md:p-16 w-full rounded-3xl mx-auto"
        style={{ backgroundColor: backgroundColor?.value || '#E9E2D9' }}
      >
        <p className="font-medium md:font-semibold text-[#363338] text-2xl md:text-[40px] text-center max-w-[550px] mb-2">
          {title || 'Join our newsletter'}
        </p>
        <p className="text-[#363338] text-base text-center leading-6">
          {description || 'Get notified about product updates, free IT tools, and expert tips.'}
        </p>
        <div className="w-full max-w-[1256px] mx-auto">
          {showThankyou ? (
            <div
              className="w-fit mx-auto text-lg font-medium border-2 border-dashed px-8 py-2 rounded-3xl mt-8"
              style={{
                borderColor: successBorderColor?.value || '#D3C3B2',
                color: successTextColor?.value || '#3D3123'
              }}
            >
              <p className="text-center">
                {successMessage || 'Thank you for subscribing to our newsletter!'}
              </p>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row justify-center gap-3 items-center mt-8 w-full max-w-[280px] sm:max-w-full mx-auto">
              <input
                type="email"
                className={`w-full bg-white border rounded-xl ${error ? "border-red-500" : "border-transparent hover:border-gray-500"
                  } max-w-[280px] shadow-none px-3 py-2 md:h-[45px] outline-none active:outline-none font-regular text-[#7b7481]`}
                placeholder={placeholder || 'Business email'}
                value={email}
                onChange={(e) => handleEmailEntry(e.target.value)}
                required
                disabled={isSubmitting}
              />
              <div className="w-full max-w-[280px] sm:w-[130px]">
                <NewButton
                  variant="primary"
                  className="w-full sm:w-fit py-2.5 group active:[&_svg]:translate-x-1.5 hover:[&_svg]:w-4"
                  type="button"
                  onClick={handleClick}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (processingText || 'Processing...') : (buttonText || 'Subscribe')}
                  {!isSubmitting && <ArrowRightIcon className="ml-2 h-4 w-0 transition-all ease-in duration-200" />}
                </NewButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}