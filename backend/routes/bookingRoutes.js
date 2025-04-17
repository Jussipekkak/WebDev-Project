const express = require("express");
const {
  getAllBookings,
  getBookingsByDate,
  createBooking,
} = require("../controllers/bookingController");

const router = express.Router();

router.get("/", getAllBookings);
router.get("/:date", getBookingsByDate);
router.post("/", createBooking);

module.exports = router;
