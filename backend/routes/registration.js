const express = require('express');
const router = express.Router();
const db = require('../db');

// Create a new registration
router.post('/create', (req, res) => {
    const { Name, Email, DateOfBirth } = req.body;
    const query = `INSERT INTO Registration (Name, Email, DateOfBirth) VALUES (?, ?, ?)`;

    db.query(query, [Name, Email, DateOfBirth], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error creating registration.');
        }
        res.status(201).send('Registration created successfully.');
    });
});

// Read all registrations
router.get('/read', (req, res) => {
    const query = `SELECT * FROM Registration`;

    db.query(query, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading registrations.');
        }
        res.json(results);
    });
});

// Update a registration by ID
router.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const { Name, Email, DateOfBirth } = req.body;
    const query = `UPDATE Registration SET Name = ?, Email = ?, DateOfBirth = ? WHERE ID = ?`;

    db.query(query, [Name, Email, DateOfBirth, id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error updating registration.');
        }
        res.send('Registration updated successfully.');
    });
});

// Delete a registration by ID
router.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM Registration WHERE ID = ?`;

    db.query(query, [id], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error deleting registration.');
        }
        res.send('Registration deleted successfully.');
    });
});

module.exports = router;
