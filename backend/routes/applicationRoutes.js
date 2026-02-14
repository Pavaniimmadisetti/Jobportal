const express = require("express");
const router = express.Router();
const db = require("../config/db");

router.post("/", (req, res) => {
  const { user_id, job_id } = req.body;
  db.query(
    "INSERT INTO applications (user_id, job_id) VALUES (?, ?)",
    [user_id, job_id],
    () => res.send("Applied successfully")
  );
});

module.exports = router;