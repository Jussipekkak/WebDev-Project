const nodemailer = require("nodemailer");

// Luodaan transporter vain kerran
const transporter = nodemailer.createTransport({
  host: "live.smtp.mailtrap.io",
  port: 587,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Funktio yhteydenottolomakkeen viestien lähettämiseen
async function sendContactEmail(name, email, message) {
  try {
    const info = await transporter.sendMail({
      from: `"Yhteydenottolomake" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.ADMIN_EMAIL, // Vastaanottajan sähköposti
      subject: `Uusi yhteydenotto: ${name}`,
      text: `Nimi: ${name}\nSähköposti: ${email}\nViesti: ${message}`,
      html: `
        <h2>Uusi yhteydenotto verkkosivulta</h2>
        <p><strong>Nimi:</strong> ${name}</p>
        <p><strong>Sähköposti:</strong> ${email}</p>
        <p><strong>Viesti:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
}

async function sendBookingNotification(bookingData) {
  try {
    const info = await transporter.sendMail({
      from: `"Varausjärjestelmä" <${process.env.CONTACT_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `Uusi varaus: ${bookingData.customerName || "Asiakas"}`,
      text: `
        Uusi varaus vastaanotettu!
        
        Asiakas: ${bookingData.customerName || "Ei ilmoitettu"}
        Sähköposti: ${bookingData.email || "Ei ilmoitettu"}
        Puhelin: ${bookingData.phone || "Ei ilmoitettu"}
        Päivämäärä: ${bookingData.date || "Ei ilmoitettu"}
        Aika: ${bookingData.time || "Ei ilmoitettu"}
        Tuote/Palvelu: ${bookingData.service || "Ei ilmoitettu"}
        Lisätiedot: ${bookingData.notes || "Ei lisätietoja"}
      `,
      html: `
        <h2>Uusi varaus vastaanotettu!</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Asiakas:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${
              bookingData.customerName || "Ei ilmoitettu"
            }</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Sähköposti:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${
              bookingData.email || "Ei ilmoitettu"
            }</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Puhelin:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${
              bookingData.phone || "Ei ilmoitettu"
            }</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Päivämäärä:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${
              bookingData.date || "Ei ilmoitettu"
            }</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Aika:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${
              bookingData.time || "Ei ilmoitettu"
            }</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Tuote/Palvelu:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${
              bookingData.service || "Ei ilmoitettu"
            }</td>
          </tr>
          <tr>
            <td style="padding: 8px; border: 1px solid #ddd;"><strong>Lisätiedot:</strong></td>
            <td style="padding: 8px; border: 1px solid #ddd;">${
              bookingData.notes || "Ei lisätietoja"
            }</td>
          </tr>
        </table>
      `,
    });

    console.log("Varaustiedot lähetetty onnistuneesti!");
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Email sending error:", error);
    throw error;
  }
}

module.exports = {
  sendContactEmail,
  sendBookingNotification,
};
