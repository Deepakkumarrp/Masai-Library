
#Admin-Login:
  email : "deepakkumarrp@gmail.com"
  password : "admin"

#User-Login:
    "email": "user@gmail.com",
    "password":"user"

# Masai-Library

Welcome to the Masai Library, a powerful solution for efficiently managing and ordering books from here.

## Features

- **Admin Privileges:** Administrators have full control over managing books within the system.
- **User Interactions:** Users can order and buy books, and access the available library.

## Login Credentials 

 ###Admin-Login:{email : "deepakkumarrp@gmail.com", password : "admin"}

 ###User-Login:{"email": "user@gmail.com", "password":"user"}

# Node.js EndPoints


### `/api/register`

- **Method:** POST
- **Description:** Endpoint for user registration.
- **Input:** JSON object containing user details such as name, email, password, isAdmin.
- **Output:** JSON response indicating the success or failure of the registration process, along with any relevant error messages.

### `/api/login`

- **Method:** POST
- **Description:** Endpoint for user authentication.
- **Input:** JSON object containing user email and password.
- **Output:** JSON response containing authentication tokens (access token and refresh token) upon successful login, along with any relevant error messages in case of failure.

### `/user/logout`

- **Method:** GET
- **Description:** Endpoint for user logout.
- **Input:** HTTP headers containing the access token.
- **Output:** JSON response confirming the logout process.

### `/api/books`

- **Method:** POST
- **Description:** Endpoint for adding new books (admin access only).
- **Input:** JSON object containing book details such as title, genre, author, and published year.
- **Output:** JSON response indicating the success or failure of the book addition process, along with any relevant error messages.

### `/api/books/:id`

- **Method:** PATCH
- **Description:** Endpoint for updating existing books (admin access only).
- **Input:** JSON object containing the updated book details.
- **Output:** JSON response confirming the successful update of the book, along with any relevant error messages.

### `/api/books/:id`

- **Method:** DELETE
- **Description:** Endpoint for deleting books (admin access only).
- **Input:** Path parameter specifying the ID of the book to be deleted.
- **Output:** JSON response confirming the successful deletion of the book, along with any relevant error messages.

### `/api/orders`

- **Method:** POST
- **Description:** Endpoint for ordering books.
- **Input:** Path parameter specifying the ID of the books to be purchased.
- **Output:** JSON response confirming the successful purchase of the book, along with any relevant error messages.

### `/api/orders`

- **Method:** GET
- **Description:** Endpoint for accessing all orders of the books by users/customer (admin access only).
- **Input:** None
- **Output:** JSON response containing a list of orders available in the database, along with any relevant error messages.

## Usage

1. **Register as a User:** Start by registering as a user to gain access to the library functionalities.
2. **Explore Available Books:** Browse through the library to discover the wide range of books available.
3. **Borrow or Buy Books:** Choose the desired book and opt to either borrow it or buy it, based on your preference and availability.
4. **Administrator Actions:** If you're an administrator, log in to access advanced features like adding, updating, or deleting books from the system.


## Technology Stack

- **Node.js:** Backend JavaScript runtime.
- **Express.js:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for data storage.
- **Mongoose:** MongoDB object modeling tool for Node.js.

Enjoy seamless book management and access with the Masai Library API today!
