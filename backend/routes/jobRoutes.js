const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.get("/", (req, res) => {
  db.query("SELECT * FROM jobs", (err, result) => {
    res.send(result);
  });
});

router.post("/", (req, res) => {
  const { title, description, company, location, salary } = req.body;
  db.query(
    "INSERT INTO jobs (title, description, company, location, salary) VALUES (?, ?, ?, ?, ?)",
    [title, description, company, location, salary],
    () => res.send("Job added")
  );
});

module.exports = router;