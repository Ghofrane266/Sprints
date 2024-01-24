//ESSENTIAL
// 1.Fix the syntax & style 
// issues with the three objects below:

let obj1 = {
  firstName: 'Yan',
  lastname: 'Fan'
}

let obj2 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

let obj3 = {
  animal: 'dog',
  noise: 'bark',
  age: 3,
  type: 'Golden Retriever',
  color: 'Yellow'
}


//2. Create an object that represents you. It should contain your first name, last name, age and hometown. Assign it to a variable called person.

let person = {
  firstName: "yassmine",
  lastName: "adouani",
  hometown: "hamam lanef",
  age: 22
}
person.favFood = "pasta";
delete person.lastName

//5.Write a function called emptyObject that takes no parameters and returns an empty object.
let emptyObject = () => {
  return {}
}
//6.Write a function called addProperty that takes two parameters, an object, and a key as a string. It then adds the key as a property in the object and gives it the value true.
let addProperty = (obj, key) => {
  obj.key = true
  console.log(obj)
}
//7.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌deleteProperty‌‌ ‌that‌ ‌takes‌ ‌two parameters an‌ ‌object‌ ‌and‌ a key as a string. It then removes the property with that key from the object.
let deleteProperty = (obj, key) => {
  if (obj.hasOwnProperty(key)) {
    delete obj[key]
  }
  console.log(obj)
}
//8.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addObjectProperty‌‌ ‌that‌ ‌takes‌ ‌three‌ ‌parameters,‌ ‌an‌ ‌object,‌ ‌a‌ ‌string as a key‌, ‌and‌ ‌a second ‌object. It then adds a new property with the passed key and the second object as its value.
let addObjectProperty = (objt1, key, objt2) => {
  objt1.key = objt2
  console.log(objt1.key)
}
//9.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addFullNameProperty‌‌ ‌that‌ ‌takes‌ ‌an‌ ‌object‌ ‌as‌ ‌a‌ ‌parameter.‌ ‌If the object has both a firstName and a lastName property, then it adds a new property with the key fullName and the value as a string of the firstName and lastName combined with a space between them.
let addFullNameProperty = (obj) => {
  if (obj.hasOwnProperty("firstName") && obj.hasOwnProperty("lastName")) {
    obj.fullName = obj.firstName + " " + obj.lastName
  }
  console.log(obj.fullName)
}
//10.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌addArrayProperty‌‌ ‌that‌ ‌takes‌ ‌three‌ ‌parameters,‌ ‌an‌ ‌object,‌ ‌a‌ ‌string as a key‌ ‌and‌ ‌an‌ ‌array.‌ ‌It then adds a new property to the object with the specified key and its value is the array.
let addArrayProperty = (obj, key, array) => {
  obj.key = array;
  console.log(obj.key)
}
//11.Write‌ ‌a‌ ‌function‌ ‌called‌ ‌‌printAllProperties‌‌ ‌that‌ takes ‌an‌ ‌object‌ ‌as a parameter. It then prints out to the console the values of all the object’s properties.
let printAllProperties = (obj) => {
  for (let key in obj) {
    console.log(obj[key])
  }
}
//autre methode:
//let printAllProperties=(obj)=>{
// console.log(Object.values(obj))
//}

//EXTENTED:
//1.Write a function called removeNumbersLargerThan that takes two parameters, a number and an object. It then removes all properties with values larger than the specified number.
let removeNumbersLargerThan = (nbr, obj) => {
  for (let key in obj) {
    if (typeof (obj[key]) === "number" && obj[key] > nbr) {
      delete obj[key]

    }
  } console.log(obj)
}
//2.Write a function called removeAllEvenValues that takes an object as a parameter. It then removes all properties with values that are an even number.
let removeAllEvenValues = (obj) => {
  for (let key in obj) {
    if (typeof (obj[key]) === "number" && obj[key] % 2 == 0) {
      delete obj[key]

    }
  } console.log(obj)
}
//3.Write a function called removePropertiesNotEqualTo10 that takes an object as a parameter. It then removes all properties that are not equal to 10.
let removePropertiesNotEqualTo10 = (obj) => {
  for (let key in obj) {
    if (obj[key] != 10) {
      delete obj[key]

    }
  } console.log(obj)
}
//4.Write a function called removeStringsLongerThan that takes two parameters, a number and an object. It then removes all strings with lengths larger than the number parameter.
let removeStringsLongerThan = (obj, nbr) => {
  for (let key in obj) {
    if (typeof (obj[key]) === "string" && obj[key].length > nbr) {
      delete obj[key]
    }
  } console.log(obj)
}
//5.Write a function called removeAllNumbers that takes an object as a parameter. It then removes all properties in the object that have number values.
let removeAllNumbers = (obj) => {
  for (let key in obj) {
    if (typeof (obj[key]) === "number") {
      delete obj[key]
    }
  } console.log(obj)
}
//6.Write a function called removeArrays that takes an object as a parameter. It then removes all properties that have array values.
let removeArrays = (obj) => {
  for (let key in obj) {
    if (Array.isArray(obj[key])) {
      delete obj[key]
    }
  } console.log(obj)
}
//7.Write a function called getFirstElementOfProperty that takes an object and a key and returns the first element in the array at the given key. If the array is empty it should return undefined. If the property at the given key is not an array it should return undefined. If there is no property at the key it should return undefined.
let getFirstElementOfProperty = (obj, key) => {

  if (obj.hasOwnProperty(key) && Array.isArray(obj[key]) && obj[key].length > 0) {
    return obj[key][0]
  }
  else {
    return undefined
  }
}

//8.Write a function called getNthElementOfProperty that takes three parameters, an object, a key and a number. It then returns the element located at the index equal to the number parameter from the array at the given key. If the array is empty it should return undefined. If the property at the given key is not an array it should return undefined. If there is no property at the key it should return undefined.
let getNthElementOfProperty = (obj, key, nbr) => {
  if (obj.hasOwnProperty(key) && Array.isArray(obj[key]) && obj[key].length > 0) {
    return obj[key][nbr]
  } else {
    return undefined
  }
}
//IMMERSIVE:
//1.Write a function called isPropertyPresent that takes two parameters, an object and a key. It then returns true if there is a property at the given key and false otherwise.
let isPropertyPresent = (obj, key) => {
  if (obj.hasOwnProperty(key)) {
    return true
  } else {
    return false
  }
}
//2.Write a function called getAllKeys that takes an object as a parameter and returns an array of keys of all the properties in the object.
let getAllKeys = (obj) => {
  let arr = []

  arr.push(Object.keys(obj))
  return arr
}
//3.Write a function called getAllValues that takes an object as a parameter and returns an array of all the values from that object.
let getAllValues = (obj) => {
  let result = []
  result.push(Object.values(obj))
  return result
}
//4.Write a function called transformFirstAndLast that takes an array as a parameter and returns an object with one property where: The first element of the array is the key. The last element of the array is the value.
let transformFirstAndLast = (array) => {
  let obj = {}
  obj[array[0]] = array[array.length - 1]
  return obj
}
//5.Write a function called extend that takes two objects and adds all the properties of the second object to the first object if the property’s key does not already exist.
let extend = (obj1, obj2) => {
  for (let key in obj2) {
    if (!obj1.hasOwnProperty(key)) {
      obj1[key] = obj2[key]
    }
  }return obj1

}
