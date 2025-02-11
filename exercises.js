/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray = function(arr) {
  let newArr = [];
  for(i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr;
};

console.log(doubleArray([1,2,3]));


/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Number}
 */
var sumArrays = function(arr1, arr2) {
  let newArr = [];
  let sum = 0;
  for(i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i] + arr2[i]);
    sum += newArr[i];
  }
  return sum;
};

console.log(sumArrays([1,2,3], [1,2,3]));


/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount = function(str) {
  return str.length;
};

console.log(stringCount("hell0"));

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength = function(arr) {
  return arr.length;
};

console.log(arrayLength([1,2,3,4,5,6]));

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll = function(arr) {
  let sum = 0;
  for(i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

console.log(countAll([2,2,2,2]));

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings = function(arr) {
  let newArr = [];
  for(i = 0; i < arr.length; i++) {
    newArr.push(arr[i].length);
  }
  return newArr;
};

console.log(countStrings(["hello", "Lewis", "Nozaki"]));

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {Array}
 * @return {Number}
 */
var countAllStrings = function(arr) {
  let newArr = [];
  let sum = 0;
  for(i = 0; i < arr.length; i++) {
    newArr.push(arr[i].length);
    sum += newArr[i];
  }
  return sum;
};

console.log(countAllStrings(["Hello", "Lewis", "Nozaki"]));

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray = function(obj) {
  return Object.values(obj);
};

console.log(convertToArray({a : 2, b : 3, c : 4}));

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize = function(obj) {
  let arr = Object.keys(obj);
  return arr.length
};

console.log(objectSize({a : 2, b : 3, c : 4}))

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Array}
 */
var createZeroFilledArray = function(num) {
  let arr = [];
  for(i = 0; i < num; i++) {
    arr.push(0);
  }
  return arr;
};

console.log(createZeroFilledArray(3));

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray = function(arr) {
  arr.pop();
  // let newArr = [];
  // for(i = 0; i < arr.length; i++) {
  //   newArr.push(arr[i]);
  // };
  return arr;
};

console.log(poppedArray([6,7,8,9,10]));

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString = function(str) {
  let arr = str.split("");
  return arr;
};

console.log(splitString("Boom"));

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {Array}
 * @return {Number}
 */
var lengthOfLast =function(arr) {
  let last = arr.pop().length;
  return last;
};

console.log(lengthOfLast(["what", "is", "my", "name?"]));

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen = function(arr) {
  let sum = 0;
  let newArr = []
  for(i = 0; i < arr.length; i++) {
    if(arr[i] < 10) {
      newArr.push(arr[i]);
      sum += newArr[i];
    }
  }
  return sum;
};

console.log(sumBelowTen([2,4,6,8,12,14,16]));

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {Array}
 * @return {Number}
 */
var moreThanTenLetters = function(arr) {
  let sum = 0;
  for(i = 0; i < arr.length; i++) {
    if(arr[i].length > 10) {
      sum++;
    }
  }
  return sum;
};

console.log(moreThanTenLetters(["bedazzlingly", "hello", "because", "elephant", "ant", "zigzagging-around"]));

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll = function(arr) {
  let product = 1;
  for(i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
};

console.log(multiplyAll([1,2,3]));

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {Array}
 * @return {Number}
 */
var sumAllPositive = function(arr) {
  let sum = 0;
  for(i = 0; i < arr.length; i++) {
    if(arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
};

console.log(sumAllPositive([4, 5, -6, 2, -3, -1, 0]));

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree = function(arr) {
  let count = 0;
  for(i = 0; i < arr.length; i++) {
    if(arr[i].length <= 3) {
      count++;
    }
  }
  return count;
};

console.log(stringCountBelowThree(["five", "four", "three", "two", "one", "1", "2"]));

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects = function(arr) {
  let count = 0;
  for(i = 0; i < arr.length; i++) {
    if(typeof arr[i] === "object") {
    count++;
   }
  }
  return count;
};

console.log(countObjects([{a:1, b:2}, {c:3, d:4}, {e:5, f:6}]));

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys = function(obj) {
  return Object.keys(obj);
};

console.log(getObjectKeys({a:1, b:2, c:3, d:4}));

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues = function(obj) {
  return Object.values(obj);
};

console.log(getObjectValues({a:1, b:2, c:3, d:4}));

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject = function(str, str2) {
  let newObj = {};
  let key = str;
  let val = str2;
  newObj[key] = val;
  return newObj;
};

console.log(makeObject("dog", "Sparky"));

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObjectReverse = function(str, str2) {
  let newObj = {};
  let key = str2;
  let val = str;
  newObj[key] = val;
  return newObj;
};

console.log(makeObjectReverse("Toyota", "Maker"));

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject = function(arr) {
  let newObj = {};
  let key = arr[0];
  let val = arr[1];
  newObj[key] = val;
  return newObj;
};

console.log(tupleToObject(["Sun", "Moon"]));

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse = function(arr) {
  arr.reverse();
  let newObj = {};
  let key = arr[0];
  let val = arr[1];
  newObj[key] = val;
  return newObj;
};

console.log(tupleToObjectReverse(["fire", "ice"]));

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys = function(arr) {
  let obj = {};
  for(i = 0; i < arr.length; i++) {
    obj[arr[i]] = 0;
  }
  return obj;
};

console.log(strToKeys(["Model", "Name", "Price", "Year"]));

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues = function(obj) {
  return Object.values(obj);
};

console.log(getValues({a:1, b:2, c:3, d:4}));

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys = function(obj) {
  return Object.keys(obj);
};

console.log(getKeys({a:1, b:2, c:3, d:4}));;

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray = function(obj) {
  return Object.entries(obj);
};

console.log(objectToArray({a:1, b:2, c:3, d:4}));

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject = function(arr) {
  let obj = {};
  for(i = 0; i < arr.length; i++) {
    obj[arr[i]] = false;
  }
  return obj;
};

console.log(arrayToObject(["Model", "Name", "Price", "Year"]));

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject = function(arr1, arr2) {
  let obj = {};
  for(i = 0; i < arr1.length; i++) {
    obj[arr1[i]] = arr2[i];
  }
  return obj;
};

console.log(arraysToObject(["Breed", "Name", "Color"], ["Golden Retriever", "Lucy", "Golden Brown"]));

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples = function(obj1, obj2) {
  let finalArr = [];
  let arr1 = Object.entries(obj1);
  let arr2 = Object.entries(obj2);
  finalArr = [...arr1, ...arr2];
  return finalArr;
};

console.log(objectsToTuples({a:1, b:2}, {c:3, d:4}));

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues = function(arr) {
  let obj = {};
  for(i = 0; i < arr.length; i++) {
    obj[arr[i]] = true;
  }
  return obj;
};

console.log(mapArrayValues(["Study", "Eat", "Sleep", "Repeat"]));

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts = function(arr) {
  let obj = {};
  for(i = 0; i < arr.length; i++) {
    if(arr[i].length >= 5) {
      obj[arr[i]] = true;
    } else {
      obj[arr[i]] = false;
    }
  }
  return obj;
};

console.log(mapStringCounts(["overFive", "less"]));

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums = function(arr) {
  let obj = {};
  for(i = 0; i < arr.length; i++) {
    obj[arr[i]] = true;
  }
  return obj;
};

console.log(arrayToObjectNums([1,2,3,4,5]));

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys = function(str) {
  let arr = str.split("");
  let obj = {};
  for(i = 0; i < str.length; i++) {
    obj[arr[i]] = true;
  }
  return obj;
};

console.log(stringToKeys("tesding"));

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap = function(arr) {
  let obj = {};
  for(i = 0; i < arr.length; i++) {
    obj[arr[i]] = arr[i].length;
  }
  return obj;
};

console.log(charCountMap(["one", "two", "three", "four"]));

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {Array}
 * @return {Object}
 */
var frequencyMap = function(arr) {
  let obj = {};
  for(i = 0; i < arr.length; i++) {
  let key = arr[i];
  obj[key] = obj[key] ? obj[key] + 1 : 1;
  }
  return obj;
};

console.log(frequencyMap(["a", "a", "a", "b", "c"]));

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleConvertToObject = function(arr) {
  let obj = {};
  for(i = 0; i < arr.length; i++) {
    obj[arr[i][0]] = arr[i][1];
  }
  return obj;
};

console.log(tupleConvertToObject([[1,2], [3,4]]));

module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays,
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}
