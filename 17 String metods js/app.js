// task1
// let name = "Turxan_Tomayev_TT";
// console.log(name.replaceAll("_", "-"));

// task2
// let lowerWord = (string) => typeof string === "string" ? string.toLowerCase() : "yeniden daxil et";
// let stringTypeWord = "Salam Dostlar!";
// let completedString = lowerWord(stringTypeWord);
// console.log(completedString);

// task2 basqa versiya
// let lowerWord = (string) => {
//   if (typeof string !== "string") {
//     alert("yeniden cehd edin");
//   }
//   return string.toLowerCase();
// };
// let stringWord = "Salam Dostlar !";
// let completedString = lowerWord(stringWord);
// console.log(completedString);
// bu usul noob usuludu therefore her iki hali yazmisam

// task3
// let a = function (string) {
//   if (typeof string !== "string") {
//     alert("yeniden cehd edin");
//   }
//   return string.trim().split('');
// };
// let stringWord = "        hey          ";
// let completedString = a(stringWord);
// console.log(completedString);

// task4
// let word = (string) => {
//   if (typeof string !== "string") {
//     alert("yeniden cehd edin");
//   }
//   return string.replaceAll(" ","-").toLowerCase();
// };
// let stringWord = "Robin Singh from USA";
// let completedString = word(stringWord);
// console.log(completedString);

// task5
// function input() {
//   let string = "Js string exercises";
//   console.log(string.charAt(0).toUpperCase()+ string.slice(1));
// }
// input();

// task6
// function word() {
//   let string = "AzerBayCan";
//   let count = 0;
//   //   console.log(string);
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == string[i].toUpperCase()) {
//       count++;
//     }
//   }
//   return count;
// }
// let result = word();
// console.log(result);

// task7
// function foundWord() {
//   let text = "Azerbaycan guclu olkedir.";
//   let search = "guclu";
//   let index = text.indexOf(search);
//   let isFound = true;
//   console.log(index);
//   if (index == -1) {
//     console.log("not found");
//     isFound = false;
//     console.log(isFound)
//   } else {
//     let newSentence = text.slice(index, index + search.length);
//     console.log(newSentence);
//     isFound = true
//     console.log(isFound)
//   }
// }
// foundWord();

// task8
// function Human(name, surname, birthYear, birthCity) {
//   this.name = name;
//   this.surname = surname;
//   this.birthYear = birthYear;
//   this.birthCity = birthCity;

//   this.getFullName = function () {
//     return this.name + " " + this.surname;
//   };
//   // console.log("Şəxslərin tam adlari:", this.getFullName());
// }
// function searchHuman(searchString, data) {
//   searchString = searchString.toLowerCase();
//   let result = [];
//   for (let i = 0; i < data.length; i++) {
//     let human = data[i]
//     console.log(human);
//     const fullName = human.getFullName().toLowerCase();
//     const name = human.name.toLowerCase();
//     const surname = human.surname.toLowerCase();
//     if (
//       fullName.includes(searchString) ||
//       name.includes(searchString) ||
//       surname.includes(searchString)
//     ) {
//       result.push(human);
//     }
//   }
//   return result;
// }

// let arr = [];
// let human1 = new Human("Turxan", "Tomayev", "2003", "Baku");
// let human2 = new Human("Ilkin", "Ehmedov", "2003", "Ucar");
// let human3 = new Human("Elcan", "Hadili", "2002", "Yardimli");
// let human4 = new Human("Seyhun", "Abdullayev", "2002", "Agstafa");
// let human5 = new Human("Elgun", "Bayramov", "2001", "Susa");
// arr.push(human1, human2, human3, human4, human5);

// console.log(arr);

// let searchString = prompt("AD ve ya soyad daxil edin");
// let result = searchHuman(searchString, arr);
// console.log(result);
