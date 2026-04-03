const userProfile = {
    name: "Arjun",
    age: 22,
    address: {
        city: "Mumbai",
        state: "Maharashtra"
    },
    skills: ["HTML", "CSS", "JavaScript"]
};

// Create updatedProfile — same as userProfile but with age changed to 23
// Create relocatedProfile — same as userProfile but with city changed to "Vadodara" and state to "Gujarat" — nested update
// Create skillsAdded — same as userProfile but with "React" added to the end of skills array
// Write a function printDetails(name, age, ...extras) that logs name, age, and then logs each item in extras separately using forEach

// Call it with: printDetails("Arjun", 22, "Vadodara", "React", "Fresher")


const updatedProfile={...userProfile,age:23};
console.log("Updated Profile: ", updatedProfile);

const relocateProfile={...userProfile,address:{...userProfile.address,city:"Vadodara",state:"Gujarat"}};
console.log("Relocated Profile: ", relocateProfile);

const skillsAdded={...userProfile,skills:[...userProfile.skills,"React"]};
console.log("Skills Added: ", skillsAdded);

function printDetails(name, age, ...extras) {
    console.log("Name: ", name);
    console.log("Age: ", age);
    extras.forEach(extra => console.log("Extra: ", extra));
}
printDetails("Arjun", 22, "Vadodara", "React", "Fresher");