var string1 = "st1"; //gobal
string2 = "st2"; // same var

string1 = "hello";
console.log(string1);

{
    let string1 = "my name";
    console.log(string1);
}
console.log(string1);

{
    const string1 = "win";
    // string1 = "vong";
}

// tradition fn
function add (a, b) {
    let c = a + b ;
    return c;
}

let res = add(5, 3);
console.log(res);

// arrow funtion
const addFn = (a, b) => a + b;
res = add(8, 5);
console.log(res)

// array funtion
const cars = ["Toyota", "mazda", "honda"];
const fruits = [];
fruits [0] = "apple";
fruits [3] = "mango";
const people = new Array("win", "james", "john");
console.log(people);
console.log(fruits);

let popCars = cars.pop();
console.log(popCars);
console.log(cars);

cars.push("kubota");
cars.shift(); //remove "toyota"
cars.unshift("froza");
console.log(cars);

const carsSlice = cars.slice(1, 3);
console.log(carsSlice);

carsSlice.splice(1,0, "Honda");
console.log(carsSlice);

console.log(carsSlice.toString());
console.log(carsSlice.concat(people));
console.log([...cars, ...people]); //spread operator
