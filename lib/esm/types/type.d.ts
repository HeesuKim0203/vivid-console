import { baseColors, baseStyles } from './data';
export type CCMethod = (text: string) => string;
export type CustomMethod = (num: number, text: string) => string;
export type WebConsoleCustomMethod = (style: string, text: string) => void;
type ListToObject<T extends readonly string[]> = {
    [P in T[number]]: CCMethod;
};
export type ColorType = ListToObject<typeof baseColors>;
export type CCFontStyleType = ListToObject<typeof baseStyles>;
export type CCType = {
    [K in keyof CCFontStyleType]: CCFontStyleType[K];
} & {
    color: ColorType;
    bg: ColorType;
    colorCustom: CustomMethod;
    bgCustom: CustomMethod;
    webConsole: WebConsoleCustomMethod;
    reset: CCMethod;
};
export {};
//# sourceMappingURL=type.d.ts.map