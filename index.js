// 1. Өгөгдсөн массивын гишүүдийн нийлбэрийг ол.
// let arr = [1, 90, 30, 4, 5, 61];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum = sum + arr[i];
// }
// console.log(sum);

// 2. Өгөгдсөн массивын 0-ээс их элементүүдийн нийлбэрийг ол.

// function sumOfPositiveNumbers(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// let arr = [-6, 2, 0, 4, -5, 6];
// console.log(sumOfPositiveNumbers(arr));

// 3. Өгөгдсөн массивын хамгийн бага элементийг ол.

// function minimumNum(arr) {
//   let smallest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       smallest = arr[i];
//     }
//   }
//   return smallest;
// }

// let smallest = [10, 15, 9, 4, 5, 3];
// console.log(minimumNum(smallest));

// 4. Өгөгдсөн массивын хамгийн их элемент хэд дэх нь вэ? Хэрэв хамгийн их элементийн тоо 1-ээс олон бол бага дугаарыг нь хэвлэнэ.

// function maxNum(arr) {
//   let maxIndex = 0;
//   for (i = 1; i < arr.length; i++) {
//     if (arr[i] > arr[maxIndex]) {
//       maxIndex = i;
//     }
//   }
//   return maxIndex;
// }
// let maxIndex = [20, 15, 45, 4, 45, 3];
// console.log(maxNum(maxIndex));
// 5. Өгөгдсөн Массивийн элэментүүдийг эсрэг дарааллаар буцаа
// function revNum(arr) {
//   let reverse = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverse.push(arr[i]);
//   }
//   return reverse;
// }

// let reverse = [1, 3, 5, 6, 7, 8];
// console.log(revNum(reverse));

//6. Хөрш элэментүүдээсээ их буюу орой элэментүүдийн тоог буцаа
// 1,2,3,4,3 bailaa gej bodiy

// function neighbor(arr) {
//   let peakNum = [];
//   if (arr[0] > arr[1]) {
//     peakNum.push(arr[0]);
//   }
//   for (let i = 1; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//       peakNum.push(arr[i]);
//     }
//   }
//   if (arr[arr.length - 1] > arr[arr.length - 2]) {
//     peakNum.push(arr[arr.length - 1]);
//   }
//   return peakNum;
// }

// let peakNum = [8, 5, 4, 4, 5, 2, 5, 7, 9];
// console.log(neighbor(peakNum));

// 7. Өгөгдсөн массивийн бүх хосыг хэвлэ

// function printPair(arr) {
//   let pair = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let b = i + 1; b < arr.length; b++) {
//       pair.push(arr[i], arr[b]);
//     }
//   }
//   return pair;
// }
// let pair = [2, 4, 3, 5];
// console.log(printPair(pair));

// 8. Массив болон тоо өгөгдөв. Нийлбэр нь өгөгдсөн тоотой тэнцүү байдаг хосын тоог ол

