const mongoose = require("mongoose");
const validator = require("validator");
const slugify = require("slugify");

const companySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Name"],
    maxLenght: [30, "The length of the Name should be less than 30 characters"],
  },
  family: {
    type: String,
    required: [true, "Please Enter Family"],
    maxLenght: [
      30,
      "The length of the Family should be less than 30 characters",
    ],
  },

  title: {
    type: String,
    required: [true, "Please Enter company title"],
    maxLenght: [
      100,
      "The length of the title should be less than 100 characters",
    ],
  },
  image: {
    type: String,
    required: [true, "Please Upload the Company Logo"],
  },
  address: {
    type: String,
    required: [true, "Please Enter company Address"],
    maxLenght: [
      200,
      "The length of the Address should be less than 200 characters",
    ],
  },
  slug: String,
  email: {
    type: String,
    validate: [validator.isEmail, "please entyer valid email address"],
  },
  phone: {
    type: Number,
    required: [true, "Please Enter Company Phone Number"],
  },
  zip: {
    type: Number,
    required: [true, "Please Enter Company Zip Code"],
  },
  city: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

companySchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  next();
});

module.exports = mongoose.model("Company", companySchema);
