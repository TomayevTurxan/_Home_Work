// function greet(name){
//     console.log('salam' + " " + name)
// }
// greet("Turxan")


// function greet(name) {
//     console.log('Hello' + ' ' + name);
//     callMe()
// }

// function callMe() {
//     console.log('I am callback function');
// }

// greet('Turxan', callMe);



function DisplaySum(sum) {
    console.log(`sum is: ${sum}`);    
}

function sum(num1,num2,clb) {
    let result = num1+ num2;
    clb(result)
    return result;
}
console.log(sum(3,4,DisplaySum));