const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send("<h1>Hello Add Product!</h1>");
});

module.exports = router;