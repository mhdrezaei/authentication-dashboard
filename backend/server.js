const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;
const { errorHandler } = require("./middleware/errorMiddleware");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);
app.get("/", (req, res) => {
  res.status(200).json({ message: "wellcome to express" });
});

app.use("/api/users", require("./routes/userRoutes"));

app.listen(PORT, () => console.log(`server started in port ${PORT}`));
