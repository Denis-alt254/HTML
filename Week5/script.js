console.log("Hello World")

let myName = 'Denis Kipkurui'

const Person = {
    name: 'Denis',
    age: 19, 
    isStudent: true, 
    eyeColor: 'Green'
}

console.log(Person)

//Array

var arr = ['Ford', 'Benz', 'Lexus', 'Nizzan']

console.log(arr)

//Object

const Car = {
    brand: 'Ford',
    year: 2020
}

console.log(Car.brand)

//array

var countries = ['Kenya', 'Ethiopia', 'Uganda', 'Somalia', 'Tanzania']

console.log(countries[2])

let d = 100;
let e = 50;

let isEqualto = d == e;
let isStrictlyEqualto = d === e;
let isnotEqualto = d != e;
let isstrictlynotewualto = d !== e;
let islessthan = d< e
let isgreatterthan = d>e

console.log(isEqualto)
console.log(isStrictlyEqualto)
console.log(isnotEqualto)
console.log(isstrictlynotewualto)
console.log(islessthan)
console.log(isgreatterthan)

function modulus(a, b){
    console.log('Num: ', a % b)
}

 num = modulus(9, 2)


function myfunc(name, country){
    console.log("my name is", name + " "+ "and i am from", country)
}

myfunc('Denis', 'Kenya')

//Loops
let i;

for (i = 0; i <= 20; i ++){
    console.log("cycle: " + i)
}