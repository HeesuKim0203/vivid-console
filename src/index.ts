import type { VCMethod, VCType, ColorType, VCFontStyleType, CustomMethod, WebConsoleCustomMethod } from './type'
import { baseColors, baseStyles } from './data'

const setANSI = (startNum : number, text : string) : string => {
    const setStart = `\u001b[${startNum}m`
    return `${setStart}${text}\u001b[0m`
}

const setColorANSI256 = (startNum : number, text : string) : string => {
    const setStart = `\u001b[38;5;${startNum}m`
    return `${setStart}${text}\u001b[0m`
}

const setBackgroundANSI256 = (startNum : number, text : string) : string => {
    const setStart = `\u001b[48;5;${startNum}m`
    return `${setStart}${text}\u001b[0m`
}

// Common method
const addMethod = (startNum : number) : VCMethod => {
    return (text : string) => setANSI(startNum, text)
}

// Style reset method
const resetMethod : VCMethod = (text : string) => setANSI(0, text)

// Custom color method
const colorCustomMethod : CustomMethod = (colorNum : number, text : string) => setColorANSI256(colorNum, text)

// Custom background method
const backgroundCustomMethod : CustomMethod = (colorNum : number, text : string) => setBackgroundANSI256(colorNum, text)

// Web console custom method
const webConsoleCustomMethod : WebConsoleCustomMethod = (style : string, text : string) => { console.log(`%c${text}`, style) }

// Add font colors method
const colorMethod = baseColors.reduce((prev : object, element : string, index : number) : object => {
    return {
        ...prev,
        [ element ] : addMethod(30 + index)
    }
}, {}) as ColorType

// Add background colors method
const backgroundMethod = baseColors.reduce((prev : object, element : string, index : number) : object => {
    return {
        ...prev,
        [ element ] : addMethod(40 + index)
    }
}, {}) as ColorType

// Add font style method
const fontStyleMethod = baseStyles.reduce((prev : object, element : string, index : number) : object => {
    return {
        ...prev,
        [ element ] : addMethod(index + 1)
    }
}, {}) as VCFontStyleType

// Better Console
const VC : VCType = {
    color : colorMethod,
    bg : backgroundMethod,
    colorCustom : colorCustomMethod, 
    bgCustom : backgroundCustomMethod,
    reset : resetMethod,
    console : webConsoleCustomMethod,
    ...fontStyleMethod,
}

export default VC