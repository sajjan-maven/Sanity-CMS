"use client";

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

// Helper function to safely access `sessionStorage` (avoids SSR errors)
const getSessionStorage = (key: string, defaultValue: string | boolean): string | boolean => {
  if (typeof window === 'undefined') return defaultValue;
  const storedValue = sessionStorage.getItem(key);
  return storedValue ? JSON.parse(storedValue) : defaultValue;
};

export function useDemoData() {
  const params = useSearchParams();

  // Initialize state from sessionStorage (or fallback to defaults)
  const [linkedinFatId, setLinkedinFatId] = useState<string>(() => 
    getSessionStorage('demo_fat_id', '') as string
  );
  const [gclid, setGclid] = useState<string>(() =>
    getSessionStorage('gclid', '') as string
  );
  const [msclkid, setMsclkid] = useState<string>(() =>
    getSessionStorage('msclkid', '') as string
  );
  const [demoEmail, setDemoEmail] = useState<string>(() => 
    getSessionStorage('demo_email', '') as string
  );
  const [isEmailSubmitted, setIsEmailSubmitted] = useState<boolean>(() => 
    getSessionStorage('demo_email_submitted', false) as boolean
  );

  // Update sessionStorage whenever state changes
  useEffect(() => {
    sessionStorage.setItem('demo_fat_id', JSON.stringify(linkedinFatId));
  }, [linkedinFatId]);

  useEffect(() => {
    sessionStorage.setItem('gclid', JSON.stringify(gclid));
  }, [gclid]);

  useEffect(() => {
    sessionStorage.setItem('msclkid', JSON.stringify(msclkid));
  }, [msclkid]);

  useEffect(() => {
    sessionStorage.setItem('demo_email', JSON.stringify(demoEmail));
  }, [demoEmail]);

  useEffect(() => {
    sessionStorage.setItem('demo_email_submitted', JSON.stringify(isEmailSubmitted));
  }, [isEmailSubmitted]);

  // Handle tracking parameters from URL (if provided)
  useEffect(() => {
    // LinkedIn Fat ID
    const urlFatId = params.get('li_fat_id') || params.get('li_fat_id');
    if (urlFatId && urlFatId !== linkedinFatId) {
      setLinkedinFatId(urlFatId);
      document.cookie = `demo_fat_id=${urlFatId}; path=/; Secure; SameSite=Lax`;
    }

    // Google Click ID
    const urlGclid = params.get('gclid');
    if (urlGclid && urlGclid !== gclid) {
      setGclid(urlGclid);
      document.cookie = `gclid=${urlGclid}; path=/; Secure; SameSite=Lax`;
    }

    // Microsoft Click ID
    const urlMsclkid = params.get('msclkid');
    if (urlMsclkid && urlMsclkid !== msclkid) {
      setMsclkid(urlMsclkid);
      document.cookie = `msclkid=${urlMsclkid}; path=/; Secure; SameSite=Lax`;
    }
  }, [params, linkedinFatId, gclid, msclkid]);

  return { 
    linkedinFatId,
    gclid,
    msclkid,
    demoEmail, 
    setDemoEmail, 
    isEmailSubmitted, 
    setIsEmailSubmitted 
  };
}