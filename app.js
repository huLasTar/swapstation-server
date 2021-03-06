require("dotenv/config");
require("./db");
const express = require("express");

const { isAuthenticated } = require("./middleware/jwt.middleware");

const app = express();

require("./config")(app);

// 👇 Start handling routes here
const allRoutes = require("./routes");
app.use("/api", allRoutes);

const productRouter = require("./routes/product.routes");
app.use("/api", productRouter);

const exchangeRouter = require("./routes/exchange.routes");
app.use("/api", isAuthenticated, exchangeRouter);

const reportRouter = require("./routes/report.routes");
app.use("/api", isAuthenticated, reportRouter);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

require("./error-handling")(app);

module.exports = app;
