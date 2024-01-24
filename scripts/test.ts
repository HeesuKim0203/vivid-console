import VC from 'vivid-console'
import { baseStyles } from '../src/data'
import type { VCFontStyleType, ColorType } from '../src/type'

console.log("common log")

console.log(VC.bgCustom(146, "test"))
console.log(VC.colorCustom(142, "test"))

console.log(VC.color.red(VC.bgCustom(146, "test")))
console.log(VC.bold(VC.colorCustom(188, "test")))

const colorKeys = Object.keys(VC.color) as Array<keyof ColorType>
for (const key of colorKeys) {
    const method = VC.color[key]
    if (typeof method === 'function') {
        console.log(method("test")) 
    }
}

const bgKeys = Object.keys(VC.bg) as Array<keyof ColorType>
for (const key of bgKeys) {
    const method = VC.bg[key];
    if (typeof method === 'function') {
        console.log(method("test"))
    }
}

const fontStyleKeys = Object.keys(VC) as Array<keyof VCFontStyleType>
for (const key of fontStyleKeys) {
    const method = VC[key]
    if (typeof method === 'function' && baseStyles.includes(key)) {
        console.log(method("test")) 
    }
}