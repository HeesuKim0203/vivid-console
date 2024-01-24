import CC from 'cc-log'
import { baseStyles } from '../src/data'
import type { BCFontStyleType, ColorType } from '../src/type'

console.log("common log")

console.log(CC.bgCustom(146, "test"))
console.log(CC.colorCustom(142, "test"))

console.log(CC.color.red(CC.bgCustom(146, "test")))
console.log(CC.bold(CC.colorCustom(188, "test")))

const colorKeys = Object.keys(CC.color) as Array<keyof ColorType>
for (const key of colorKeys) {
    const method = CC.color[key]
    if (typeof method === 'function') {
        console.log(method("test")) 
    }
}

const bgKeys = Object.keys(CC.bg) as Array<keyof ColorType>
for (const key of bgKeys) {
    const method = CC.bg[key];
    if (typeof method === 'function') {
        console.log(method("test"))
    }
}

const fontStyleKeys = Object.keys(CC) as Array<keyof BCFontStyleType>
for (const key of fontStyleKeys) {
    const method = CC[key]
    if (typeof method === 'function' && baseStyles.includes(key)) {
        console.log(method("test")) 
    }
}