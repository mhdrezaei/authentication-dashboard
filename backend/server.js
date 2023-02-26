const express = require("express");
const dotenv = require("dotenv");
const PORT = process.env.PORT || 8000;

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "wellcome to express" });
});

app.listen(PORT, () => console.log(`server started in port ${PORT}`));
