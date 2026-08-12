

// Blocking code
function fetchUserDataSync() {
    const start = Date.now();
    // alert("fetching user data");

    while (Date.now() - start < 2000) {
    }

    return { name: "Hussein", age: 23 };
}

console.log("Starting to fetch user data...");

const user = fetchUserDataSync();

console.log("User data:", user);

console.log("This message appears after the user data is fetched.");


// Non-blocking code
function getUserData(callback) {
    setTimeout(() => {
        const user = { name: "Hussein", age: 23 };
        callback(user);
    }, 2000);
}

console.log("Starting to fetch user data...");

getUserData((user) => {
    console.log("User data:", user);
});

console.log("This message appears immediately!");

