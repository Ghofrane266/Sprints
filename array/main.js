//ESSENTIAL:
//EX1:
//Write a function called arrayFor that takes an array as a parameter, loops through all the elements using For Loop and prints all elements of the array in the console using console.log.
let arrayFor = (array) => {
    for (let element in array) {
        console.log(array[element])
    }
}
//EX2:
//Write a function called arrayWhile that takes an array as a parameter, loops through all the elements using While Loop and prints all elements of the array in the console using console.log.
let arrayWhile = (array) => {
    let i = 0
    while (i <= array.length) {
        console.log(array[i])
        i++
    }
}
//EX3:
//Write a function called sum that takes an array of numbers as a parameter and returns the sum of the numbers in the array.
let sum = (array) => {
    let sum = 0
    for (let element in array) {
        sum += array[element]
    } return sum

}
//EX4:
//Write a function called sumEveryOther that takes an array of numbers as a parameter and returns the summation of every other number starting from the beginning of the array.
let sumEveryOther = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i += 2) {
        sum += array[i]
    }
    return sum
}
//EX5:
//Write a function called sumStartAt that takes an array of numbers, and an index as parameters and returns the summation of every number starting from the inputted index, until the end of the array.
let sumStartAt = (array, index) => {
    let sum = 0
    for (let i = index; i <array.length; i++) {
        sum += array[i]

    } return sum

}
//EX6:
//.Write a function called sumUntil that takes an array of numbers, and an index as parameters and returns the summation of every number starting from the index 0, until the index parameter.
let sumUntil = (array, index) => {
    let sum = 0
    for (let i = 0; i <=index; i++) {
        sum += array[i]
    } return sum
}
//EX7:
//Write a function called subtractReverse that takes an array of numbers as a parameter and returns the subtraction of every number beginning at the last element of the input array and ending at the first element of the input array (in reverse).
let subtractReverse = (array) => {
    let arr = array.at(-1)
    for (let i = array.length - 2; i >= 0; i--) {
        arr -= array[i]
    }
    return arr
}
//EX8:
//Write a function called product that takes an array as a parameter and returns the product of all the elements in the array.
let product = (array) => {
    let result = 1
    for (let element of array) {
        result *= element
    }
    return result
}
//EX9:
//Write a function called average that takes an array as a parameter and returns the average of all the elements in the array.
let average = (array) => {
    let result = 0
    let sum = 0
    for (let element of array) {
        sum += element
    }
    return result += Math.floor(sum / array.length)
}
//EX10:
//.Write a function called square that takes an array as a parameter and returns a new array where each element is the square of the element of the given array.
let square = (array) => {
    let arr = []
    for (let element of array) {
        arr.push(Math.pow(element, 2))
    }
    return arr
}
//EX11:
//Write a function called isArray that takes one parameter and returns true if the input is array otherwise returns false.
let isArray = (array) => {

    if (typeof (array) === "object") {
        return "true"
    } else {
        return "false"
    }
}
//AUTRE METHODE:
//let isArray = (array) => {
//    if (Array.isArray(array)) {
//      return "true"
// } else {
//     return "false"
// }
//}
//EXTENDED:
//EX1:
//Write a function called min that takes an array as a parameter and returns the smallest number from the array.
let min = (array) => {
    let smallest = array[0]
    for (let i = 0; i < array.length; i++) {
 
        if (array[i] <= smallest) {
            smallest = array[i]
        }
    }
    return smallest
}
//EX2:
//Write a function called max that takes an array as a parameter and returns the largest number from the array.
let max = (array) => {
    let largest = array[0]
    for (let element in array) {
        if (array[element] >= largest) {
            largest = array[element]
        }

    }
    return largest
}
//EX3:
//Write a function called shortestString that takes an array of strings as a parameter and returns the length of the shortest string in the given array.
let shortestString = (arr) => {
    let shortstring = (arr[0].length)
    for (let element of arr) {

        if ((element.length) <= shortstring) {
            shortstring = (element.length)
        }
    }
    return shortstring
}
//EX4:
//Write a function called longestString that takes an array of strings as a parameter and returns the length of the longest string in the given array.
let longestString = (array) => {
    let longest = array[0].length
    for (let element of array) {
        if (element.length >= longest) {
            longest = element.length
        }

    }
    return longest
}
//EX5:
//Write a function called minMax that takes an array as a parameter and returns a new array with the smallest and largest number.
let shortestLongest = (array) => {
    let arr = []
    let smallest = array[0].length
    let largest = array[0].length
    for (element of array) {
        if (element.length >= largest) {
            largest = element.length
        }
        else if (element.length <= smallest) {
            smallest = element.length
        }

    }
    arr.push(smallest, largest)
    return arr

}
//EX6:
//Write a function called minMax that takes an array as a parameter and returns a new array with the smallest and largest number.
let minMax = (array) => {
    let arr = []
    let smallest = array[0]
    let largest = array[0]
    for (let i = 1; i <= array.length; i++) {
        if (array[i] >= largest) {
            largest = array[i]
        }
        else if (array[i] <= smallest) {
            smallest = array[i]

        }
    } arr.push(smallest, largest)
    return arr

}
//EX7:
//Write a function called multiplyBy that takes an array and number as parameters and returns a new array with each of the elements from the array multiplied by the given number.
let multiplyBy = (array, nbr) => {
    let result = []
    for (let i = 0; i < array.length; i++) {
        result.push((array[i] * nbr))
    }
    return result
}
//EX8:
//.Write a function called multiplyByIndex that takes an array as a parameter, and multiplies each element with their corresponding index values then returns that array.
let multiplyByIndex = (array) => {
    let multiple = []
    for (let i = 0; i < array.length; i++) {
        multiple.push((array[i] * i))
    }
    return multiple
}
//EX9:
//.Write a function called lengths that takes an array of strings as a parameter, and returns an array of numbers representing the length of each string.
let lengths = (array) => {
    let longueur = []
    for (element of array) {
        longueur.push(element.length)
    }
    return longueur
}
//EX10:
//Write a function called totalNumberOfCharacter that takes an array of strings as a parameter, and returns the total number of characters of all the strings in the array.
let totalNumberOfCharacter = (array) => {
    let total = 0
    for (element of array) {
        total += element.length
    }
    return total
}
//IMMERSIVE:
//EX1:
//Write a function called filterEvenLengthWords that takes an array of strings as a parameter, and returns an array containing only the elements of the given array whose length is an even number.
let filterEvenLengthWords = (array) => {
    let words = []
    for (element of array) {
        if ((element.length) % 2 === 0) {
            words.push(element)
        }
    }
    return words
}
//EX2:
//Write a function called popLastElement that takes an array of arrays as a parameter, and removes the last element from every array in the array, and returns the array.
let popLastElement = (arrays) => {
    for (let i = 0; i < arrays.length; i++) {
        if (arrays[i].length > 0) {
            arrays[i].pop();
        }
    }
    return arrays;
}
//EX3:
//Write a function called pushLastElement that takes an array of arrays and element as a parameter, and adds the element to the end of every array in the array, and returns the array.
let pushLastElement = (array, element) => {
    for (let i = 0; i < array.length; i++) {
        array[i].push(element)
    }
    return array
}
//EX4:
//Write a function called sumArrays that takes an array of arrays as a parameter, and returns the sum of all elements in the arrays.
let sumArrays = (array) => {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        let elements = array[i]
        for (let j = 0; j < elements.length; j++) {
            sum += elements[j]
        }

    }
    return sum
}
//EX5:
//.Write a function called multiplyBySmallest that takes an array as a parameter, and returns a new array with each of the elements from the array multiplied by the smallest number in the array.

