{
  /*
    The Project — Dev Profile Finder
A vanilla JavaScript app that fetches a GitHub user's profile and displays it cleanly.

What It Does
User types a GitHub username
         ↓
App fetches from GitHub API
         ↓
Displays name, bio, location,
public repos, followers
         ↓
Shows error message if user
not found (404)

Requirements — What It Must Do
Core:

Input field + Search button
Fetch from https://api.github.com/users/{username}
Display — name, bio, location, public_repos, followers
Handle missing fields gracefully — bio ?? "No bio available"
Show error message if user not found — res.ok check
Show loading state while fetching — "Searching..."

Code requirements:

Split into at least 2 files — api.js and app.js
api.js — exports the fetch function
app.js — imports and uses it
Use destructuring when unpacking API data
Use ?. and ?? on every API field
Use async/await with proper try/catch
Arrow functions for all callbacks


Folder Structure Expected
dev-profile-finder/
├── index.html
├── app.js
└── api.js
    */
}

async function fetchUsername(username) {
    try{
  const res = await fetch(`https://api.github.com/users/${username}`);
  console.log("Status:", res.status); // add this
  console.log("OK:", res.ok);
  if (!res.ok) {
    throw new Error("User not found");
  }
  const data = await res.json();

  const { name, bio, location, public_repos, followers } = data;
  return {
    name: name ?? "No name available",
    bio: bio ?? "No bio available",
    location: location ?? "No location available",
    public_repos: public_repos ?? 0,
    followers: followers ?? 0,
  };
}
catch(error){
    console.error("Error fetching user:", error);
    throw error; // re-throw to let app.js handle it

}
}

export { fetchUsername };
