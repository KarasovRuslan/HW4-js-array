console.log('------------- 5');
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
  
ask(
    "Вы согласны?",
    () => console.log("Вы согласились."),
    () => console.log("Вы отменили выполнение.")
);

//

console.log('------------- 6');
let myShort = 'my-short-string';
let arr = myShort.split('-');
console.log(arr);

//

console.log('------------- 7');
let arr1 = ['JavaScript', 2015];
let str = arr1.join(' ');
console.log(str);

//

console.log('------------- 8');
let users = [
    {id: 1, name: "Vic", age: 21},  
    {id: 2, name: "Petya", age: 30}, 
    {id: 3, name: "Jon", age: 5}
];

let userChoose = users.filter(item => item.age < 20);
console.log(userChoose);

//

console.log('------------- 9');
let users1 = [
    {id: 1, name: "Vic", age: 21},  
    {id: 2, name: "Petya", age: 30}, 
    {id: 3, name: "Jon", age: 5}
];

let names = users1.map(item => item.name);
console.log(names);

//

console.log('------------- 10');
function filterRangeInPlace(arr2, a, b){
    for(let i = 0; i < arr2.length; i++){
        let varb = arr2[i];
        if (a <= varb && varb <= b){
        } else {
            arr2.splice(i, 1);
            i--;
        }
    }
}

// function filterRangeInPlace (arr2, a, b) {
//     for (let i = 0; i <= arr2.length ; i++) {
//         let varb = arr2[i];
//         if (a > varb || varb >b){
//             arr2.splice(i, 1);
//             i--;
//         }    
//     }
// }

// let filterRangeInPlace = (arr2, a, b) => arr2.forEach((varb, i) => {
//     if (a <= varb || varb <= b) {
//         arr2.splice(i, 1)
//     }
// });

let arr2 = [5, 3, 8, 1];
filterRangeInPlace(arr2, 1, 4);
console.log(arr2);

//

console.log('------------- 11');
let strToArray = (str, separator) => str.split(separator);
console.log(strToArray('i-will-kill-you-lodochnik','-'));

// function strToArray(str, separator) {
//     return str.split(separator);
// }
// console.log(strToArray('i-will-kill-you-lodochnik','-'));

//

console.log('------------- 12');
let slArray = (arr3, startIndex, endIndex) => arr3.slice(startIndex,endIndex);

// function slArray(arr3, startIndex, endIndex) {
//     return arr3.slice(startIndex,endIndex);
// }

let arr3 = [5, 3, 8, 1];
let range = slArray(arr3, 1, 4);
console.log(range);
console.log(arr3); 

// 

console.log('------------- 13');
function sum(...args) {
    let sum = 0;
    for (let arg of args) { 
        sum += arg; 
    }
    return sum;
}
console.log(sum(3, 2));
console.log(sum(7, 2));
console.log(sum(3, 8, 5));
console.log(sum(-3, -8, 5));