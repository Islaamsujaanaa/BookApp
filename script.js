JS

// Assuming you have an HTML structure with relevant input fields and buttons
document.addEventListener('DOMContentLoaded', function () {
    // Get references to input fields
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');
    const currentReadingCheckbox = document.getElementById('current-reading');
    const addBookButton = document.getElementById('add-book-button');

    // Event listener for the "Add Book" button
    addBookButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get values from input fields
        const bookTitle = titleInput.value;
        const bookAuthor = authorInput.value;
        const numPages = parseInt(pagesInput.value);
        const isCurrentlyReading = currentReadingCheckbox.checked;

        // Validate input (you can add more validation logic)
        if (!bookTitle || !bookAuthor) {
            alert('Please fill in all required fields.');
            return;
        }

        // Create an object to represent the book
        const book = {
            title: bookTitle,
            author: bookAuthor,
            pages: numPages,
            currentlyReading: isCurrentlyReading,
        };

        // You can now use this 'book' object to perform further actions (e.g., save to a database, display details, etc.)
        console.log('New book added:', book);
    });
});







function createAccount() {
    const email = document.querySelector('.signup-form input[type="email"]').value;
    const password = document.querySelector('.signup-form input[type="password"]').value;

    // Add your account creation logic here
    alert(Account created for ${email});
}








// Assuming you have HTML elements with IDs "btnUsername", "btnPass", and "btnSignIn"
const usernameInput = document.getElementById("btnUsername");
const passwordInput = document.getElementById("btnPass");
const signInButton = document.getElementById("btnSignIn");

signInButton.addEventListener("click", () => {
    const username = usernameInput.value;
    const password = passwordInput.value;

    // Validate input (you can add more validation logic)
    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    // Perform sign-in logic (e.g., send data to server, check credentials)
    // Replace the following with your actual sign-in process
    if (username === "user@example.com" && password === "secret") {
        alert("Sign-in successful!");
        // Redirect to another page or perform other actions
    } else {
        alert("Invalid credentials. Please try again.");
    }
});









document.addEventListener('DOMContentLoaded', () => {
    const favoriteButtons = document.querySelectorAll('.favorite');
    
    favoriteButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === '❤️') {
                button.textContent = '💔';
            } else {
                button.textContent = '❤️';
            }
        });
    });
});

















<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Fairy Tale App</title>
    <link rel="manifest" href="/manifest.json"> <!-- Web Manifest -->
    <style>
        /* Your CSS styles go here */
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
        }
        .book-container {
            text-align: center;
            padding: 20px;
        }
        .book-image {
            max-width: 100%;
            height: auto;
        }
        .book-title {
            font-size: 24px;
            font-weight: bold;
        }
        .book-author {
            font-size: 18px;
        }
        .buy-button {
            background-color: pink;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <div class="book-container">
        <img src="book-cover.jpg" alt="Fairy Tale Book Cover" class="book-image">
        <div class="book-title">Fairy Tale</div>
        <div class="book-author">by Stephen King</div>
        <p>Description: A dark fantasy novel involving keys to a hidden otherworldly kingdom.</p>
        <button class="buy-button">Buy Now</button>
    </div>

    <script>
        // JavaScript code for handling interactions (if needed)
        const buyButton = document.querySelector('.buy-button');
        buyButton.addEventListener('click', () => {
            // Add logic for purchasing the book
            alert('Book purchased! Enjoy your adventure.');
        });
    </script>
</body>
</html>










document.addEventListener('DOMContentLoaded', () => {
    const paymentMethods = document.querySelectorAll('.payment-method');
    
    paymentMethods.forEach(method => {
        method.addEventListener('click', () => {
            alert(You selected ${method.id});
        });
    });
});















// Assuming you have an HTML structure with relevant input fields and buttons
document.addEventListener('DOMContentLoaded', function () {
    // Get references to input fields
    const titleInput = document.getElementById('title');
    const authorInput = document.getElementById('author');
    const pagesInput = document.getElementById('pages');
    const currentReadingCheckbox = document.getElementById('current-reading');
    const addBookButton = document.getElementById('add-book-button');

    // Event listener for the "Add Book" button
    addBookButton.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission

        // Get values from input fields
        const bookTitle = titleInput.value;
        const bookAuthor = authorInput.value;
        const numPages = parseInt(pagesInput.value);
        const isCurrentlyReading = currentReadingCheckbox.checked;

        // Validate input (you can add more validation logic)
        if (!bookTitle || !bookAuthor) {
            alert('Please fill in all required fields.');
            return;
        }

        // Create an object to represent the book
        const book = {
            title: bookTitle,
            author: bookAuthor,
            pages: numPages,
            currentlyReading: isCurrentlyReading,
        };

        // You can now use this 'book' object to perform further actions (e.g., save to a database, display details, etc.)
        console.log('New book added:', book);
    });
});










