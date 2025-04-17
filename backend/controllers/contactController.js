const emailService = require("../services/emailService");

const sendContactEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validointi
    if (!name || !email || !message) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Nimi, sähköposti ja viesti ovat pakollisia kenttiä",
        });
    }

    // Sähköpostin lähetys
    await emailService.sendContactEmail(name, email, message);

    res
      .status(200)
      .json({ success: true, message: "Viesti lähetetty onnistuneesti!" });
  } catch (error) {
    console.error("Virhe sähköpostin lähetyksessä:", error);
    res
      .status(500)
      .json({ success: false, message: "Viestin lähetys epäonnistui" });
  }
};

module.exports = {
  sendContactEmail,
};
