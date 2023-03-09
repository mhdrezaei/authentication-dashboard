const mongoose = require("mongoose");
const Company = require("../models/companyModel");
// const ErrorHandler = require("../utils/errorHandler");

const catchAsyncErrors = require("../middleware/catchAsyncErrors");

// get All companies => api/v1/allcompanies
exports.getAllcompanies = catchAsyncErrors(async (req, res, next) => {
  const companies = await Company.find();
  res.status(200).json({
    success: true,
    data: companies,
  });
});

// search companies => api/v1/company/search
exports.searchCompany = catchAsyncErrors(async (req, res, next) => {
  console.log(req.body.keyword);
  let regex = new RegExp(req.body.keyword, "i");

  const company = await Company.find({
    $or: [{ title: regex }, { description: regex }],
  }).exec(function (err, companies) {
    // console.log(companies);
    if (!companies || companies.length === 0) {
      return res.status(404).json({
        sucsses: false,
        message: "this company not founded!!!",
      });
    }

    res.status(200).json({
      success: true,
      data: companies,
    });
  });
});
// add new company => api/v1/company/new
exports.addNewCompany = catchAsyncErrors(async (req, res, next) => {
  //   req.body.user = req.user.id;
  console.log(req.body);
  const company = await Company.create(req.body);

  res.status(200).json({
    success: true,
    message: "company created!",
    data: company,
  });
});
