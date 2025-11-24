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

