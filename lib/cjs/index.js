"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.baseStyles = exports.baseColors = void 0;
exports.baseColors = ['black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white'];
exports.baseStyles = ['bold', 'faint', 'italic', 'underline', 'inverse', 'hidden', 'strike'];
const setANSI = (startNum, text) => {
    const setStart = `\u001b[${startNum}m`;
    return `${setStart}${text}\u001b[0m`;
};
const setColorANSI256 = (startNum, text) => {
    const setStart = `\u001b[38;5;${startNum}m`;
    return `${setStart}${text}\u001b[0m`;
};
const setBackgroundANSI256 = (startNum, text) => {
    const setStart = `\u001b[48;5;${startNum}m`;
    return `${setStart}${text}\u001b[0m`;
};
const addMethod = (startNum) => {
    return (text) => setANSI(startNum, text);
};
// Add font colors method
const colorMethod = exports.baseColors.reduce((prev, element, index) => {
    return Object.assign(Object.assign({}, prev), { [element]: addMethod(30 + index) });
}, {});
// Add background colors method
const backgroundMethod = exports.baseColors.reduce((prev, element, index) => {
    return Object.assign(Object.assign({}, prev), { [element]: addMethod(40 + index) });
}, {});
// Add font style method
const fontStyleMethod = exports.baseStyles.reduce((prev, element, index) => {
    return Object.assign(Object.assign({}, prev), { [element]: addMethod(index + 1) });
}, {});
// Style reset method
const resetMethod = (text) => {
    return setANSI(0, text);
};
// Custom color method
const colorCustomMethod = (colorNum, text) => {
    return setColorANSI256(colorNum, text);
};
// Custom background method
const backgroundCustomMethod = (colorNum, text) => {
    return setBackgroundANSI256(colorNum, text);
};
// Colorful Console
const CC = Object.assign({ color: colorMethod, bg: backgroundMethod, colorCustom: colorCustomMethod, bgCustom: backgroundCustomMethod, reset: resetMethod }, fontStyleMethod);
exports.default = CC;
