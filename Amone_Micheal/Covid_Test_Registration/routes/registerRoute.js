const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const Test = require("../Models/Test");

router.get("/", (req, res) => {
  res.render("test", {
    title: "COVID19 Test Registration",
    alert: req.query.alert,
  });
});


router.post("/", async (req, res) => {
  try {
    const test = new Test(req.body);
    await test.save();

    res.redirect("?alert=success");
  } catch (err) {
    res
      .status(400)
      .render("test", { title: "COVID19 Test Registration", alert: "error" });
    console.log(err);
  }
});

module.exports = router;
