const products = [
    { name: "Laptop", price: 80000, inStock: true },
    { name: "Phone", price: 30000, inStock: false },
    { name: "Tablet", price: 40000, inStock: true },
    { name: "Watch", price: 15000, inStock: true },
    { name: "Earbuds", price: 8000, inStock: false }
];


{/* questions:
    Do all of these using the array:
Use filter → get only products that are in stock
Use map → from those in-stock products, get an array of just their names
Use reduce → calculate the total price of in-stock products
Use find → find the product named "Tablet"
*/ }
const avalibleProducts=products.filter((product)=>{
    return product.inStock;
});

console.log("Filtered Products: ", avalibleProducts);

const availableProductNames=avalibleProducts.map((product)=>{
    return product.name;
});

console.log("Available Product Names: ", availableProductNames);

const totalPrice=avalibleProducts.reduce((total,product)=>{
    return total+product.price;
},0);

console.log("Total Price of In-Stock Products: ", totalPrice);

const findTablet=products.find((product)=>{
    return product.name==="Tablet";
});

console.log("Found Product: ", findTablet);


const chainedAvailableProductNames=products.filter(product=>product.inStock)
.map(product=>product.name);

console.log("Chained Available Product Names: ", chainedAvailableProductNames);

const chainedTotalPrice = products
    .filter(product => product.inStock)
    .reduce((total, product) => total + product.price, 0);


console.log("Chained Total Price of In-Stock Products: ", chainedTotalPrice);


const students = [
    { name: "Arjun", marks: 85, passed: true },
    { name: "Priya", marks: 92, passed: true },
    { name: "Rahul", marks: 38, passed: false },
    { name: "Sneha", marks: 76, passed: true },
    { name: "Rohan", marks: 45, passed: false }
];

const passedNames=students.filter(student=>student.passed)
.map(student=>student.name);

console.log("Passed Students: ", passedNames);

const topper=students.find(student=>student.marks>90);

console.log("Topper: ", topper);


const cart = [
    { item: "Shirt", price: 799, qty: 2 },
    { item: "Jeans", price: 1499, qty: 1 },
    { item: "Shoes", price: 2999, qty: 1 },
    { item: "Cap", price: 399, qty: 3 }
];


const total=cart.reduce((total, product)=>{
    return total+product.price*product.qty;
},0);

console.log("Total Cart Value: ", total);