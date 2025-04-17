const emailService = require("../services/emailService");

let db;

const setDB = (dbInstance) => {
  db = dbInstance;
};

const getAllBookings = async (req, res) => {
  try {
    const bookings = await db
      .collection("bookings")
      .find()
      .sort({ date: 1, time: 1 })
      .toArray();
    res.json(bookings);
  } catch (error) {
    console.error("Virhe haettaessa tietoja:", error);
    res
      .status(500)
      .json({ message: "Virhe haettaessa tietoja", error: error.message });
  }
};

const getBookingsByDate = async (req, res) => {
  const { date } = req.params;
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return res
      .status(400)
      .json({ message: "Virheellinen päivämäärämuoto. Käytä YYYY-MM-DD" });
  }
  try {
    const bookings = await db
      .collection("bookings")
      .find({ date })
      .sort({ time: 1 })
      .toArray();
    res.json(bookings);
  } catch (error) {
    res.status(500).json({
      message: "Virhe haettaessa päivän varauksia",
      error: error.message,
    });
  }
};

const createBooking = async (req, res) => {
  const { customer, email, phone, date, time, service, details } = req.body;
  const requiredFields = { customer, email, phone, date, time, service }; // duration poistettu
  const missingFields = Object.entries(requiredFields)
    .filter(([_, value]) => !value)
    .map(([key]) => key);
  if (missingFields.length > 0) {
    return res
      .status(400)
      .json({ message: `Puuttuvat kentät: ${missingFields.join(", ")}` });
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !/^\d{2}:\d{2}$/.test(time)) {
    return res
      .status(400)
      .json({ message: "Virheellinen päivämäärä- tai aikamuoto" });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ message: "Virheellinen sähköpostiosoite" });
  }
  if (!/^\d+$/.test(phone)) {
    return res.status(400).json({ message: "Virheellinen puhelinnumero" });
  }

  try {
    const existingBooking = await db
      .collection("bookings")
      .findOne({ date, time });
    if (existingBooking) {
      return res.status(409).json({ message: "Valittu aika on jo varattu" });
    }

    const newBooking = {
      customer,
      email,
      phone,
      date,
      time,
      service,
      details: details || "",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection("bookings").insertOne(newBooking);
    const inserted = await db
      .collection("bookings")
      .findOne({ _id: result.insertedId });

    try {
      // Muunnetaan varausdata sähköpostia varten
      const bookingData = {
        customerName: customer,
        email: email, // Lisätty sähköposti
        phone: phone, // Lisätty puhelinnumero
        date: date,
        time: time,
        service: service,
        notes: details || "Ei lisätietoja",
      };

      await emailService.sendBookingNotification(bookingData);
      console.log("Varausilmoitus lähetetty sähköpostiin");
    } catch (emailError) {
      // Sähköpostin lähetys epäonnistui, mutta varaus on silti tallennettu
      console.error("Virhe sähköpostin lähetyksessä:", emailError);
      // Emme halua keskeyttää varausprosessia, joten jatkamme normaalisti
    }

    res.status(201).json(inserted);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Virhe lisättäessä varausta", error: error.message });
  }
};

module.exports = { setDB, getAllBookings, getBookingsByDate, createBooking };
