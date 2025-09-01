import { cookies, headers } from 'next/headers';

export async function getUrlId() {
  // Get from cookies
  const cookieFatId = (await cookies()).get('demo_fat_id')?.value || null;
  
  // Or get from URL if first load
  const referer = (await headers()).get('referer');
  const urlFatId = referer ? new URL(referer).searchParams.get('li_fat_id') : cookieFatId;
  
  return {
    linkedinFatId: urlFatId
  };
}