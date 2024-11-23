import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToElement(id: string, offset = 80) {
  const element = document.getElementById(id)
  if (element) {
    const rect = element.getBoundingClientRect()
    const scrollTop = window.scrollY + rect.top - 90
    window.scrollTo({ top: scrollTop, behavior: 'smooth' })
  }
}