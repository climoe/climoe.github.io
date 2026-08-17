import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function useCn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function useDateFormat(input: string | number): string {
    const date = new Date(input);
    return date.toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
}

export function useAbsoluteUrl(path: string) {
    return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function useCssVar(variable: string) {
    const computedStyle:  CSSStyleDeclaration = window.getComputedStyle(document.documentElement);
    return computedStyle.getPropertyValue(`${variable}`);

}