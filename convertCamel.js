
function convertCamelCase(str) {
    let strArray = str.split(/[-_]/)
    
    for (let index = 0; index < strArray.length; index++) {

        if (index == 0) {
            continue
        }

        let currentString = strArray[index]
        let capChar = currentString[0].toUpperCase()
        let strRest = currentString.substring(1)

        strArray[index] = capChar + strRest
    }

    return strArray.join("")
}



console.log(convertCamelCase("the-stealth-warrior"));