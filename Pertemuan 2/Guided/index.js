const demo = document.getElementById("demo");
document.getElementById("demo").innerHTML = "Mikael Rizki Pandu Ekanto";

const testLet = () => { 
    let num = 100; 
    { 
        let num = 200; 
    } 
    return num; 
} 
document.getElementById("testLet").innerHTML = testLet();

const testVar = () => { 
    var num = 100; 
    { 
        var num = 200; 
    } 
    return num ; 
} 
document.getElementById("testVar").innerHTML = testVar();

try { 
    const PI = 3.141592653589793; 
    PI = 3.14;
    document.getElementById("demo").innerHTML = PI; 
}   
catch (err) { 
    document.getElementById("demo").innerHTML = err; 
}

// a. Object 
let name = 'Mikael Rizki' //string 
let age = 21 // number 

let person = { 
    name, 
    age 
} 
console.log("Person :", person, "Name :", person.name, "Age :", person.age) 

// Bracket notation 
person['name'] = 'Marry' 
person['age'] = 25 
let selection = 'name' 
console.log("Person :", person, "Name :", person['name'], "Age :", person['age'], person[selection])


// b. Array Notation
let selectedColors = ['red', 'blue'] 
selectedColors.push('pink') 
selectedColors.push(1)
console.log("Selected Colors:", selectedColors, selectedColors[0]) 

// c. Function
function greet(names) { 
    console.log("hello " + names) 
} 

let names = 'John' 
greet(names) 
greet("Marry")

function calculateBill(meal, taxRate = 0.05) {
    const total = meal * (1 + taxRate)
    return total
}

const myTotal = calculateBill(100, 0.13)
document.getElementById("taxBill").innerHTML = myTotal; 

// ES5
var car = {
    name : 'Honda',
    products : ['Jazz', 'Civic', 'HR-V'],
    showProduct: function () { 
        this.products.map( 
            function (product) { 
                console.log(`${this.name} has launched ${product}`); 
            }.bind(this) 
        ); 
    }
}
car.showProduct();

// ES6 
const rectangle = (w,h) => {
    return w * h;
}

const rectangle2 = (w,h) => w * h;

var car2 = { 
    name: "Honda", 
    products: ["jazz", "civic", "hrv"], 
    showProduct: function () { 
        this.products.map((product) => { 
            console.log(`${this.name} has launched ${product}`); 
        }); 
    }, 
}; 
car2.showProduct();

// Template Literals
let firstName = "Mikael"; 
let lastName = "Rizki"; 

let text = `Welcome ${firstName}, ${lastName}!`; 

document.getElementById("demo2").innerHTML = text;

let text2 = 
`The quick 
brown fox 
jumps over 
the lazy dog`; 

document.getElementById("demo3").innerHTML = text2;

// Shorthand Property
const formatMessage = (name = "test", id = 0, avatar) => { 
    return { 
        namaPanjang : name, 
        id, 
        avatar
    } 
}
const message = formatMessage(
    "Mikael Rizki",
    1, 
    "https://i.pravatar.cc/300"
);
document.getElementById("demo4").innerHTML = message.namaPanjang;

// Destructuring (Object Matching)
const { namaPanjang, id, avatar } = message;
console.log("Nama Panjang", namaPanjang)
console.log("ID", id)
console.log("Avatar", avatar)

// Parameter Default
const newMessage = formatMessage()
console.log("New Message", newMessage)

// Spread Operator
// opsi 1
const q1 = ["Jan", "Feb", "Mar"]; 
const q2 = ["Apr", "May", "Jun"]; 
const q3 = ["Jul", "Aug", "Sep"]; 
const q4 = ["Oct", "Nov", "May"]; 

const year = [...q1, ...q2, ...q3, ...q4]; 
console.log("Bulan", year)

// opsi 2 
const numbers = [23,55,21,87,56]; 
let maxValue = Math.max(...numbers); 

document.getElementById("demo6").innerHTML = year;

// Modules
import {p1, p2} from './person.js'
console.log("Person 1", p1)
console.log("Person 2", p2)

const { phone } = p1
console.log("Phone from Person 1", phone)