const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        price: "$10.99",
        image: "https://via.placeholder.com/100x150", // Placeholder image
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        price: "$12.99",
        image: "https://via.placeholder.com/100x150",
    },
    {
        title: "1984",
        author: "George Orwell",
        price: "$15.99",
        image: "https://via.placeholder.com/100x150",
    },
    {
        title: "Moby Dick",
        author: "Herman Melville",
        price: "$9.99",
        image: "https://via.placeholder.com/100x150",
    }
];

// Function to display books
function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = ''; // Clear any existing books

    books.forEach(book => {
        // Create book card element
        const bookCard = document.createElement('div');
        bookCard.classList.add('book');

        // Create book content
        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}">
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Price: ${book.price}</p>
            <button>Add to Cart</button>
        `;

        // Append the book card to the book list
        bookList.appendChild(bookCard);
    });
}

// Initialize bookstore display
document.addEventListener('DOMContentLoaded', displayBooks);