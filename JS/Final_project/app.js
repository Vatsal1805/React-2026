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

What To Fix — Only app.js
Rewrite it using these exact steps:
Step 1 — Grab all 5 elements at the top:
jsconst searchBtn     = document.getElementById("search-btn");
const usernameInput = document.getElementById("username-input");
const loadingMsg    = document.getElementById("loading-msg");
const errorMsg      = document.getElementById("error-msg");
const profileCard   = document.getElementById("profile-card");
Step 2 — Write a resetUI arrow function that hides all three:
jsconst resetUI = () => {
    loadingMsg.style.display = "none";
    errorMsg.style.display   = "none";
    profileCard.style.display = "none";
    errorMsg.textContent     = "";
};
Step 3 — In the click handler:
empty input  → resetUI() → show errorMsg
fetching     → resetUI() → show loadingMsg
success      → resetUI() → populate fields → show profileCard
error        → resetUI() → show errorMsg with error.message
Step 4 — Populate fields using the individual IDs:
jsdocument.getElementById("name").textContent      = profile.name;
document.getElementById("bio").textContent       = profile.bio;
document.getElementById("location").textContent  = profile.location;
document.getElementById("repos").textContent     = `Public Repos: ${profile.public_repos}`;
document.getElementById("followers").textContent = `Followers: ${profile.followers}`;


    */
}

import { fetchUsername } from "./api.js";

const searchBtn = document.getElementById("search-btn");
const usernameInput = document.getElementById("username-input");
const loadingMsg = document.getElementById("loading-msg");
const errorMsg = document.getElementById("error-msg");
const profileCard = document.getElementById("profile-card");

const resetUI = () => {
  loadingMsg.style.display = "none";
  errorMsg.style.display = "none";
  profileCard.style.display = "none";
  errorMsg.textContent = "";
};

searchBtn.addEventListener("click", async () => {
  const username = usernameInput.value.trim();
  if (!username) {
    resetUI();
    errorMsg.textContent = "Please enter a username.";
    errorMsg.style.display = "block";
    return;
  }
  resetUI();
  loadingMsg.style.display = "block";
  try {
    const profile = await fetchUsername(username);
    resetUI();
    document.getElementById("name").textContent = profile?.name;
    document.getElementById("bio").textContent = profile?.bio;
    document.getElementById("location").textContent = profile?.location;
    document.getElementById("repos").textContent =
      `Public Repos: ${profile?.public_repos}`;
    document.getElementById("followers").textContent =
      `Followers: ${profile?.followers}`;
    profileCard.style.display = "block";
  } catch (error) {
    resetUI();
    errorMsg.textContent = error.message;
    errorMsg.style.display = "block";
  }
});
