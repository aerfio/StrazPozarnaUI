export const convertToNumberingScheme=(number)=> {
    let baseChar = ("A").charCodeAt(0),
        letters  = "";

    do {
        number -= 1;
        letters = String.fromCharCode(baseChar + (number % 26)) + letters;
        number = (number / 26) >> 0; // quick `floor`
    } while(number > 0);

    return letters;
};