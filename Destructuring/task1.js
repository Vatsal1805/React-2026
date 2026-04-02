// const order = {
//     id: 101,
//     customer: {
//         name: "Arjun",
//         city: "Vadodara"
//     },
//     items: ["Laptop", "Mouse", "Keyboard"],
//     total: 85000,
//     status: "delivered"
// };


// {/* questions:
//     Destructure id, total, and status from order
// Destructure name and city from the nested customer object — in one line
// Destructure the first and third item from the items array
// Write a function printOrder that takes the entire order object as a parameter and destructures id, customer.name, and total directly in the function signature
// */ }


// const{id,total,status}=order;
// console.log("Order ID: ", id);
// console.log("Total: ", total);
// console.log("Status: ", status);

// const{name,city}=order.customer;
// console.log("Customer Name: ", name);
// console.log("Customer City: ", city);

// const[firstItem,,thirdItem]=order.items;
// console.log("First Item: ", firstItem);
// console.log("Third Item: ", thirdItem);

// function printOrder({id, customer: {name}, total}) {
//     console.log("Order ID: ", id);
//     console.log("Customer Name: ", name);
//     console.log("Total: ", total);
// }

// printOrder(order);

// const apiResponse = {
//     status: 200,
//     data: {
//         user: {
//             id: 42,
//             name: "Priya",
//             preferences: {
//                 theme: "dark",
//                 language: "en"
//             }
//         },
//         token: "abc123xyz"
//     }
// };

{/* questions:
    Get status and token — note that token is nested inside data
Get id, name, and theme from the deeply nested structure — in one line
Write a function loginUser that accepts apiResponse as a parameter and destructures name, token, and theme directly in the function signature. Log all three.
*/ }


// const {status,data:{token}}=apiResponse;
// console.log("Status: ", status);
// console.log("Token: ", token);

// const{user:{id,name,preferences:{theme}}}=apiResponse.data;
// console.log("User ID: ", id);
// console.log("User Name: ", name);
// console.log("Theme: ", theme);


// function LoginUser({data:{token, user:{name, preferences:{theme}}}}) {
//     console.log("User Name: ", name);
//     console.log("Token: ", token);
//     console.log("Theme11: ", theme);
// }

// LoginUser(apiResponse);



// This is our fake useState — plain JS, no imports needed
const useState = (initialValue) => {
    let value = initialValue;
    const getValue = () => value;
    const setValue = (newValue) => { value = newValue; };
    return [getValue, setValue];
};

// Your code goes here
const [count, setCount] = useState(0);
console.log("Initial Count: ", count());

setCount(5);
console.log("Updated Count: ", count());


