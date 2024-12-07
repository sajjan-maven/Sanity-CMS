import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

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