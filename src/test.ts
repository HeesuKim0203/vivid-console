import CC from '.'
import type { CCFontStyleType, ColorType } from './type'

const fontStyleKeys = Object.keys(CC) as Array<keyof CCFontStyleType>;
for (const key of fontStyleKeys) {
    const method = CC[key];
    if (typeof method === 'function') {
        console.log(method("test")) 
    }
}

const colorKeys = Object.keys(CC.color) as Array<keyof ColorType>;
for (const key of colorKeys) {
    const method = CC.color[key]
    if (typeof method === 'function') {
        console.log(method("test")) 
    }
}

const bgKeys = Object.keys(CC.bg) as Array<keyof ColorType>;
for (const key of bgKeys) {
    const method = CC.bg[key];
    if (typeof method === 'function') {
        console.log(method("test"))
    }
}


