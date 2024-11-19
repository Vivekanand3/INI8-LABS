const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',       // Replace with your MySQL username
    password: 'Vivek@123',       // Replace with your MySQL password
    database: 'assessment_db'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

module.exports = db;
