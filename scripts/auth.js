const users = JSON.parse(localStorage.getItem('users')) || [];

document.getElementById('registerButton').addEventListener('click', registerUser);
document.getElementById('signInButton').addEventListener('click', signIn);

function registerUser() {
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const address = document.getElementById('regAddress').value;
    const phone = document.getElementById('regPhone').value;
    const bloodGroup = document.getElementById('regBloodGroup').value;
    const familyContact = document.getElementById('regFamilyContact').value;

    if (name && email && password && address && phone && bloodGroup && familyContact) {
        users.push({ name, email, password, address, phone, bloodGroup, familyContact });
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('registerAlert').style.display = 'block';
    } else {
        document.getElementById('registrationError').style.display = 'block';
    }
}

function signIn() {
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;

    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
        window.location.href = 'dashboard.html';
    } else {
        document.getElementById('loginError').style.display = 'block';
    }
}