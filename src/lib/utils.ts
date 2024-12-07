import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines and merges class names efficiently, resolving Tailwind CSS conflicts
 * This function serves as the foundation for dynamic styling in our components
 * 
 * @param inputs - Any number of class name values, arrays, objects, or falsy values
 * @returns A merged string of class names with Tailwind conflicts resolved
 * 
 * Example usage:
 * cn("bg-blue-500", isActive && "opacity-100", ["p-2", "m-1"], { "hidden": isHidden })
 */
export function cn(...inputs: ClassValue[]): string {
  // First, combine all class names using clsx, which handles:
  // - Arrays of class names
  // - Conditional class names
  // - Objects with boolean values
  // Then, merge Tailwind classes intelligently using twMerge to prevent conflicts
  return twMerge(clsx(inputs));
}

/**
 * Formats a date into a readable string using the browser's locale
 * 
 * @param date - Date to format
 * @param options - Intl.DateTimeFormatOptions for customizing the output
 * @returns Formatted date string
 */
export function formatDate(
  date: Date,
  options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  }
): string {
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

/**
 * Delays execution for a specified number of milliseconds
 * Useful for debouncing, animations, and testing
 * 
 * @param ms - Number of milliseconds to wait
 * @returns Promise that resolves after the specified delay
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Creates a debounced version of a function
 * Useful for handling frequent events like window resize or input changes
 * 
 * @param fn - Function to debounce
 * @param wait - Number of milliseconds to wait before calling the function
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  
  return function(...args: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), wait);
  };
}

/**
 * Validates an email address format
 * 
 * @param email - Email address to validate
 * @returns Boolean indicating if the email format is valid
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Generates a URL-friendly slug from a string
 * Useful for creating clean URLs from titles or names
 * 
 * @param str - String to convert to a slug
 * @returns URL-friendly slug string
 * 
 * Example:
 * slugify("Hello World!") -> "hello-world"
 */
export function slugify(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Truncates a string to a specified length, adding an ellipsis if truncated
 * 
 * @param str - String to truncate
 * @param length - Maximum length of the resulting string (including ellipsis)
 * @returns Truncated string
 */
export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length - 3) + "...";
}