let multiplyBySmallest = (array) => {
    let result = []
    let smallest = array[0]
    for (let element in array) {
        if (array[element] <= smallest) {
            smallest = array[element]
        }
        result.push(array[element] * smallest)
    }
    return result

}
//EX6:
//.Write a function called joinArrays that takes an array of arrays as parameters, and returns a single array containing all the elements of the nested arrays.
let joinArrays = (array) => {
    let join = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            join.push(array[i][j])
        }
    }
    return join
}
//EX7:
//Write a function called sumOddEven that takes an array as a parameter, and returns an array containing the sum of the odd numbers as the first element and the sum of the even numbers as the second element.
let sumOddEven = (array) => {
    let sum = []
    let evennbr = 0
    let oddnbr = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evennbr += array[i]
        }
        else if (array[i] % 2 != 0) {
            oddnbr += array[i]
        }
    } sum.push(oddnbr, evennbr)
    return sum
}

//EX8:
//Write a function called shortestOfMixed that takes an array of mixed elements as a parameter, and returns the shortest string within the given array.
//Notes: If there are ties, it should return the first element to appear in the given array. Expect the given array to have values other than strings. If the given array is empty, it should return an empty string. If the given array contains no strings, it should return an empty string.

let shortestOfMixed = (array) => {

    if (array.length === 0) {
        return ("")
    }
    for (let i = 0; i < array.length; i++) {
        if (typeof (array[i]) != "string") {
            return ("")
        }
    }
//7.Write a function called 
//subtractReverse that takes 
//an array of numbers as a parameter and returns the subtraction of every number beginning at the last element of the input array and ending at the first element 
//of the input array (in reverse).



// let subtractReverse = (array) => {
//     let output = array.at(-1)
//     for( let i = array.length-2;i>=0;i-- ) {
//         output -= array[i]
//     }
//     return output
// }
let subtractReverse = (array) => {
    let result = 0
for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
            result += array[i]
        }
    else result -= array[i]
    }
    return result
}


