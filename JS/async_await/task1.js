// // Write fetchUser that hits https://jsonplaceholder.typicode.com/users/1 and logs name, email, and address.city.


// async function fetchUser(){
//     try{
//         const res=await fetch('https://jsonplaceholder.typicode.com/users/1');
//         const data=await res.json();
//         console.log(`Name: ${data.name}, Email: ${data.email}, City: ${data.address.city}`);
//     }
//     catch(error){
//         console.error('Error fetching user:', error);                                   
//     }
// }

// fetchUser();


// The Scenario
// You're building a blog app. You need to fetch a post and its comments separately, then display them together.

// The Task
// Step 1 — Write fetchPost() that:

// Fetches from https://jsonplaceholder.typicode.com/posts/1
// Logs the post's title and body

// Step 2 — Write fetchComments() that:

// Fetches from https://jsonplaceholder.typicode.com/posts/1/comments
// Logs the name and email of every comment
// Hint — this returns an array

// Step 3 — Write fetchPostWithComments() that:

// Calls both functions
// Must be async
// Must handle errors


// Rules

// No copy pasting from previous code — write fresh
// Both fetchPost and fetchComments must be separate functions
// fetchPostWithComments must call both — not rewrite them
// All three functions must handle errors properly


async function fetchPost() {
    try{
        const res=await fetch('https://jsonplaceholder.typicode.com/posts/1');
        const data=await res.json();
        console.log(`Title: ${data.title}, Body: ${data.body}`);
    }
    catch(error){
        console.error('Error fetching post:', error);
    }
}

async function fetchComments() {
    try{
        const res=await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
        const data=await res.json();
        data.forEach(element => {
            console.log(`Name: ${element.name}, Email: ${element.email}`);
        });
    }
    catch(error){
        console.error('Error fetching comments:', error);
    }
}

async function fetchPostWithComments() {
    try{
        await fetchPost();
        await fetchComments();
    }
    catch(error){
        console.error('Error fetching post with comments:', error);
    }   

}

fetchPostWithComments();