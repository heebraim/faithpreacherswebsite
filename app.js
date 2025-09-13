const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const userRoutes = require("./routes/user");
const app = express();

// Middleware setup
app.set("view engine", "ejs");
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(cors());
app.use(express.static("public"));

// Load environment variables
dotenv.config();


// Routes setup
app.use("/", userRoutes);

// Export the app module
module.exports = app;

// Server entry point
const PORT = process.env.PORT || 4001;

async function startServer() {
  try {
    // Wait for the database connection to settle
    // await connectDB();

    // Start the server once the DB connection is successful
    app.listen(PORT, () => {
      console.log(`App now listening @ PORT ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to the database:", error);
  }
}

// Start the app after DB connection
startServer();
