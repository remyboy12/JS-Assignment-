function switchChar(inputChar, actualChar, changeChar) {
    if (actualChar.length != changeChar.length) {
        return "Length mismatch."
    }

    for (let index = 0; index < actualChar.length; index++) {
        if (index != actualChar.lastIndexOf(actualChar[index])) {
            return "Repeated value."
        }
        
    }

    if (inputChar.length > actualChar.length) {
        return -1
    }

    let outChar = ""

    for (let index = 0; index < inputChar.length; index++) {

        if (actualChar.indexOf(inputChar[index]) == -1) {
            return -1
        }

        outChar += changeChar[actualChar.indexOf(inputChar[index])]
    }

    return outChar
}

let inputChar = "duck"
let actualChar = "adkicuer"
let changeChar = "dskhodtm"

let outChar = ""

for (let index = 0; index < inputChar.length; index++) {
    if (actualChar.indexOf(inputChar[index]) == -1) {
        return -1
    }
    outChar += changeChar[actualChar.indexOf(inputChar[index])]
}

console.log(outChar);

console.log(switchChar("cade", "abcdefgh", "grdwqsdr"));