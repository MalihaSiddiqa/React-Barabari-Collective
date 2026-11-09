// function reversedChar(letter) {
//     let reversed='';

//     for(let char of letter){
//         reversed= char + reversed
//     }
//     return reversed;
// }

// console.log(reversedChar('react'))

// function countChar(str){
//     let countMap={};

//     for (let char of str){
//         let letter =char.toLowerCase();
//         if(countMap[letter]){
//         countMap[letter]++
//         }
//         else countMap[letter]=1;
//     }
//     return countMap
// }

// console.log(countChar('malihA'))

// function isPalindrome(str){

//          let reversed='';

//   for(let char of str){
//           reversed= char + reversed
//   }
//  return  str === reversed
// }

// console.log(isPalindrome('racecar'))

// function findSecondLargest(numbers){
//     let largest =-Infinity
//     let secondLargest=-Infinity
//     for(let num of numbers){
//         if(num > largest){
//        secondLargest=largest
//        largest=num
//       }
//       if(num > secondLargest && num < largest){
//             secondLargest=num;
//         }
//     }
//     return (`largest : ${largest} , secondLarget : ${secondLargest}`)
// }

// console.log(findSecondLargest([10, 40, 20, 5, 100, 75]));

// function flatten(arr) {
//   let result = [];
//   for (let item of arr) {
//     if (Array.isArray(item)) {
//       let unpackedItems = flatten(item);
//       result.push(...unpackedItems);
//     } else {
//       result.push(item);
//     }
//   }

//   return result;
// }

// console.log(flatten([1, [2, [3, [4]], 5]]));

// const users = [
//   { name: "Sara", role: "admin" },
//   { name: "Zaid", role: "user" },
//   { name: "Maliha", role: "admin" },
//   { name: "Bilal", role: "user" }
// ];

// function groupBy(users,role){
//    let grouped ={}
//     for(let user of users){
//       let category =user[role]
//     if(!grouped[category]){
//        grouped[category]=[]
//     }
//     grouped[category].push(user)
// }
// return grouped;

// }

// console.log(groupBy(users,'role'));

// Array.prototype.myMap = function(callbackFn) {
//     let result=[]
//     for(let i of this){
//       let transformed = callbackFn(i)
//       result.push(transformed)
//     }
//    return result
// }

// const numbers=[1,2,3];
// const doubled=numbers.myMap((num)=>num * 2)

// console.log(doubled)

// function debounce(fn, delay) {
//   let timerId; // Stored in closure

//   return function (...args) {
//     // 1. If a timer is already running, cancel it
//     clearTimeout(timerId);

//     // 2. Start a fresh timer
//     timerId = setTimeout(() => {
//       fn.apply(this, args); // Execute the original function with arguments
//     }, delay);
//   };
// }

// function sendSearchRequest(query) {
//   console.log("Searching API for:", query);
// }

// const debouncedSearch = debounce(sendSearchRequest, 500);

// Simulating fast user typing:
// debouncedSearch("r");
// debouncedSearch("re");
// debouncedSearch("rea");
// debouncedSearch("reac");
// debouncedSearch("react");

// Output after 500ms pause:
// "Searching API for: react" (Fires only once!)




// function chunk(arr, maxLength) {
//   let result = [];
//   let currentChunk = [];
//   for (let i of arr) {
//     currentChunk.push(i);
//     if (currentChunk.length === maxLength) {
//       result.push(currentChunk);
//       currentChunk = [];
//     }
//   }
//   if (currentChunk.length > 0) {
//     result.push(currentChunk);
//   }
//   return result;
// }

// console.log(chunk([1, 2, 3, 4, 5, 6, 7], 2));
// // Output: [[1, 2, 3], [4, 5, 6], [7]]

// chunk([1, 2, 3, 4], 2);
// // Output: [[1, 2], [3, 4]]





// function isAnagram(str1,str2){
    
// const clean = (str) =>
//     str
//       .toLowerCase()
//       .replace(/[^a-z0-9]/g, "")
//       .split("")
//       .sort()
//       .join("");

//   return clean(str1) === clean(str2);
// }
// console.log(isAnagram("listen", "silent")); // true
// console.log(isAnagram("Debit Card", "Bad Credit")); // true
// console.log(isAnagram("hello", "world")); // false




function findMissing(numbers) {
    const n=numbers.length

    const expectedSum=(n *(n+1))/2;  //6
    const actualSum=numbers.reduce((acc,curr)=>acc+curr,0) //4

    return expectedSum-actualSum;
}

console.log(findMissing([3, 0, 1])); // Output: 2
console.log(findMissing([9, 6, 4, 2, 3, 5, 7, 0, 1])); // Output: 8