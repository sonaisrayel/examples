
// let person = {
//     name: "Armen",
//     surname: "Karapetyan",
//     age: "23",
//     fullName : getFullName,
//     getAge:getAgeAfter10Years
// }


// let person1 = {
//     name: "Karen",
//     surname: "Karapetyan",
//     age: 45,
//     fullName : getFullName,
//     getAge:getAgeAfter10Years
// }


// function getFullName () {
//     return `${this.name} ${this.surname}`
// }

// function getAgeAfter10Years(){
//     return parseInt(this.age) + 10
// }

// console.log(person.getAge());
// console.log(person1.getAge());
 

// person1.name = "Karen"
// person1.surname = "Karapetyan"

//person = null

// console.log(person.fullName(),'person');
// console.log(person1.fullName(),'person1');



// --------------------------//


function getFullName () {
    return `${this.name} ${this.surname}`
}

function getAgeAfter10Years(){
    return parseInt(this.age) + 10
}

let person = {
    name: "Armen",
    surname: "Karapetyan",
    age: "23",
    fullName : getFullName,
    getAge:getAgeAfter10Years
}

let person1 = person

person1.name = "Harut";
person1.surname = "Manandyan"

console.log(person.name);









