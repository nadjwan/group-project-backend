const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

// Routes
const bookingRoutes = require("./src/routes/bookingRoute");
const reviewRoutes = require("./src/routes/reviewRoute");

// Middleware to parse incoming JSON payloads
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/bookings", bookingRoutes);
app.use("/api/reviews", reviewRoutes);

// app.use("/api/products", productRoutes);
// app.use("/api/users", userRoutes);

// Start listening for client requests
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
