/* 1. Create a function to calculate the sum of the two given integers. If the two values are the same, return triple their sum. */
const sumOfIntegers = function(int1, int2) {
    if (int1 === int2) {
        return 3 * (int1 + int2)
    } else {
        return int1 + int2
    }
}
console.log(sumOfIntegers(3, 3)) //output : 18 

/* 2. Create a function to check two given integers. Return `true` if one of them is 50 or if their sum is 50. */
const intChecker = function(int1, int2) {
    if ((int1 === 50 || int2 === 50) || (int1 + int2 === 50)) {
        return true
    } else {
        return -1
    }
}
console.log(intChecker(45, 25))

/* 3. Create a function to remove a character at a specified position from a given string: pass the position and the string as parameters, return the new string. */
const removeCharacter = function(string, position) {

    return string.slice(parseInt(position), )
}
console.log(removeCharacter("Strive", 1)) //Substr starting from "1" as index 

/* 4. Create a function to find and return the largest of three given integers. */
const findingTheLargest = function(n1, n2, n3) {
    if (n1 > n2 && n1 > n3) {
        console.log("the largest:", n1)
    } else if (n2 > n3) {
        console.log("largest number: ", n2)
    } else {
        console.log("the largest:", n3)
    }
}
console.log(findingTheLargest(4, 5, 6))
    /* 5. Create a function to check if two numbers are in the range 40-60 or 70-100. 
        Return `true` if they do, return `false` if one (or both) don't. */

const rangeChecker = function(n1, n2) {
    if (((n1 >= 40 && n1 <= 60) || (n1 >= 70 && n1 <= 100)) && ((n2 >= 40 && n2 <= 60) || (n2 >= 70 && n2 <= 100))) { //use return instead of 'if'
        return true
    }
}
console.log(rangeChecker(45, 99))

/* 6. Create a function to create a new string composed of a specified number of copies of a given string. 
    Pass the string and the number of copies as parameters. */
const newStringCreator = function(string, copyNumber) {
    let newString = string.repeat(parseInt(copyNumber))
    return newString
}
console.log(newStringCreator("strive", 3))

/* 7. Create a function to display the city name if the string begins with "Los" or "New". 
    Pass the city name as a parameter. Return `false` if they start with a different string. */
const cityNameShow = function(cityName) {
    if (cityName.slice(0, 3) === "Los" || cityName.slice(0, 3) === "New") {
        return cityName
    } else {
        return false
    }
}
console.log(cityNameShow("Amsterdam"))

/* 8. Create a function to calculate and return the sum of all elements from an array with 3 elements. 
    Pass the array as a parameter. */
