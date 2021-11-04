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

let userChoose = users.filter (item => item.age < 20);
console.log(userChoose);

//

console.log('------------- 9');
let users1 = [
    {id: 1, name: "Vic", age: 21},  
    {id: 2, name: "Petya", age: 30}, 
    {id: 3, name: "Jon", age: 5}
];

let names = users1.map (item => item.name);
console.log(names);

//

console.log('------------- 10');
