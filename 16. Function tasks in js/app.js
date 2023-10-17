function Product(
  name,
  salePrice,
  costPrice,
  stockQuantity,
  soldQuantity = 0,
  isDiscounted = false,
  discountPercentage = 0
) {
  if (salePrice <= costPrice) {
    alert("satis qiymeti mehsulun qiymetinden cox olmalidir.");
    return;
  }

  this.name = name;
  this.salePrice = salePrice;
  this.costPrice = costPrice;
  this.stockQuantity = stockQuantity;
  this.soldQuantity = soldQuantity;
  this.isDiscounted = isDiscounted;
  this.discountPercentage = discountPercentage;

  this.calculateProfit = function () {
    return (this.salePrice - this.costPrice) * this.soldQuantity;
  };
  this.sell = function (sellQuantity) {
    if (sellQuantity < stockQuantity) {
      this.soldQuantity += sellQuantity;
      this.stockQuantity -= sellQuantity;
    }
    else{
      alert("ala bilmez")
    }
  };
  this.calculateProfit = function () {
    return (this.salePrice - this.costPrice) * this.soldQuantity;
  };
}
let arr = [];
let product1 = new Product("iphone", 100, 70, 10, 2, true, 10);
let product2 = new Product("keyboard", 200, 80, 11, 3, true, 6);
let product4 = new Product("computer", 400, 100, 13, 5, true, 8);
let product5 = new Product("tablet", 500, 110, 14, 6, true, 9);
// console.log(product1);


let profit1 = product1.calculateProfit();
// let foundProfit = product1.sell(3);
// burada stockda 10 dene var axi deyirem ki 3 denesi satilib uje consolda 7 verrir

// bu iphonenin gelirini hesablayir
console.log("iphonenin geliri:" , profit1);
// console.log("iphonenin stockda qalan sayi",product1.stockQuantity)
// console.log("satilan iphone-nin miqdari",product1.soldQuantity)
// console.log("iphone den olan xeyir:",profit1)
arr.push(product1, product2, product4, product5);
// console.log(arr);

// task 1.4
function totalProfit(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    sum += products[i].calculateProfit();
  }
  return sum;
}
let totalDevicesProfit = totalProfit(arr)
console.log("umumi gelir:" , totalDevicesProfit);

// task 1.5
function totalDiscount(products) {
  let totalDis = 0;
  for (let i = 0; i < products.length; i++) {
    if (products[i].isDiscounted == true) {
      totalDis += products[i].discountPercentage;
      console.log(products[i]);
    }
  }
  return totalDis;
}
let totalDiscountPrice = totalDiscount(arr);
console.log("umumi gelir:", totalDiscountPrice);

// 1.6 yaza bilmedim (
// function nonDiscount(products) {
//     const nonDiscountProducts = products.filter(product => !product.isDiscounted);
//     console.log(nonDiscountProducts);
//   }
//   let nonProducts = nonDiscount(arr);
//   console.log(nonProducts);
