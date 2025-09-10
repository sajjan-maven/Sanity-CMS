'use client'

import { ArrowRightIcon, Maximize2, X } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import NewButton from "@/components/ui/newButton";

interface RightSectionProps {
  pageData: {
    videoId: string | null;
    formThumbnail: {
      asset: {
        _id: string;
        url: string | null;
      } | null;
    } | null;
  };
}

export default function RightSection({ pageData }: RightSectionProps) {
  const { videoId, formThumbnail } = pageData;
  const [formData, setFormData] = useState({
    email: "",

  });

  const [errors, setErrors] = useState({
    email: false,
    emailInvalid: false,

  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(true);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  // const companySizeOptions = ['10-30', '30-50', '50-100', '100+', '1000+'];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showVideoModal) {
        toggleVideoModal(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showVideoModal]);

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };



  const handleSubmit = async () => {
    const isEmailValid = formData.email ? validateEmail(formData.email) : false;

    const newErrors = {
      email: !formData.email,
      emailInvalid: formData.email ? !isEmailValid : false,
    };

    setErrors(newErrors);

    if (newErrors.email || newErrors.emailInvalid) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/hubspotform', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            email: formData.email,
          },
          pageContext: {
            pageName: 'webinar',
            pageUri: window.location.href
          }
        })
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setFormSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleVideoModal = (show: boolean) => {
    setShowVideoModal(show);
    if (!show && videoContainerRef.current) {
      // Pause the video instead of resetting
      const iframe = videoContainerRef.current.querySelector('iframe');
      if (iframe) {
        iframe.contentWindow?.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
      }
    }
  };

  if (formSubmitted) {
    return (
      <section className="lg:max-w-[50%] w-full bg-[#E9E2D9] px-4 sm:px-6 py-14">
        <div className="flex flex-col items-center justify-center gap-6 h-full">
          {/* Video Container - Will be moved to modal */}
          <div
            ref={videoContainerRef}
            className={`${showVideoModal ? 'fixed inset-0 z-[100] bg-black/45 flex items-center justify-center p-4' : 'relative w-full max-w-[600px] aspect-video'
              }`}
          >
            <div className={`${showVideoModal ? 'relative w-full max-w-5xl aspect-video mt-20' : 'w-full h-full'}`} >
              {videoId && (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&enablejsapi=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={`rounded-lg`}
                ></iframe>
              )}

              {!showVideoModal && (
                <button
                  onClick={() => toggleVideoModal(true)}
                  className="absolute bottom-0 right-0 px-4 py-2 bg-[#363338] text-white rounded-lg hover:bg-[#545058] transition-colors flex items-center gap-2"
                >
                  <Maximize2 size={16} />
                  Expand
                </button>
              )}

              {showVideoModal && (
                <button
                  onClick={() => toggleVideoModal(false)}
                  className="absolute -top-6 -right-6 text-gray-300 hover:text-gray-600 bg-white rounded-lg z-10"
                >
                  <X size={24} />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="lg:max-w-[50%] w-full bg-[#E9E2D9] px-4 sm:px-6 py-14">
      <div className="flex flex-col items-center justify-center gap-6 h-full">
        {formThumbnail?.asset?.url && (
          <Image
            width={445}
            height={250}
            priority
            draggable={false}
            alt="Webinar thumbnail"
            src={formThumbnail.asset.url}
          />
        )}

        <div className="bg-transparent border-none shadow-none w-full max-w-[445px] mx-auto">
          <div className="flex flex-col items-center gap-[18px] w-full">
            <h2 className="w-full font-medium text-[#222222] text-xl">
              Watch the on-demand video
            </h2>

            <div className="flex flex-col items-start gap-5 w-full">
              <div className="w-full">
                <input
                  type="email"
                  placeholder="Business Email"
                  name="email"
                  className={`h-[54px] bg-white w-full rounded-xl border border-solid ${errors ? "border-red-500" : "border-[#c6c4cc]"
                    } shadow-shadow-sm px-4`}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                {errors.email && (
                  <span className="text-[#eb6548] text-sm">Email is required</span>
                )}
                {errors.emailInvalid && !errors.email && (
                  <span className="text-[#eb6548] text-sm">Please enter a valid email address</span>
                )}
              </div>

              <NewButton
                className="flex items-center justify-center gap-2 px-6 py-4 w-full rounded-xl shadow-[0px_2px_12px_#54505840,0px_2px_3px_#54505845,inset_0px_-2px_4px_#00000099] bg-[linear-gradient(180deg,rgba(84,80,88,1)_0%,rgba(54,51,56,1)_100%)]"
                onClick={handleSubmit}
                variant="secondary"
                disabled={isSubmitting}
              >
                <span className="font-h6-medium text-white whitespace-nowrap">
                  {isSubmitting ? 'Submitting...' : 'Watch now'}
                </span>
                {!isSubmitting && <ArrowRightIcon className="h-4 w-4 text-white" />}
              </NewButton>
            </div>
          </div>

          <p className={`w-full text-[#363338] text-xs leading-[16.2px] text-center mt-3`}>
            We respect your privacy. By submitting, you agree to our{" "}
            <Link href="/privacy" rel="noopener noreferrer" target="_blank" className="underline">
              privacy policy.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}