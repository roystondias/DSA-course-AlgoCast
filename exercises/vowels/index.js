// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    let intitalVowels = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0
    }

    for (const element of str.toLowerCase()) {
        intitalVowels[element]++
    }

    const totalCountOfVowel = Object.values(intitalVowels).filter((item)=> item).reduce((acc, curr) => acc + curr, 0)

    return totalCountOfVowel
}

module.exports = vowels;
