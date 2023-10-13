// task1
// let num1 = Number(prompt("Bir ədəd daxil edin:"));

// if (num1 > 0 && num1 % 2 == 0) {
//     alert("Positive even")
// } else if(num1<0){
//     alert("Negative number")
// }
// else {
//     alert("positive odd")
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


// task3221
let monthDay = Number(window.prompt("Ilin necenci ayi?"));
let count = 0;
switch (monthDay) {
  case 1:
    alert("January");
    break;
  case 2:
    alert("February");
    break;
  case 3:
    alert("March");
    break;
  case 4:
    alert("April");
    break;
  case 5:
    alert("May");
    break;
  case 6:
    alert("June");
    break;
  case 7:
    alert("July");
    break;
  case 8:
    alert("August");
    break;
  case 9:
    alert("September");
    break;
  case 10:
    alert("October");
    break;
  case 11:
    alert("November");
    break;
  case 12:
    alert("December");
    break;
  default:
    
    break;
}

// task4
// let season = Number(window.prompt("Ilin necenci ayi?"));

// switch (season) {
//   case 3:
//   case 4:
//   case 5:
//     alert("Spring");
//     break;
//   case 6:
//   case 7:
//   case 8:
//     alert("Summer");
//     break;
//   case 9:
//   case 10:
//   case 11:
//     alert("Autumn");
//   case 1:
//   case 2:
//   case 12:
//     alert("Winter");
//   default:
//     alert("invalid input");
//     break;
// }

// task5
// let num1 = Number(prompt("Birinci reqemi daxil et:"));
// let num2 = Number(prompt("Ikinci reqemi daxil et:"));
// let num3 = Number(prompt("Ucuncu reqemi daxil et:"));

// if (num1 == num2 && num2 == num3) {
//   alert("equals");
// } else {
//   let max = num1;
//   if (max < num2 && max < num3) {
//     max = num2;
//     max = num3;
//   }
//   alert("maksimum eded" + max);
// }
