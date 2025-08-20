
// Simulate a database using localStorage
const usersKey = 'lottoUsers';

// Function to register a new user
function registerUser() {
    const username = document.getElementById('regUsername').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const dob = document.getElementById('dob').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        document.getElementById('registerMessage').textContent = 'Passwords do not match.';
        return false;
        
    }



          
    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem(usersKey)) || [];

    // Check if the username already exists
    if (users.some(user => user.username === username)) {
        document.getElementById('registerMessage').textContent = 'Username already exists.';
        return false;
    }


    // Add the new user
    users.push({ username, password, dob });
    localStorage.setItem(usersKey, JSON.stringify(users));

    document.getElementById('registerMessage').textContent = 'Registration successful! Redirecting to login...';
    setTimeout(() => {
        window.location.href = 'login.html'; // Redirect to login page
    }, 2000); // Redirect after 2 seconds

    return false; // Prevent form submission
}

// Function to validate login
function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Get existing users from localStorage
    const users = JSON.parse(localStorage.getItem(usersKey)) || [];

    // Check if the username and password match
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
        document.getElementById('loginMessage').textContent = 'Login successful! Redirecting...';
        setTimeout(() => {
            window.location.href = 'games.html'; // Redirect to Buy tickets page
        }, 2000); // Redirect after 2 seconds
    } else {
        document.getElementById('loginMessage').textContent = 'Invalid username or password.';
    }

    return false; // Prevent form submission
}
function generateQuickPick() {
    const inputs = document.querySelectorAll('#ticket input');
    const numbers = generateRandomNumbers();
    inputs.forEach((input, index) => {
        input.value = numbers[index];
    });
}

function submitTicket() {
    const inputs = document.querySelectorAll('#ticket input');
    const numbers = Array.from(inputs).map(input => input.value);
    if (new Set(numbers).size !== 6 || numbers.some(num => num < 1 || num > 49)) {
        document.getElementById('message').textContent = 'Please enter 6 unique numbers between 1 and 49.';
    } else {
        document.getElementById('message').textContent = 'Ticket submitted successfully!';
    }
}

function generateRandomNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
        const num = Math.floor(Math.random() * 49) + 1;
        if (!numbers.includes(num)) numbers.push(num);
    }
    return numbers.sort((a, b) => a - b);
}