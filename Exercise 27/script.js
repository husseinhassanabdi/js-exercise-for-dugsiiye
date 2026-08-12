
function fetchUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = false;
            if (success) {
                resolve({ id: 10, name: "Hussein" });
            } else {
                reject("Failed to fetch user data");
            }
        }, 2000);
    });
}

fetchUserData()
    .then(data => console.log("success:", data))
    .catch(err => console.log("Error:", err));

