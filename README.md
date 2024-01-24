# Vivid Console

## Purpose

Vivid Console is an ideal tool for those who want to add a splash of color to their console outputs. It enables styling in both Terminal and Web Console environments, making your logs more visually appealing and easier to read.

## Features
1. Supports ESM, CommonJS, and browser environments.
2. Wide range of colors and backgrounds, customizable for diverse needs.
3. Built-in TypeScript type support for a CC development experience.

## Example

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
```javascript
console.log(VC.color.red("test"))
```

### Background Color
```javascript
console.log(VC.bg.red("test"))
```

### Font Style
```javascript
console.log(VC.bold("test"))
```

### Custom color
You can enter the number of the color you want to use as the first argument.
![](/scripts/public/customColor.png)
```javascript
console.log(VC.colorCustom(146, "test"))
```
```javascript
console.log(VC.bgCustom(146, "test"))
```

### Custom web console color
For the web, enter css! Some unsupported css.
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