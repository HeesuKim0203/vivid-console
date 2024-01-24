import { baseColors, baseStyles } from './data'

export type BCMethod = (text : string) => string
export type CustomMethod = (num : number, text : string) => string
export type WebConsoleCustomMethod = (style : string, text : string) => void

type ListToObject<T extends readonly string[]> = {
    [ P in T[number] ] : BCMethod
}

export type ColorType = ListToObject<typeof baseColors>
export type BCFontStyleType = ListToObject<typeof baseStyles>

export type BCType = {
    [ K in keyof BCFontStyleType ] : BCFontStyleType[K]
} & {
    color : ColorType
    bg : ColorType
    colorCustom : CustomMethod
    bgCustom : CustomMethod
    console : WebConsoleCustomMethod
    reset : BCMethod
}
