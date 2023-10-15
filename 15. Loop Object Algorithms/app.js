// task1
// for (let i = 1; i < 99; i++) {
//   if (i % 10 == 7) {
//     console.log(i);
//   }
// }

// task2
// for (let i = 1; i < 99; i++) {
//   if (i % 11 == 0) {
//     console.log(i);
//   }
// }

// task3
// let a ="1234";
// result = "";
// for (let i = 0; i < a.length; i++) {
//     // console.log(a[i]);
//     // result += a[i] + " "
//     result = result + a[i] + " "
// }
// console.log(result);

// task4
// let a = "1234";
// max = a[0];
// // console.log(a[0]);
// for (let i = 1; i < a.length; i++) {
//   if (Number(a[i]) > max) {
//     max = a[i];
//   }
// }
// console.log(max);

// task5
// let number = "1234";
// let sum = 0;
// let hasil = 1;

// for (let i = 0; i < number.length; i++) {
//   sum = sum + Number(number[i]) ;
//   hasil = hasil * number[i];
// }
// console.log("cem", sum);
// console.log("hasil", hasil);
// console.log("ededi orta", sum / +number.length);

// task6
// let num = "120";
// for (let i = 0; i < num; i++) {
//     if (num % i ==0 ) {
//         console.log(i);
//     }
// }

// task7
// let num = "120";
// count = 0
// for (let i = 0; i < num; i++) {
//     if (num % i ==0 ) {
//         count++;
//     }
// }
// console.log(count);

// task8 . Verilmiş array-in tək elementlərinin indeksini çapa verən proqram tərtib edin.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 1; i < arr.length; i++) {
//   //   console.log(arr.length);
//   if (arr[i] % 2 == 1) {
//     console.log(i);
//     // burada tek elementler 3;5;7;9 du onlarin indeksi ise 2;4;6;8
//   }
// }

//task 9. Verilmiş array-in tək indeksli elementlərini çapa verən proqram tərtib edin.

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 1) {
//     console.log(arr[i]);
//   }
// }

// task10 Verilmiş array-in max elementini çapa verən proqram tərtib edin.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,99];
// let max = arr[0];
// // console.log(arr[[0]]);
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i]
//   }
//   else{
//     console.log(arr[0]);
//   }
// }
// console.log(`Arrayin en boyuk elementi ${max}-dur`);

// task11 11. Verilmiş array-in cüt elementlərinin max elementini çapa verən proqram tərtib edin.
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,99,66,191];
// let max_even = arr[0];
// // console.log(arr[[0]]);
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max_even && arr[i] % 2 == 0) {
//     max_even = arr[i];
//   }
// }
// console.log(max_even);

// task12 Verilmiş array-in min elementinin indeksini çapa verən proqram tərtib edin.
// let arr = [2, 6, 7, 8, 9, 99, 66, 191, 3,1];
// let min = [arr[0]];
// // console.log(arr[[0]]);
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < min) {
//       min = arr[i];
//     //   console.log(i);
//   }
//   else{
//     console.log(arr[0]);
//   }
// }

// task 13 Verilmiş array-in min elementi ilə max elementinin yerini dəyişən proqram tərtib edin
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let max = arr[0];
// let min = arr[0];
// let maxIndex = 0;
// let minIndex = 0;
// let equal;
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//     maxIndex = i;
//   } else if (arr[i] < min) {
//     min = arr[i];
//     minIndex = i;
//   }
// }
// [arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];
// console.log(arr);

//task14  Verilmiş array-in  cüt elementlərinin min elementi ilə tək elementlərinin max elementinin yerini dəyişən proqram tərtib edin

// let arr = [88, 5, 6, 2, 7, 8, 9, 99, 66, 191, 8];
// let maxOdd = arr[0];
// let minEven = arr[0];
// let maxIndex = 0;
// let minIndex = 0;
// let equal;
// // console.log(arr[[0]]);
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > maxOdd && arr[i] % 2 == 1) {
//     maxOdd = arr[i];
//     maxIndex = i;
// } else if (arr[i] < minEven && arr[i] % 2 == 0) {
//     minEven = arr[i];
//     minIndex = i;
// }
// }
// // console.log(maxIndex);
// // console.log(minIndex);
// [arr[minIndex], arr[maxIndex]] = [arr[maxIndex], arr[minIndex]];
// // console.log(maxOdd);
// // console.log(minEven);
// console.log(arr);

//task15 Daxil olunan ədədin array-də olub olmadığını təyin edən proqram tərtib edin.
// let num = Number(prompt("Eded daxil edin:"));
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let Found = false;
// for (let i = 0; i < arr.length; i++) {
//   if (num === arr[i]) {
//     Found = true;
//     break;
//   }
// }
// if (Found) {
//   alert("Eded array-də movcuddur");
// } else {
//   alert("Eded movcud deyil");
// }
// console.log(num);

// task16
// Verilmiş array-də min və max elementi nəzərə almadan yerdə qalan bütün elementlərin cəmini tapın.
// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];
// let sum = 0;
// let min = arr[0];
// let max = arr[0];
// let maxIndex = 0;
// let minIndex = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//     maxIndex = i;
//   }
//   if (arr[i] < min) {
//     min = arr[i];
//     minIndex = i;
//   }
// }
// arr.splice(maxIndex, 1);
// arr.splice(minIndex, 1);
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] == "number") {
//     // console.log(arr[i]);
//     sum += arr[i];
//   }
// }
// console.log(sum);
// // console.log(sum)
// // console.log(maxIndex);
// // console.log(minIndex);
// // console.log(max);
// // console.log(min);
// // console.log(sum);

// task17 Verilmiş array-in bool tipinde olan elementin qonsu elementlerini ekrana cixaran proqram yazin.

// let arr=[2,9,-5,-4,"AzerBayCan",true,12,"LANKARAN","LimOn",182,4]
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i]=="boolean") {
//         console.log(arr[i-1],arr[i+1]);
//     }
// }

// task 18 Verilmiş array-in ən uzun sözünü ekrana çıxaran proqram yazın
// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];
// let found = "";
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "string") {
//       if (arr[i].length > found.length) {
//       found = arr[i];
//     }
//   }
// }
// console.log(found);

// task19 . Verilmiş array-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.
// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];
// for (let i = 0; i < arr.length; i++) {
//   if (typeof arr[i] === "string" && arr[i] === arr[i].toUpperCase()) {
//     console.log(`boyuk herflerle yazilan soz: ${arr[i]}
//       sozun indeksi: ${i}`);
//   }
// }

// task20  Verilmiş array-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın
let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];
let say = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "string") {
    // console.log(arr[i]);
    for (let j = 0; j < arr[i].length; j++) {
      console.log(i[j]);
    }
  }
}
console.log(say);
