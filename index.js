const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 3000;

// Routes
const neighborhoodRoutes = require("./src/routes/neighborhoodRoute");
const userRoutes = require("./src/routes/userRoute");
const itemRoutes = require("./src/routes/itemRoute");
const bookingRoutes = require("./src/routes/bookingRoute");
const reviewRoutes = require("./src/routes/reviewRoute");

// Middleware to parse incoming JSON payloads
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/neighborhoods", neighborhoodRoutes);
app.use("/api/users", userRoutes);
app.use("/api/items", itemRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/reviews", reviewRoutes);

// app.use("/api/products", productRoutes);
// app.use("/api/users", userRoutes);

// Start listening for client requests
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
