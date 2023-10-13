// task7
// let num1 = Number(prompt("eded daxil et:"));
// price= true
// if (num1<=1) {
//     price = false;
// }else{
//     for (let i = 2; i < num1; i++) {
//         if (num1 % i ==0 ) {
//           alert("murekkeb ededdir");
//           break;
//         }
//         else{
//           alert("sade eddedir");
//           break;
//         }
//       }
// }
// task6
// let names = ["Ali", "Vali", "Ahmad", "Muhammed", "Yusif"];
// count = 0;
// for (let i = 0; i < names.length; i++) {
//   if (names[i].length > 4) {
//     count++;
//   } else {
//   }
// }
// console.log(" 4 simvol-dan cox olan adlarin sayi:", count);

// task5
// let numbers = [1, 4, 2, 6, 8, 2, 1, 7, 7];
// toplam = 0;
// for (let i = 0; i < numbers.length; i++) {
//   toplam += numbers[i];
// }
// let edediOrta = toplam / numbers.length;
// console.log(toplam);

// task4
let numbers =[1,4,2,6,8,2,1,7,7];
let count = 0
for (let i = 0; i < numbers.length; i++) {
    for (let index=i; index < numbers.length; index++) {
        if (numbers[i] === numbers[index] && i!==index) {
            // console.log(numbers[i]);
            // console.log(numbers[index]);
            count++;
            break;
        }
    }
}
console.log(count);

// task3
// let numbers = [1, 4, 2, 6, 8, 1, 7];
// if (3 < 1) {
//   console.log(true);
// } else {
//   let max = numbers[0];
//   for (let i = 1; i < numbers.length; i++) {
//       if (numbers[i] > max) {
//           max = numbers[i];
//     }
//   }
//   console.log("En boyuk reqem:", max);
// }

// task2
// let a = Number(prompt("Bir ədəd daxil edin:"));
// let count3 = 0;
// let count5 = 0;
// let count8 = 0;
// for (let i = 1; i <= a; i++) {
//   if (a < 50 && i % 3 == 0) {
//     count3++;
//   } else if (a >= 50 && a <= 100 && i % 5 == 0) {
//     count5++;
//   } else if (a > 100 && i % 8 == 0) {
//     count8++;
//   }
// }
// console.log("50 den kicik olan ve 3e bolunen ededler ", count3);
// console.log("50den boyuk 100den kicik olan ededler:", count5);
// console.log("100 den boyuk olan ve 8e bolunen ededler:", count8);

// task1
// let a = Number(prompt("Bir ədəd daxil edin:"));
// if (a % 7 == 0) {
//   alert("Bu eded 7-ye bolunur");
// } else {
//   alert("bu eded 7-ye bolunmur");
// }

