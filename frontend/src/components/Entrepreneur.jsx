import React from "react";
import "./Entrepreneur.css";

const Entrepreneur = () => {
  const sectionStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: "20px",
  };

  const imageStyle = {
    maxWidth: "100%",
    borderRadius: "10px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  };

  return (
    <section id="yrittaja" style={sectionStyle}>
      <div className="entrepreneur-container">
        <div className="entrepreneur-image">
          <img
            src="/api/placeholder/500/500"
            alt="Yrittäjä"
            style={imageStyle}
          />
        </div>

        <div className="entrepreneur-content">
          <h2>Minna Meikäläinen</h2>
          <h3>Yrittäjä & Konsultti</h3>

          <p>
            Olen kokenut yrittäjä yli 10 vuoden kokemuksella. Autan yrityksiä
            kasvamaan ja kehittymään strategisesti.
          </p>

          <ul>
            <li>✓ Yli 10 vuoden yrittäjäkokemus</li>
            <li>✓ Strateginen liiketoiminnan kehittäminen</li>
            <li>✓ Yksilöllinen konsultointi</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Entrepreneur;
