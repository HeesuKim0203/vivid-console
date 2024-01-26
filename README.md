# Vivid Console

![NPM Version](https://img.shields.io/npm/v/vivid-console)
![NPM Downloads](https://img.shields.io/npm/dw/vivid-console)

## Purpose

This project is built with [template](https://github.com/HeesuKim0203/npm-package-template)!  
If you're interested, please take a look!

Vivid Console is an ideal tool for those who want to add a splash of color to their console outputs. It enables styling in both Terminal and Web Console environments, making your logs more visually appealing and easier to read.

## Features
1. Supports ESM, CommonJS, and browser environments.
2. Wide range of colors and backgrounds, customizable for diverse needs.
3. Built-in TypeScript type support for a CC development experience.

## Example

### Support
The basic 8 colors are supported as follows!
![Support](/scripts/public/support.png)

### Terminal
![console](/scripts/public/jsTest.PNG)

### Web console
![webconosle](/scripts/public/webConsoleTest.PNG)

## Getting Started
To start using Vivid Console, install the package using npm

```bash
npm install vivid-console
```

This library is compatible with various environments including JavaScript, TypeScript, and browsers, supporting both ES5 and ES6 standards.

### Font Color
The basic 8 colors.
```javascript
console.log(VC.color.red("test"))
console.log(VC.color.black("test"))
console.log(VC.color.red("test"))
console.log(VC.color.green("test"))
console.log(VC.color.yellow("test"))
console.log(VC.color.blue("test"))
console.log(VC.color.magenta("test"))
console.log(VC.color.cyan("test"))
console.log(VC.color.white("test"))
```

### Background Color
The basic 8 colors.
```javascript
console.log(VC.bg.black("test"))
console.log(VC.bg.red("test"))
console.log(VC.bg.green("test"))
console.log(VC.bg.yellow("test"))
console.log(VC.bg.blue("test"))
console.log(VC.bg.magenta("test"))
console.log(VC.bg.cyan("test"))
console.log(VC.bg.white("test"))
```

### Font Style
```javascript
console.log(VC.bold("test"))
console.log(VC.faint("test"))
console.log(VC.italic("test"))
console.log(VC.underline("test"))
console.log(VC.inverse("test"))
console.log(VC.hidden("test"))
console.log(VC.strike("test"))
```

### Custom color
You can enter the number of the color you want to use as the first argument.  
<b>Web console is not supported!</b>
![](/scripts/public/customColor.png)
```javascript
console.log(VC.colorCustom(146, "test"))
```
```javascript
console.log(VC.bgCustom(146, "test"))
```

### Custom web console
Please insert your desired CSS as the first parameter.  
<b>Only web console is supported!</b>
```javascript
VC.console("color : #999999 ; background : #000000 ;", "test")
```

### ES5 Usage
```javascript
var VC = require('vivid-console'); 

console.log("This is a common log");
console.log(VC.bgCustom(146, "Custom background")); 
console.log(VC.colorCustom(142, "Custom color")); 
console.log(VC.color.red("Red text")); 
console.log(VC.bold("Bold text")); 
```

### ES6 Usage
```typescript
import VC from 'vivid-console'; 

console.log("This is a common log");
console.log(VC.bgCustom(146, "Custom background"));
console.log(VC.colorCustom(142, "Custom color")); 
console.log(VC.color.red("Red text")); 
console.log(VC.bold("Bold text"));
```

### Browser Usage Example
```html
<script src="your-path/vivid-console/dist/index.bundle.js"></script>
<script>
    console.log("This is a common log");
    console.log(VC.bgCustom(146, "Custom background"));
    console.log(VC.colorCustom(142, "Custom color")); 
    console.log(VC.color.red("Red text")); 
    console.log(VC.bold("Bold text"));
</script>
```

## Contributing
Contributions are welcome! If you'd like to contribute, please send me a Pull requests!

## License
Distributed under the MIT License. See LICENSE file for more detail