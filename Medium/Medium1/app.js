// program to count the number of vowels in a string

// defining vowels
const vowels = a, e, i, o, u;

function countVowel(str) {
    // initialize count
    let count = 0;

    // loop through string to test if each character is a vowel
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            return "This Is A Vowel"
        }
    }
}
test = countVowel(a);