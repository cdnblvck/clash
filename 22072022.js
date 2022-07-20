/**
 * 83% Cover
 * 40% Fail
 * hello  hello World 1
 * one   none done one 3
 * lo Hello my name is LoLo from Lousiana.I am a Bot. 3
 * RAGE Rage rageing the RAGE 3
 * top Fames est optimus coquus. 0
 * @param text
 * @returns {string}
 */
const uno = (text, str) => {
    // const S = readline();
    // const text = readline();
    print((text.match(new RegExp(str, "gi")) || []).length);
}


const str = readline();

function alphabetPosition(text) {
    return [...text].map(a => parseInt(a, 36) - 9).filter(a => a >= 0);
}

console.log(alphabetPosition(str).join(''));

/**
 *     ABCDefghIJKLmnop
 *
 *     ABCDIJKL
 *     efghmnop
 *
 *
 *     LpSOFdpgO
 *     LSOFO
 *     pdpg
 *
 *     UPPERCASE
 *     UPPERCASE
 *
 *
 *     aaaaaaaaa
 *     -
 *     aaaaaaaaa
 */
function extractLowerUpper(t) {
    const v = t.split('');
    let uper = ""
    let lower = ""
    for (let i = 0; i < v.length; i++) {
        if (v[i] === v[i].toLowerCase()) {
            lower += v[i]
        } else {
            uper += v[i]
        }
    }
    console.log(uper);
    console.log(lower);
}

/**
 * 75% Cover
 * @param array
 * @returns {*}
 */
const maxAppears = array => {

    console.log(Number(maxOcc([...array.split(',')])))
    return array.reduce(
        (a, b, i, arr) =>
            (arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b),
        null)
    /*
    const array = readline().split(', ').map(x=>+x);
    const duplicates = array.reduce((a,b)=>({...a,[b]:(a[b]||0)+1}))
    const count = Object.entries(duplicates).sort((a,b)=>b[1]-a[1])[0][0]
    console.log(count)
    */

}
const highest = arr => (arr || []).reduce((acc, el) => {
    acc.k[el] = acc.k[el] ? acc.k[el] + 1 : 1
    acc.max = acc.max ? acc.max < acc.k[el] ? el : acc.max : el
    return acc
}, {k: {}}).max

const maxOcc = (array) => array.reduce((a, b, i, arr) => (arr.filter(v => v === a).length >= arr.filter(v => v === b).length ? a : b), null)

/***
 * 100% cover
 * @param MESSAGE
 */
const reverseGameText = (MESSAGE) => {
    //const MESSAGE = readline();
    let str = MESSAGE.split(' ');
    let v = ""
    for (let i = 0; i < str.length; i++) {
        if (str[i].toString().toUpperCase().includes('PROF')) {
            v += "Prof" + "."
        } else if (str[i].toString().toUpperCase().includes('DR')) {
            v += "Dr" + "."
        } else {
            v += str[i][0].toUpperCase() + "."
        }
    }
    return v;
}