for (let a = 1; a <= 10; a++) {
    for (let b = 1; b <= 10; b++) {
        // console.log(`${a} * ${b} = ${a * b}`);
    }
}

let i = 1;
while (i <= 10) {
    let j = 1;
    while (j <= 10) {
        // console.log(`${i} * ${j} = ${i * j}`);
        j++;
    }
    i++;
}

// for ... of loop
const numbers = [1, 2, 3, 4, 5];
for (const number of numbers) {
    console.log(number);
}

// for ... in loop
const person = { name: 'John', age: 30, city: 'New York' };
for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

for (const property in person){
    console.log(`${property}: ${person[property]}`);
}