/*const sumOfAllElements = function(Arr) {
    return Arr.reduce((a, b) => a + b, 0)//reduce function 
}
console.log(sumOfAllElements([1, 2, 3, 4, 5]))*/
let Sum = 0
const sumOfAllElements = function(Arr) { //Used for loop
    for (let i = 0; i < Arr.length; i++) {
        const element = Arr[i];
        Sum += element
    }
    console.log(Sum)
}
sumOfAllElements([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

/* 9. Create a function to test if an array of lenght 2 contains 1 OR 3. 
        Return `true` is it does, `false` if it doesn't. */
const oneOrThree = function(Arr) {
    if (Arr.includes(1) || Arr.includes(3)) {
        return true
    } else {
        return false
    }
}
console.log(oneOrThree([3, 5]))

/* 10. Create a function to test if an array of lenght 2 DOES NOT contain 1 or 3. 
    Return `true` if it doesn't, `false` if it does. */

const notOneOrThree = function(Arr) {
    if (Arr.indexOf(1) != -1 || Arr.indexOf(3) != -1) {
        return false
    } else {
        return true
    }
}
console.log(notOneOrThree([4, 5]))
    /* 11. Create a function to find the longest string from a given array of strings. 
        Pass the array as parameter and return the longest string. */
const findingLongestString = function(Arr) {
    let maxValue = Arr[0]
    for (i = 0; i < Arr.length; i++) {
        let element = Arr[i]
        if (element.length > maxValue.length) {
            maxValue = element
        }
        return maxValue
    }
}
console.log(findingLongestString(["Strive", "School", "Sefa", "Stefano", "Miceli"]))


/* 12. Create a function to find the types of a given angle:
  1. Acute angle ???????? between 0 and 90 degrees. Return `acute`.
    2. Right angle ???????? 90 degree. Return `right`
    3. Obtuse angle ???????? between 90 and 180. Return `obtuse`
    4. Straight angle ???????? 180 degrees. Return `straight`

    Pass the angle as a parameter.
*/
const typeOfAngle = function(angle) {
    if (angle > 0 && angle < 90) {
        return "acute"
    } else if (angle === 90) {
        return "right"
    } else if (angle > 90 && angle < 180) {
        return "obtuse"
    } else if (angle === 180) {
        return "straight"
    } else {
        return -1
    }
}
console.log(typeOfAngle(95))
    /* 13. Create a function to find and return the index of the greatest element of a given array of integers that you passed as a parameter. */
const indexOfGreatestElement = function(array) {
    console.log(this)
        //let maxValue = Math.max.apply(null, array) legacy one 
    let maxValue = Math.max(...array) //ES6 standard
    return array.indexOf(maxValue)
}
console.log(indexOfGreatestElement([35, 7, 8, 9, 6, 3, 15]))


/* 14. Create a function to find and return the largest **even** number from an array of integers that is passed a parameter. */
const findGreatestEvenNumber = function(array) {
    //array[i] % 2 === 0
    let evenNumber = []
    for (i = 0; i < array.length; i++) {
        let element = array[i]
        if (element % 2 === 0) {
            evenNumber.push(element)
        }
    }
    return Math.max.apply(null, evenNumber)
}
console.log(findGreatestEvenNumber([48, 54, 8, 3, 5, 9])) // Output: 54


/* 15. Create a function to check from two given integers (passed as parameters) if one is positive and the other is negative. 
    Return `true` if that's the case, return `false` if it's not. */
const typechecker = function(n1, n2) {
    if ((n1 < 0 && n2 > 0) || (n2 < 0 && n1 > 0)) {
        return true
    } else {
        return false
    }
}
console.log(typechecker(5, -5))

/* 16. Create a function to create and return a new string where the first 3 characters and in lower case and the others are in upper case. 
    If the string's length is less than 3, convert the whole string into uppercase. Pass the original string as a parameter. */
    convertString = (str) =>{
        if(str.length<3){
            return str.toUpperCase()
        }else{
            return str.slice(0,3).toLowerCase() + str.slice(3,).toUpperCase()
        }
    }
console.log(convertString('Strive'))
/* 17. Create a function to calculate the sum of two integers (passed as parameters). 
    If the sum is in the 50-80 range, return `65`, otherwise, return `80`. */
    calculate = (int1,int2) =>{
        let sum = int1 + int2
        if(50<sum<80){
            return '65'
        }else{
            return '80'
        }
    }
console.log(calculate(45,9))
/* 18. Create a function to convert a number (passed as a parameter) into a string, basing yourself on this example: 
    The number has 3 as a factor ???????? return `Diego`
    The number has 5 as a factor ???????? return `Riccardo`
    The number has 7 as a factor ???????? return `Stefano`
    If the number does not have 3,5, or 7, return the original number. 
    ???? ?????? The factor is an integer which evenly divides a number without leaving a remainder. One number can have more than one factor, in that case you should return both names. 
Ex. 15 has both 3 and 5 has factors: the function will return `DiegoRiccardo` */
numToStringByFactor = (factorNumber) =>{
    let str = "";
  
    if (factorNumber % 3 !== 0 && factorNumber % 7 !== 0 && factorNumber % 5 !== 0) return factorNumber;
  
    if (factorNumber % 3 === 0) str += ' ' + "Diego";
    if (factorNumber % 5 === 0) str += ' ' + "Riccardo";
    if (factorNumber % 7 === 0) str += ' ' + "Stefano";
    return str;
  }
console.log(numToStringByFactor(15))
/* 19. Create a function that that takes a phrase as a parameter and returns its acronym.
Ex. British Broadcasting Corporation returns `BBC` */
createAcronym = (param) =>{
    let newArr = [];
    let splitted = param.split(" ");
  
    for (let i = 0; i < splitted.length; i++) {
      const characters = splitted[i];
      newArr.push(characters.charAt(0).toUpperCase());
    }
  
    return newArr.join("");
  }
console.log(createAcronym('British Broadcasting Corporation'))
