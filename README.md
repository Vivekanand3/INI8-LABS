Registration CRUD Application


This project is a simple CRUD (Create, Read, Update, Delete) application built with Node.js, Express, and MySQL for managing user registrations. It provides an API to handle user data such as name, email, date of birth, and timestamp of registration.



Features
Create a new registration
Read all registrations
Update an existing registration by ID
Delete a registration by ID


Tech Stack
Node.js (Backend)
Express.js (Web framework)
MySQL (Database)
Body-parser (Middleware to parse incoming request bodies)



Prerequisites
Before you begin, make sure you have the following installed:

Node.js (v12.x or later)
MySQL (or MariaDB)



Setup and Installation


1. Clone the Repository

git clone https://github.com/Vivekanandd3/INI8 LABS/registration-crud.git
cd registration-crud


3. Install Dependencies
Run the following command to install required dependencies:

npm install


3. Configure MySQL Database
Create a new MySQL database named assessment_db or update the database name in the db.js file accordingly.

sql

CREATE DATABASE assessment_db;
Then, create the Registration table by running the following SQL code:

sql

CREATE TABLE Registration (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    
    Name VARCHAR(100) NOT NULL,
    
    Email VARCHAR(100) NOT NULL UNIQUE,
    
    DateOfBirth DATE,
    
    CreatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    
);

4. Configure Database Connection

In the backend/db.js file, make sure the MySQL connection configuration matches your local setup:


const mysql = require('mysql2');

const db = mysql.createConnection({

    host: 'localhost',
    
    user: 'root',       // Replace with your MySQL username
    
    password: 'Viveka@123',       // Replace with your MySQL password
    
    database: 'assessment_db' // Use the database you created
    
});


db.connect((err) => {

    if (err) {
        console.error('Error connecting to the database:', err);
        
        return;
        
    }
    
    console.log('Connected to MySQL database.');
    
});

module.exports = db;


5. Start the Server

To start the application, run:


node app.js

Or, if you want live reloading with changes, use nodemon:


npx nodemon app.js

The server will be running at http://localhost:3000.

API Endpoints
1. Create a Registration
2. 
Endpoint: POST /api/registration/create

Request Body:


{

    "Name": "John Doe",
    
    "Email": "john.doe@example.com",
    
    "DateOfBirth": "1990-01-01"
    
}

Response:



Registration created successfully.

2. Read All Registrations

Endpoint: GET /api/registration/read

Response:


[

    {
    
        "ID": 1,
        
        "Name": "John Doe",
        
        "Email": "john.doe@example.com",
        
        "DateOfBirth": "1990-01-01",
        
        "CreatedAt": "2024-11-19T00:00:00.000Z"
        
    }
    
]

3. Update a Registration

Endpoint: PUT /api/registration/update/:id

Request Body:


{

    "Name": "Jane Doe",
    
    "Email": "jane.doe@example.com",
    
    "DateOfBirth": "1992-02-02"
    
}
Response:


Registration updated successfully.

4. Delete a Registration

Endpoint: DELETE /api/registration/delete/:id


Response:


Registration deleted successfully.


Project Structure


The project structure looks like this:


registration-crud/
├── backend/
│   ├── db.js                 # MySQL connection
│   ├── routes/               # Folder containing API routes
│   │   └── registration.js   # CRUD operations for registration
│   ├── app.js                # Main Express app file
│   ├── package.json          # Project dependencies and scripts
└── README.md                 # Project documentation


Testing the Application
You can use Postman or any other API testing tool to test the endpoints.

Create: POST http://localhost:3000/api/registration/create


Read: GET http://localhost:3000/api/registration/read



Update: PUT http://localhost:3000/api/registration/update/:id



Delete: DELETE http://localhost:3000/api/registration/delete/:id




Example using Postman:
Create Registration:


Method: POST
URL: http://localhost:3000/api/registration/create
Body:

{

    "Name": "Alice Smith",
    
    "Email": "alice.smith@example.com",
    
    "DateOfBirth": "1995-04-25"
    
}

Get All Registrations:

Method: GET

URL: http://localhost:3000/api/registration/read

Update Registration:


Method: PUT

URL: http://localhost:3000/api/registration/update/1


Body:

{

    "Name": "Alice Johnson",
    
    "Email": "alice.johnson@example.com",
    
    "DateOfBirth": "1995-04-25"
    
}

Delete Registration:

Method: DELETE

URL: http://localhost:3000/api/registration/delete/1


