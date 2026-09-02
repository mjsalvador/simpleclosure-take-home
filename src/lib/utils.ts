import { isAxiosError } from 'axios';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getErrorMessage(e: unknown): string {
  if (isAxiosError(e)) return e.response?.data?.status_message ?? e.message;
  if (e instanceof Error) return e.message;
  return 'Something went wrong';
}
