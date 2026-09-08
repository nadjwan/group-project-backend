const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

// Middleware to parse incoming JSON payloads
app.use(express.json());
app.use(cors());

// app.use("/api/products", productRoutes);
// app.use("/api/users", userRoutes);

// Start listening for client requests
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
