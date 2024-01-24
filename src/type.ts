import { baseColors, baseStyles } from './data'

export type VCMethod = (text : string) => string
export type CustomMethod = (num : number, text : string) => string
export type WebConsoleCustomMethod = (style : string, text : string) => void

type ListToObject<T extends readonly string[]> = {
    [ P in T[number] ] : VCMethod
}

export type ColorType = ListToObject<typeof baseColors>
export type VCFontStyleType = ListToObject<typeof baseStyles>

export type VCType = {
    [ K in keyof VCFontStyleType ] : VCFontStyleType[K]
} & {
    color : ColorType
    bg : ColorType
    colorCustom : CustomMethod
    bgCustom : CustomMethod
    console : WebConsoleCustomMethod
    reset : VCMethod
}
