const express = require("express");
const authMiddleware = require("../middleware/auth");

const router = express.Router();

// Protected Route
router.get("/", authMiddleware, (req, res) => {
  res.json({ message: "Access granted to protected route", user: req.user });
});

module.exports = router;
