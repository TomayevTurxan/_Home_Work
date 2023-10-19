//  task1
String.prototype.isBlank = function () {
  for (let i = 0; i < this.length; i++) {
    if (this[i] !== "") {
      return true;
    }
  }
  return false;
};
let text = "salam";
// console.log(text.isBlank());

// task2
String.prototype.wavy = function () {
  let word2 = "";
  for (let i = 0; i < this.length; i++) {
    if (i % 2 == 0) {
      //   console.log(this[i]);
      word2 += this[i].toLowerCase();
    } else {
      word2 += this[i].toUpperCase();
    }
  }
  return word2;
};
let word = "salam";
// console.log(word.wavy());

// task3
Array.prototype.max = function () {
  let max = this[0];
  this.forEach((element) => {
    // console.log(max);
    if (max < element) {
      max = element;
    }
  });
  return max;
};
let arr = [1, 2, 3, 4, 5];
// console.log(arr.max());

Array.prototype.min = function () {
  let min = this[0];
  this.forEach((element) => {
    // console.log(max);
    if (min > element) {
      min = element;
    }
  });
  return min;
};
let arr2 = [1, 2, 3, 4, 5];
//   console.log(arr2.min());

// task4
Array.prototype.numbers = function () {
  let count = 0;
  this.forEach((element) => {
    if (typeof element == "number") {
      count++;
    }
  });
  return count;
};

arrNumber = [2, 23, 4, "TT (Tomayev Turxan)", true, "RR", 99];
// console.log(arrNumber.numbers());

// task5
Array.prototype.myFind = function (num) {
  let isFound = false;
  this.forEach((element) => {
    // console.log(element);
    if (element == num) {
      isFound = true;
    }
  });
  return isFound;
};

let arrNum = [1, 3, 5, 7];
// console.log(arrNum.myFind(5));


// task6
Array.prototype.myFindAll = function (num) {
  let count = 0;
  this.forEach((element) => {
    // console.log(element);
    if (element == num) {
      count++;
    }
  });
  return count;
};

let arrNum2 = [1, 3, 5, 7,7,7,7];
// console.log(arrNum2.myFindAll(7)); //7lerin sayini verecek yeni 4-u

// TASK7
Array.prototype.myFilter = function (min, max) {
  let filterArray = [];
  this.forEach((element) => {
    if (element > min && element < max) {
      filterArray.push(element);
    }
  });
  return filterArray;
};
let arrFilter = [2, 1, 4, 3, 7, 9, 5];
let filterResult = arrFilter.myFilter(3, 8);
// console.log(filterResult.sort());

// task8
Array.prototype.myIndexOf = function (num) {
  for (let i = 0; i < this.length; i++) {
    // console.log(this);
    if (num == this[i]) {
      return i;
    }
  }
  return -1;
};
let arrIndex = [1, 2, 4, 5, 7];
console.log(arrIndex.myIndexOf(5));

// task9

Array.prototype.myLastIndexOf = function (num) {
    for (let i = 0; i < this.length; i++) {
      // console.log(this);
      if (num == this[i]) {
        return i;
      }
    }
    return -1;
  };
  let arrIndex2 = [1, 2, 4, 5, 7];
//   console.log(arrIndex.reverse().myLastIndexOf(5));

// task10
Array.prototype.myMap = function () {
  let filterMap = [];
  this.forEach((element) => {
    filterMap.push(element);
  });
  return filterMap;
};
let arrMap = [1, 2, 4, 5, 7];
// console.log(arrMap.myMap());
