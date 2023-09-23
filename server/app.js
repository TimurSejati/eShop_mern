const express = require("express");
const ErrorHandler = require("./middleware/error");
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(express.json());
app.use(cookieParser());
app.use("/test", (req, res) => {
  res.send("Hello world!");
});
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use("/", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: true }));

// configa
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "server/config/.env" });
}

// import routes
const user = require("./controller/user");
const shop = require("./controller/shop");

app.use("/api/v2/user", user);
app.use("/api/v2/shop", shop);

// it's for ErrorHandler
app.use(ErrorHandler);

module.exports = app;
