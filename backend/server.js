const express = require("express");
const cors = require("cors");
const fileupload = require("express-fileupload");
const colors = require("colors");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const app = express();

app.use(
  fileupload({
    createParentPath: true,
  })
);

// cors
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
// connect to database
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);
app.get("/", (req, res) => {
  res.status(200).json({ message: "wellcome to express" });
});

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/company", require("./routes/companyRoutes"));
app.use(express.static("uploads"));
app.use("/uploads", express.static("uploads"));

//upload img
app.post("/upload-file", async (req, res) => {
  try {
    if (!req.files) {
      res.send({
        status: "failed",
        message: "No file uploaded",
      });
    } else {
      let file = req.files.file;

      console.log(req.files);

      file.mv("./uploads/" + file.name);

      res.send({
        status: "success",
        message: "File is uploaded",
        img: `http://localhost:5000/uploads/${file.name}`,
        data: {
          name: file.name,
          mimetype: file.mimetype,
          size: file.size,
        },
      });
    }
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(PORT, () => console.log(`server started in port ${PORT}`));
