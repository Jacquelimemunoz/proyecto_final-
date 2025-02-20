let users = [];

function saveFormData() {
    const user = {
        firstName: document.querySelector('input[placeholder="Enter your firts name"]').value,
        lastName: document.querySelector('input[placeholder="Enter your last name"]').value,
        birthDate: document.querySelector('input[type="date"]').value,
        gender: document.querySelector('input[placeholder="Enter your gender"]').value,
        maritalStatus: document.querySelector('input[placeholder="Enter your marital status"]').value,
        email: document.querySelector('input[placeholder="Enter your email"]').value,
        phone: document.querySelector('input[placeholder="Enter your phone mumber"]').value
    };

    users.push(user);
    console.log(users);
}

function showUsers() {
    users.forEach(user => {
        console.log(`Usuario: ${user.firstName} ${user.lastName} - Email: ${user.email}`);
    });
}