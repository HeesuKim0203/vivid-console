const VC = require('vivid-console')

console.log("common log")

console.log(VC.bgCustom(146, "test"))
console.log(VC.colorCustom(142, "test"))

console.log(VC.color.red(VC.bgCustom(146, "test")))
console.log(VC.bold(VC.colorCustom(188, "test")))

const colorKeys = Object.keys(VC.color)
for (const key of colorKeys) {
    const method = VC.color[key]
    if (typeof method === 'function') {
        console.log(method("test")) 
    }
}

const bgKeys = Object.keys(VC.bg)
for (const key of bgKeys) {
    const method = VC.bg[key];
    if (typeof method === 'function') {
        console.log(method("test"))
    }
}