// 1.N natural son berilgan. Dastlabki n ta toq sondan tashkil topgan array qaytaruvchi getInitialOdds(n) nomli function tuzing input: 3 output: [1,3,5] 


// let userNum = prompt("Sonni kiriting")
// let arr = []

// function getInitialOdds(userNum) {
    

//     for (let i = 1; i <= userNum*2; i++) {
//         if (i % 2 !== 0) {
//             console.log(i)
//             arr.push(i)
//         }   
//     }
//     console.log(arr)
// }

// getInitialOdds(userNum, arr)



// 2. string da nechta unli harf borligini toping bunda unli harflar ro'yxatini alohida array ko'rinishida shakllantirib olib keyin loop qilib bajaring


// const vowelLetters = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

// function countVowels(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {

//         if (vowelLetters.includes(str[i])) {
//             count++;
//         }
//     }

//     return count;
// }

// let testString = "Temurbek Abdialimov";

// let result = countVowels(testString);
// console.log(result);  



// 3.N ta element dan iborat bo’lgan array yarating va arraydagi eng katta va eng kichkina sonlar o’rnini almashtiring: arr = [1, 3, 2, 0, 4, 5], result = [1,3,2,5,4,0]

// function IndexM(arr) {
//     let minI = 0;
//     let maxI = 0;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < arr[minI]) {
//             minI = i;
//         }
//         if (arr[i] > arr[maxI]) {
//             maxI = i;
//         }
//     }

//     let coll = arr[minI];
//     arr[minI] = arr[maxI];
//     arr[maxI] = coll;
//     return arr;
// }

// let arr = [1, 3, 2, 0, 4, 5];

// let result = IndexM(arr);
// console.log(result);
    





// 4. argument sifatida berilgan so'z da nechta a harfi ishtirok etganini aniqlaydigan function tuzing 


// let userStr = prompt("So'zni kiriting")

// function aStr(userStr) {
//     total = 0
//     for (let i = 0; i < userStr.length; i++) {
//         if (userStr[i] == "a" || userStr[i] == "A") {
//             total = total + 1
//         }
//     }

//     console.log(userStr + " - so'zida " + total + " ta a harfi bor");
// }

// aStr(userStr)





//  5. nums = [2,7,11,15], target = 9 => ixtiyoriy array va biron bir target nomli o'zgaruvchi olinsin. Array ichidagi sonlar yig'indisi target ga teng bulgan sonlarni index si topilsin Misol uchun 2 va 7 soni yig'indisi 9 ga teng, masala sharti mana shu 2 va 7 soni indexi console ga chiqarilsin


// let nums = [2, 7, 11, 15];
// let target = 9;
// let result = serchNum(nums, target);


// function serchNum(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] === target) {
//                 return [i, j];
//             }
//         }
//     }
//     return null; 
// }

// console.log(result);  



// 6. Ixtiyoriy n ta element dan iborat bo’lgan array yarating va uning ichidagi dublicate bo’lgan item larni o’chiring:

// let arr = [2, 4, 53, 2, 23, 23, 3, 765, 3, 32]
// let arrNoDouble = []
// function doubleNum(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//         if (!arrNoDouble.includes(arr[i])) {
//             arrNoDouble.push(arr[i])
//         }
        
//     }

//     console.log(arrNoDouble)
// }


// doubleNum(arr)