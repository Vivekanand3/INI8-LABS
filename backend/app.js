const express = require('express');
const bodyParser = require('body-parser');
const registrationRoutes = require('./backend/routes/registration');

const app = express();
app.use(bodyParser.json());

// Use the registration routes
app.use('/api/registration', registrationRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
