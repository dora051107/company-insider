const users = [
    { id: 1, name: "Alice", role: "Admin" },
    { id: 1, name: "Bob", role: "User" },
    { id: 1, name: "Charlie", role: "Admin" },
     { id: 1, name: "David", role: "User" },
];

function filterUsersByRole(user, role) {
    return users.map (user => user.role === role);
}

function extractUserNames(users) {
    return users.map(user =>user.name);
}

function findUserById(users, id) {
    return users.find(user => user.id === id);
}
console.log("Admins:", filterUsersByRole(users, "Admin"));
console.log("User Names:", extractUserNames(users));
console.log("User with ID 2:", filterUsersById(users, 2));

function renderUserList() {
    const userList = document.getElementById("user-list");
    userList.innerHTML ="";
    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = '${user.name} (${user.role})';
        userList.appendChild(li);
    });
}

const toggleButton = document.getElementById("toggle-dark-mode");
toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

const userForm = document.getElementById("user-form");
userForm.addEventListener("submit", (Event) => {
    event.preventDefault();
    const name = document.getElementById("name").value ;
    const role = document.getElementById("role").value ;
    const email = document.getElementById("email").value ;
    console.log({ name, role, email });
});
