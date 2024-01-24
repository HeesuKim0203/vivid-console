const CC = require('rainbow-console')


console.log("common log")

console.log(CC.bgCustom(146, "test"))
console.log(CC.colorCustom(142, "test"))

console.log(CC.color.red(CC.bgCustom(146, "test")))
console.log(CC.bold(CC.colorCustom(188, "test")))

const colorKeys = Object.keys(CC.color)
for (const key of colorKeys) {
    const method = CC.color[key]
    if (typeof method === 'function') {
        console.log(method("test")) 
    }
}

const bgKeys = Object.keys(CC.bg)
for (const key of bgKeys) {
    const method = CC.bg[key];
    if (typeof method === 'function') {
        console.log(method("test"))
    }
}