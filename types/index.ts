export type Theme = "primary" | "secondary" | "tertiary" | "quaternary";
export type Size = "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl";

type ValueOf<T> = T[keyof T];
