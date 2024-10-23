//palindrome
function isPalindrome(str) {
    let reversedString = ""
    let charLength = str.length;
    for (i = charLength - 1; i >= 0; i--) {
        reversedString = reversedString + str.charAt(i).toLowerCase()
    }
    console.log(reversedString)
    if (str.toLowerCase() === reversedString) {
        console.log("The string passed is palindrome")
        return true
    } else {
        console.log("The string passed is not palindrome")
        return false
    }
}
console.log(isPalindrome("Rathinavel"));
console.log(isPalindrome("Nitin"));
console.log(isPalindrome("Rotator"));

//Grade calculation
function gradeCalculation(mark) {
    let grade;
    switch (true) {
        case (mark <= 100 && mark >= 90): {
            grade = 'A'
            break;
        }
        case (mark <= 89 && mark >= 80): {
            grade = 'B'
            break;
        }
        case (mark <= 79 && mark >= 70): {
            grade = 'C'
            break;
        }
        case (mark <= 69 && mark >= 60): {
            grade = 'D'
            break;
        }
        case (mark <= 59 && mark >= 50): {
            grade = 'E'
            break;
        }
        case (mark < 50 && mark > 0): {
            grade = "Fail"
            break;
        }
        case (mark <= 0 && mark > 100): {
            grade = "invalid grade"
            break;
        }
        default: {
            grade = "invalid grade"
            break;
        }
    }
    console.log(grade)
}
gradeCalculation(95)
gradeCalculation(85)
gradeCalculation(70)
gradeCalculation(63)
gradeCalculation(59)
gradeCalculation(45)
gradeCalculation(0)
gradeCalculation(102)
gradeCalculation(-5)

//printOddNumbers
function printOddNumbers(startingNumber, endNumber) {
    for (i = startingNumber; i <= endNumber; i++) {
        if (i % 2 != 0) {
            console.log("The number " + i + " is an odd number")
        }
    }
}

printOddNumbers(1, 25)


//string
//Example 1
let s = "Hello World"
function returnLastWordLength(word) {
    let sSplit = s.trim().split(" ")
    let lastWordLength = sSplit[sSplit.length - 1].length
    console.log("Last word lenth of " + s + " is " + lastWordLength)
}
returnLastWordLength(s)

//Example 2
s = " fly me to the moon "
returnLastWordLength(s)

//Example 3
function isAnagram(firstWord, secondWord) {
    let s1 = firstWord.toLowerCase().trim().replace(" ", "").split('').sort().join('')
    let s2 = secondWord.toLowerCase().trim().replace(" ", "").split('').sort().join('')

    if (s1.length != s2.length) {
        console.log("words are not anagram")
        return false
    }

    if (s1 == s2) {
        console.log("Words are anagram")
        return true
    } else {
        console.log("Words are not anagram")
        return false
    }
}

console.log(isAnagram("listen", "silent"))
console.log(isAnagram("hello", "world"))