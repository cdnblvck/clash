/**
 * 60% Cover
 * 40% Fail
 * <3G <10S <4Z <4I <8Z <18Y <2G <7U   DIVERGENT
 * >0A <11W >11A >2C <0G >1H <8I <7U  ALLEGIANT
 * @param text
 * @returns {string}
 */
const uno = (text) => {
    let v = text.split(' ')
    let str = ""
    for (let i = 0; i < v.length; i++) {
        let l = ""
        let x = v[i].split('');
        if (x[0] === ">") {
            l = x[2].substring(0, x[2].length - 1) + String.fromCharCode(x[2].charCodeAt(x[2].length - 1) + Number(x[1]))
        } else {
            l = x[2].substring(0, x[2].length - 1) + String.fromCharCode(x[2].charCodeAt(x[2].length - 1) - Number(x[1]))
        }
        str += l
    }
    return str
}


/**
 * Variante /[^[A-Z]]/i not letter
 * @param text
 * @returns {number}
 */
const countLetter = (text) => {
    return (text.match(new RegExp(/[A-Za-z]/, "g")) || []).length
}
//count
//("longString147".match(/\d+/g) || []).length

function reshape(string, num) {
    let str = string.replace(/\s/g, '')
    let regex = new RegExp(".{" + num + "}", "g");
    return str.replace(regex, "$&\n");
}