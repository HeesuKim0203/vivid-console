import type { CCMethod, CCType, ColorType, CCFontStyleType, CustomMethod } from './type'
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


const addMethod = (startNum : number) : CCMethod => {
    return (text : string) => setANSI(startNum, text)
}

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
}, {}) as CCFontStyleType

// Style reset method
const resetMethod : CCMethod = (text : string) => {
    return setANSI(0, text)
} 

// Custom color method
const colorCustomMethod : CustomMethod = (colorNum : number, text : string) => {
    return setColorANSI256(colorNum, text)
} 

// Custom background method
const backgroundCustomMethod : CustomMethod = (colorNum : number, text : string) => {
    return setBackgroundANSI256(colorNum, text)
} 

// Colorful Console
const CC : CCType = {
    color : colorMethod,
    bg : backgroundMethod,
    colorCustom : colorCustomMethod, 
    bgCustom : backgroundCustomMethod,
    reset : resetMethod,
    ...fontStyleMethod,
}

export default CC