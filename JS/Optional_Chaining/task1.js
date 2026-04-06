const apiResponse = {
    user: {
        name: "Arjun",
        age: 0,
        address: null,
        getPlan: null
    }
};


// Safely access apiResponse.user.address.city — should return "Unknown City" if missing
// Safely access apiResponse.user.age — should return 18 only if age is null or undefined (not if it's 0)
// Safely call apiResponse.user.getPlan() — should not crash if getPlan is null
// Safely access apiResponse.company.name — company doesn't exist at all


console.log(apiResponse?.user?.address?.city ?? "Unknown City");
console.log(apiResponse?.user?.age ?? 18);
console.log(apiResponse?.user?.getPlan?.() ?? "No plan available");
console.log(apiResponse?.company?.name ?? "Company not found");
