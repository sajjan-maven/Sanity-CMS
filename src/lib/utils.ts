import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import toast from "react-hot-toast";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
};

export function scrollToElement(id: string) {
  const element = document.getElementById(id)
  if (element) {
    const rect = element.getBoundingClientRect()
    const scrollTop = window.scrollY + rect.top - 90
    window.scrollTo({ top: scrollTop, behavior: 'smooth' })
  }
};

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "");
};

export function truncateText(text: string, target: number) {
  if (text.length > target) { 
    return text.slice(0, target) + '...';
  };
  return text;
};

export function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).replace(/(\d+)/, (match) => {
    const num = parseInt(match);
    const suffix = ['th', 'st', 'nd', 'rd'][
      (num > 3 && num < 21) || num % 10 > 3 ? 0 : num % 10
    ];
    return match + suffix;
  });
};

export async function copyHeadingUrl(id: string): Promise<boolean> {
  try {
    const url = `${window.location.href.split('#')[0]}#${id}`;
    await navigator.clipboard.writeText(url);
    return true;
  } catch (error) {
    console.error('Failed to copy URL:', error);
    return false;
  }
};

export function copyToClipboard(id: string) {
  copyHeadingUrl(id);
  toast.success('Copied to clipboard');
};