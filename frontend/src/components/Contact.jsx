import React, { useState, useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  const initialFormState = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Tyhjentää ilmoituksen näytöstä tietyn ajan kuluttua
  useEffect(() => {
    if (submitStatus) {
      const timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [submitStatus]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormState);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Lähetetään lomakkeen tiedot backendille
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Virhe viestin lähettämisessä");
      }

      setSubmitStatus({
        type: "success",
        message: "Viesti lähetetty! Otamme yhteyttä pian.",
      });

      resetForm();
    } catch (error) {
      console.error("Virhe:", error);
      setSubmitStatus({
        type: "error",
        message: "Viestiä ei voitu lähettää. Yritä uudelleen.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Siirretty CSS-tyylit tyylitiedostoon
  return (
    <section id="yhteys" className="contact-section">
      <div className="contact-container">
        <h2>Ota Yhteyttä</h2>

        {submitStatus && (
          <div className={`notification ${submitStatus.type}`}>
            {submitStatus.message}
          </div>
        )}

        <div className="contact-content">
          <div className="contact-info">
            <h3>Yhteystiedot</h3>
            <div className="contact-detail">
              <span className="contact-label">Puhelin: </span>
              <span className="contact-value">+358 (0)44 123 4567</span>
            </div>
            <div className="contact-detail">
              <span className="contact-label">Sähköposti: </span>
              <span className="contact-value">minna.meikalainen@yritys.fi</span>
            </div>
            <div className="contact-detail">
              <span className="contact-label">Osoite: </span>
              <span className="contact-value">
                Yrittäjänkatu 10, 00100 Helsinki
              </span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <h3>Lähetä Viesti</h3>
            <div className="form-group">
              <label htmlFor="name">Nimi</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Nimesi"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Sähköposti</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Sähköpostiosoite"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Viesti</label>
              <textarea
                id="message"
                name="message"
                placeholder="Viestisi"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                disabled={isSubmitting}
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={isSubmitting ? "button-loading" : ""}
            >
              {isSubmitting ? "Lähetetään..." : "Lähetä Viesti"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
