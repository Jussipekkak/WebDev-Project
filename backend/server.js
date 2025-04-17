const express = require("express");
const app = require("./app");
const path = require("path");
const connectDB = require("./config/mongodb");
const { setDB } = require("./controllers/bookingController");

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "../frontend/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
});

(async () => {
  try {
    const db = await connectDB();
    setDB(db);

    app.listen(PORT, () => {
      console.log(`🚀 Palvelin käynnissä portissa ${PORT}`);
    });
  } catch (err) {
    console.error("MongoDB-yhteyden muodostaminen epäonnistui:", err);
    process.exit(1);
  }
})();