//11.Write a function called isArray that takes one parameter and returns 
//true if the input is array otherwise returns false.

function isArray(array) {
    return Array.isArray(array)
 } 

 //
//  EXTENTED
// 1.Write a function called min that takes an array as a parameter 
//and returns the smallest number from the array.

let min = (array) => {
    let smallest = array[0]
    for(let i =1;i<array.length;i++){
        if(array[i] < smallest) {
            smallest = array[i]
        }
    }
    return smallest

}


// 7.Write a function called multiplyBy that takes an array and number as parameters and returns a new array with each of the elements from the 
// array multiplied by the given number.
let multiplyBy = (array,number) => {
    let output = []
for(let i =0;i<array.length;i++) {
    output.push(array[i]*number)
}
    return output
}
//8.Write a function called multiplyByIndex that takes an array as a parameter, and multiplies each element with their corresponding 
//index values then returns that array.

let multiplyByIndex = (array) => {
    let output = []
for(let index =0;index<array.length;index++) {
    output.push(array[index]*index)
}
    return output
}


//IMERSIVE 


// 7.Write a function called 
//sumOddEven that takes an array
// as a parameter, and returns an array containing the sum of the odd numbers as the first element and the sum of the even numbers as the second element.

let sumOddEven = (array) => {
    debugger
    let output = []
    let sumEven = 0 
    let sumOdd = 0 
    for(let i = 0;i<array.length;i++){
        if(array[i]%2 === 0) {
            sumEven += array[i]
        }
        else sumOdd+= array[i]
    }
    output.push(sumOdd,sumEven)
    return output
}

//8.Write a function called shortestOfMixed that takes an array of mixed elements as a parameter, and returns the 
//shortest string within the given array.
//!! [1,3,"hi",2,"pizza","j"] => "j"
let shortestOfMixed = (array)=> {
    let str = ""
    let minArray = []
    let minLength = 10
    for(let element of array) {
        if(typeof element === 'string') {
            if(minLength > element.length) {
                minLength = element.length
                minArray.push(element)
            }
        }

    }
    if(minArray.length > 1) {
        return minArray[1]
    }
    else return minArray[0]

}}