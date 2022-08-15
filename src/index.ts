function prepend(numSpaces: number, inputString: string) {
    let spacesString: String = ""
    for (let i=0; i < numSpaces; i++) {
        spacesString + " "
        console.log(spacesString)
    }
    let resultString: String = spacesString + inputString

    return console.log(resultString)
}

prepend(10, "Ten Spaces First")