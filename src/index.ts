const baseColors = [ 'black', 'red', 'green', 'yellow', 'blue', 'magenta', 'cyan', 'white' ]
const baseStyles = [ 'bold', 'faint', 'italic', 'underline', 'inverse', 'hidden', 'strike' ]

type CCMethod = (text : string) => string

const setANSI = (startNum : number, text : string, endNum : number) : string => {

    const setStart = `\u001b[${startNum}m`
    const setEnd = `\u001b[${endNum}m`

    return `${setStart}${text}${setEnd}`
}

const addMethod = (startNum : number, endNum : number) : CCMethod => {
    return (text : string) => setANSI(startNum, text, endNum)
}

// Colorful Console
let CC = {
    color : {},
    background : {},
    reset : (text : string) => {
        return setANSI(0, text, 0)
    }
}

// Add font colors Method
baseColors.forEach((element : string, index : number) => {
    CC.color[element] = addMethod(30 + index, 39)
}) ;


// Add background colors Method
baseColors.forEach((element : string, index : number) => {
    CC.background[element] = addMethod(40 + index, 39)
}) ;

baseStyles.forEach((element : string, index : number) => {
    CC[element] = addMethod(index + 1, index + 21)
}) ;

console.log(CC)


export default CC