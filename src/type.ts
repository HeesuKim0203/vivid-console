import { baseColors, baseStyles } from './data'

export type RCMethod = (text : string) => string
export type CustomMethod = (num : number, text : string) => string
export type WebConsoleCustomMethod = (style : string, text : string) => void

type ListToObject<T extends readonly string[]> = {
    [ P in T[number] ] : RCMethod
}

export type ColorType = ListToObject<typeof baseColors>
export type RCFontStyleType = ListToObject<typeof baseStyles>

export type RCType = {
    [ K in keyof RCFontStyleType ] : RCFontStyleType[K]
} & {
    color : ColorType
    bg : ColorType
    colorCustom : CustomMethod
    bgCustom : CustomMethod
    console : WebConsoleCustomMethod
    reset : RCMethod
}
