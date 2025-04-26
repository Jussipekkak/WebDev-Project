const app = require("./app");
const connectDB = require("./config/mongodb");
const { setDB } = require("./controllers/bookingController");

const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, "dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
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