// function massSum(arr, givenNum) {
//   //   let sum = [];
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let b = i + 1; b < arr.length; b++) {
//       if (arr[i] + arr[b] == givenNum) {
//         // sum.push(arr[i]);
//         count++;
//       }
//     }
//   }
//   return count;
// }
// console.log(massSum([1, 2, 8, 3, 4, 6, 5], 9));

// 9. Өгөгдсөн 2 массивийн огтлолцлыг ол

// function findIntersection(arr1, arr2) {
//   const intersection = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         intersection.push(arr1[i]);
//         break;
//       }
//     }
//   }
//   return intersection;
// }

// const array1 = [1, 2, 3, 4];
// const array2 = [3, 4, 5, 6];
// console.log(findIntersection(array1, array2)); // [3, 4]

// 10. Өгөгдсөн массивийн сөрөг тоонуудыг зүүн талд нь байрлуул

// 11. Дараалсан тоонуудаас бүрдэх массив өгөгдөх байсан боловч 1 тоо нь дутуу байв. Тэр тоог ол
// function findMissingNumber(arr) {
//   const n = arr.length + 1;
//   const expectedSum = (n * (n + 1)) / 2;
//   const actualSum = arr.reduce((sum, num) => sum + num, 0);
//   return expectedSum - actualSum;
// }

// const array = [1, 2, 4, 5, 6];
// console.log(findMissingNumber(array));

// 1. Remove Duplicates from Sorted Array-leet
// nums = [1, 4, 6, 6, 8, 10]

// function removeDuplicated(arr) {
//   let dup = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[i + 1]) {
//       dup.push(arr[i]);
//     }
//   }
//   if (arr[arr.length - 1] >= arr[arr.length - 2]) {
//     dup.push(arr[arr.length - 1]);
//   }
//   return dup;
// }
// console.log(removeDuplicated([1, 4, 6, 6, 6, 8, 10, 10]));

// 2.  Өгөгдсөн гурвалжингийн гурвалжин болж чадах эсэхийг шалгаад, талбайг ол.

// function triangleTotalArea(arr) {
//   let p = [];
//   if (
//     arr[0] + arr[1] > arr[2] &&
//     arr[0] + arr[2] > arr[1] &&
//     arr[1] + arr[2] > arr[0]
//   ) {
//     p += (arr[1] + arr[0] + arr[2]) / 2;
//     return Math.sqrt(p * (p - arr[0]) * (p - arr[1]) * (p - arr[2]));
//   } else {
//     return "false";
//   }
// }
// console.log(triangleTotalArea([10, 15, 20]));

// A= s⋅(s−a)⋅(s−b)⋅(s−c)

// 3. Өгөгдсөн утасны дугаарыг аль оператор болохыг буцаа.
// function identifyCarrier(numb) {
//   if (numb / 1000000 >= 99 && numb / 1000000 < 100) {
//     return "Mobicom";
//   } else if (
//     (numb / 1000000 >= 88 && numb / 1000000 < 90) ||
//     (numb / 1000000 >= 86 && numb / 1000000 < 87)
//   ) {
//     return "Unitel";
//   }
// }
// console.log(identifyCarrier(99558080));

// 4. Өгөгдсөн тойргийн талбайг ол.
// function findCircleArea(radius) {
//   return Math.PI * radius ** 2;
// }

// console.log(findCircleArea(5));

// 5. Өгөгдсөн тооны цифрүүдийн нийлбэрийг ол.

// function givenNumb(num) {
//   const lastDigit = num / 10;
//   let sum = 0;
//   for (i = 0; i < num.length; ) {
//     sum += lastDigit;
//     num = (num - lastDigit) / 10;
//   }
//   return sum;
// }
// console.log(givenNumb(1234567));

// 6. Өгөгдсөн тоо палиндром бол true үгүй бол false буцаа. Палиндром тоо гэдэг нь тонгорогсон тоотойгоо тэнцүү тоог хэлнэ

// function provePalindrome(num) {
//   const digits = [];
//   while (num > 0) {
//     digits.push(num % 10);
//     num = (num - (num % 10)) / 10;
//   }
//   for (let i = 0; i < digits.length / 2; i++) {
//     if (digits[i] !== digits[digits.length - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(provePalindrome(2442));

// 7. Өгөгдсөн хоёр натурал тооны хамгийн их ерөнхий хуваагчийг ол.

// function isfindingMaximumDivider(num1, num2) {
//   let divisor = num1 > num2; ? num2: num1;
//   while (!(num1 % divisor === 0 && num2 % divisor === 0)) {
//     divisor--;
//   }
//   return divisor;
// }

// console.log(isfindingMaximumDivider(48, 88));

// 8. Хүү n гишгүүртэй шатаар өгсөхдөө 2 янзаар урагшилж чадна. Зогсож байгаа гишгүүрийнхээ дараах гишгүүрт,
// эсвэл 1 алгасаад дараагийн гишгүүрт алхаж очно. Нэгдүгээр гишгүүрийн өмнө зогсож байгаа хүү n-р гишгүүр хүртэл хичнээн ялгаатай маршрутаар алхаж очиж вэ?
// function isFindingStep(stair) {
//   if (stair === 1) return 1;
//   if (stair === 2) return 2;

//   let twoStep = 2,
//     oneStep = 1,
//     currentStair;

//   for (let i = 3; i <= stair; i++) {
//     currentStair = oneStep + twoStep;
//     twoStep = oneStep;
//     oneStep = currentStair;
//   }

//   return currentStair;
// }
// console.log(isFindingStep(4));

// 9. Фибоначчийн дарааллын n-р гишүүнийг ол.
// function isFindFibonacci(n) {
//   const arr = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }

//   return arr[n];
// }
// console.log(isFindFibonacci(10));

// function isFindFibonacci(n) {
//   if (n <= 1) return 1;
//   return isFindFibonacci(n - 1) + isFindFibonacci(n - 2);
// }
// console.log(isFindFibonacci(5));
// 10. Өгөгдөн массивийн i аас j дэх гишүүдийн хамгийн багыг ол

// 11. arr = [4, 3, 6, 65, 8, 7, 90, 10, 5] өсөх дарааллаар эрэмблэ

//object - hash map

// function twoSum(arr, target) {
//   const wanted = {};

//   for (let i = 0; i < arr.length; i++) {
//     wanted[target - arr[i]] = i;
//   }

//   console.log(wanted);

//   for (let i = 0; i < arr.length; i++) {
//     if (wanted[arr[i]] !== undefined && i !== wanted[arr[i]])
//       return [i, wanted[arr[i]]];
//   }
// }
// console.log(twoSum([1, 2, 4, 5, 3, 6], 8));

//1. Namaig Tom  gedeg bi 20 nastai. Mongol ornoos irsen. Bor ongiin nvdtei. Saaral ongiin nvdnii shil zvvdeg. Sags togloh durtai. Bi gants biy.

// let myInformation = `Namaig ${person.firstName}`;

// 2. Ижил тоонуудыг object-d оруулаад тоолоод хэвлэ

// function twoSum(arr) {
//   const wanted = {};

//   for (let i = 0; i < arr.length; i++) {
//     if (wanted[arr[i]]) {
//       wanted[arr[i]] += 1;
//     } else {
//       wanted[arr[i]] = 1;
//     }
//   }

//   return wanted;
// }
// console.log(twoSum([1, 8, 1, 1, 2, 2, 3, 3]));

// const today = new Date();

// console.log(today.setFullYear(2026));

// 2. string reverse

// const stringReverse = (str) => {
//   reverse = "";
//   for (i = str.length - 1; i >= 0; i--) {
//     reverse += str[i];
//   }
//   return reverse;
// };
// console.log(stringReverse("a,b,c,d"));
// functional writing
// 3. Remove a character from a string in JS

// const characterRemove = (str) => {
//   console.log(str.replace("f", ""));
// };
// console.log(characterRemove("fire"));

// 4. Delete the first character from JS String
// did it in 3
//5. Remove Text from a String in JS
// let removeText = (str) => {
//   console.log(str.replace("fine", ""));
// };
// console.log(removeText("I'm fine and thank you"));

//6. Iterate Over String Characters in JS
// let iterateOverCharacters = (str) => {
//   for (i = 0; i < str.length; i++) {
//     console.log(str[i]);
//   }
// };
// console.log(iterateOverCharacters("Everything"));

// let iterateOverCharacters = (str) => {
//   str.split("").forEach((char, index) => {
//     console.log(`${index}: ${char}`);
//   });
// };
// console.log(iterateOverCharacters("Everything"));
//7.Sort a string in JS

// let sortString = (str) => {
//   const result = str
//     .split(" ")
//     .sort((a, b) => a - b)
//     .join(" ");

//   return result;
// };

// console.log(sortString("20 25 5 1 0"));

//8. Check if String Has Only Alphabets in JS

// let checkString = (str) => {
//   const result = Array.from(str).every((char) => /[A-Za-z]/.test(char));
//   return result;
// };
// console.log(checkString("Nice"));
// 9. Capitalize the First Letter in JS
// let capitalizeFirstLetter = (str) => {
//   let result = str.replace("w", "W");
//   return result;
// };
// console.log(capitalizeFirstLetter("welcome"));
// 10. Convert Comma-Separated String to Array in JS
