class Device {
  brand;
  model;
  screenSize;
  batteryLevel;
  #price; //maya deyeri
  salePrice; //satis qiymeti
  discountPercentage; // endirim
  saleCount = 0; //məhsulun satış sayı
  stockCount; //məhsulun stock-dakı sayı
  
//constructor
  constructor(brand,model,screenSize,batteryLevel,price,salePrice,discountPercentage,saleCount,stockCount){
        this.brand = brand;
        this.model = model;
        this.screenSize  = screenSize;
        this.batteryLevel = batteryLevel;
        this.#price = price;
        this.salePrice = salePrice;
        this.discountPercentage = discountPercentage;
        this.saleCount = saleCount;
        this.stockCount = stockCount;
    }
    // get
    get profit(){
        return this.calculateProfit();
    }
    // methods
    calculateProfit(){
        if (this.#price>this.salePrice) {
            alert("Məhsul ziyana satılır")            
        }else{
            return((this.salePrice- this.#price)*this.saleCount - ((this.salePrice * this.discountPercentage)/100))
        }
    }
    DisplayBatteryLevel(){
        return this.batteryLevel
    }
    SellProduct(sellQuantity){
        if (sellQuantity<=this.stockCount) {
            this.stockCount -= sellQuantity;
            this.saleCount += sellQuantity;
        } else {
            alert("Stockda kifayet qeder mehsul yoxdur")
        }
    }
    displayDetail(){
        return( `Computer brand name is ${this.brand} and model is ${this.model} also there are some features.For example,screen-size is ${this.screenSize} and battery-level is ${this.batteryLevel}`)
    }
}


class Iphone extends Device{
    ring;
    isSmart = true;
    constructor(brand,model,screenSize,batteryLevel,price,salePrice,discountPercentage,saleCount,stockCount,ring,isSmart){
        super(brand,model,screenSize,batteryLevel,price,salePrice,discountPercentage,saleCount,stockCount)
        this.ring = ring;
        this.isSmart = isSmart;
    }
    // methods
    displayDetail(){
        const parentDetail = super.displayDetail();
        if (this.isSmart) {
            return(`${parentDetail} \n IsSmart deyeri beraberdir ${this.isSmart} -a`)
        }
        return parentDetail
    }
}


class Laptop extends Device{
    operatingSystem;
    isRGBkeyboard=true;
    constructor(brand,model,screenSize,batteryLevel,price,salePrice,discountPercentage,saleCount,stockCount,operatingSystem,isRGBkeyboard){
        super(brand,model,screenSize,batteryLevel,price,salePrice,discountPercentage,saleCount,stockCount)
        this.operatingSystem = operatingSystem;
        this.isRGBkeyboard = isRGBkeyboard;
    }
    displayDetail(){
        const parent2Detail = super.displayDetail();
        if (this.isRGBkeyboard) {
            return(`${parent2Detail} \n isRGBkeyboard deyeri beraberdir ${this.isRGBkeyboard} -a`)
        }
        return parent2Detail
    }
}

//#region Device object
// const computer = new Device ("Lenovo","Lenovo-K23","19-inch",73,1000,1500,10,5,25)
// console.log(computer);
// console.log(computer.displayDetail());
// computer.SellProduct(30) //misal olaraq stockda 25 dene var burda ise 30 yazmisam ve mene bu alert qaytarir 
// computer.SellProduct(2)  
// sellProduct isleyirdi artiq diger computeri  iphoneDevice tanitdigima gore o console-da vere bilmedim
//#endregion

//#region Iphone object
// const iphoneDevice = new Iphone("Lenovo","Lenovo-K23","19-inch",73,1000,1500,10,5,25,"ring ring",true)
// console.log(iphoneDevice)
//#endregion

function FilterbyPrice(array,price) {
        const filterProducts =[]
        for (let i = 0; i < array.length; i++) {
            const product = array[i]
            // console.log(array[i].salePrice);
            const productSalePrice = array[i].salePrice;
            if (productSalePrice > price) {
                filterProducts.push(product);
              }
            // console.log(product);
        }
        return filterProducts;
}
function FilterbyName(array,name) {
    let count = 0
    for (let i = 0; i < array.length; i++) {
        // console.log(array[i].brand);
        const productName = array[i].brand;
        console.log(productName);
        if (productName == name) {
            count++;
        }
        // console.log(count);
    }
    return count;
}
function GetTotalProfit(array){
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        const product = array[i];
        const profit = product.profit;
        sum += profit
        console.log(`Profit for ${product.brand}: ${profit} `);//profit of each product
    }
    console.log(`all profits of products is ${sum}`);//generally profit of generally products
}
function FilterByOperatingSystem (array,operatingSystem) {
    const filterSystem = []
    for (let i = 0; i < array.length; i++) {
        const product = array[i].operatingSystem;
        console.log(product);
        if (product === operatingSystem) {
            filterSystem.push(array[i]);
        }
    } 
    return filterSystem;
}
let products = []
const IphoneDevice = new Iphone("Iphone","Iphone XS","10-inch",73,1000,1500,10,5,25,"IOS",true)
const IphoneDevice2 = new Iphone("Iphone","Iphone 13","14-inch",73,900,1500,10,5,25,"IOS",true) //bunu deyismedim sadece count++ olanda 2ye = oldugunu goresiz deye eledim isleyir
const LaptopDevice = new Laptop("Lenovo","Lenovo-K23","19-inch",73,800,1500,10,5,25,"windows",true)
const airpodsDevice = new Laptop("Apple","Airpods-K23","",23,100,200,15,10,30,"windows",true)
const powerBank = new Laptop("Xiaomi","powerBank T5","",99,150,300,20,15,35,"",true)

products.push(IphoneDevice,IphoneDevice2,LaptopDevice,airpodsDevice,powerBank)
// const filterProducts = FilterbyPrice(products, 800); //burada yalniz Lenevo verecek 800 satis qiymetinden azdi 
// const filterProductsName = FilterbyName(products, "Iphone"); //burada yalniz Lenevo verecek 800 satis qiymetinden azdi 
// const totalProfit = GetTotalProfit(products); //burada yalniz Lenevo verecek 800 satis qiymetinden azdi 
const filterSystemProduct = FilterByOperatingSystem(products, "windows")//burada da windows olan Operating systemdekileri ekranin verir 2deen laptop olan classlari verecek
console.log(filterSystemProduct);
// console.log(filterProducts);
// console.log(filterProductsName);
// console.log(products);
// her biri def kimi isleyir