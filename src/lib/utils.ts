import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Format a number into a more readable string with K, M, B suffixes
 * @param {number} value - number to be formatted
 * @returns {string} formatted number (e.g., 1500 -> "1.5K")
 */
export function formatNumber(value: number): string {
  if (value >= 1_000_000_000) {
    return (value / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  } else if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  } else if (value >= 1_000) {
    return (value / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  } else {
    return value.toString();
  }
}

/** Mask a phone number by replacing the middle digits with asterisks
 * @param {string} phone - phone number to be masked
 * @returns {string} masked phone number (e.g., "09****78")
 */
export function maskPhone(phone: string): string {
  if (phone.length <= 4) return phone;

  const start = phone.slice(0, 2);
  const end = phone.slice(-2);
  const masked = '*'.repeat(phone.length - 4);

  return `${start}${masked}${end}`;
}

/**
 * Mask an email address by replacing part of the local part with asterisks
 * @param {string} email - email to be masked
 * @returns {string} masked email (e.g., "j***t@example.com")
 */
export function maskEmail(email: string): string {
  const [local, domain] = email.split('@');
  if (!domain) return email; // không phải email hợp lệ // not a valid email

  if (local.length <= 2) {
    return `${local[0]}***@${domain}`;
  }

  const start = local[0];
  const end = local[local.length - 1];
  const repeats = local.length > 20 ? 18 : local.length - 2;
  const masked = '*'.repeat(repeats);

  return `${start}${masked}${end}@${domain}`;
}

/**
 * Convert seconds to mm:ss format
 * @param {number} totalSeconds - Seconds to be converted
 * @returns {string} Formatted time string (e.g., "3:07")
 */
export function formatTime(totalSeconds: number): string {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  // padStart to ensure 2 digits
  return `${String(minutes)}:${String(seconds).padStart(2, '0')}`;
}
