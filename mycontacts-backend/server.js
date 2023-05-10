const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // Using middleware as a body parser to get the data from client
// Define the routes group
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use(errorHandler); // for Error Handling

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
