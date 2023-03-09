const express = require("express");
const {
  addNewCompany,
  getAllcompanies,
  searchCompany,
} = require("../controllers/companyControllers");
const router = express.Router();

router.route("/new").post(addNewCompany);
router.route("/search").post(searchCompany);
router.route("/allcompanies").get(getAllcompanies);

module.exports = router;
