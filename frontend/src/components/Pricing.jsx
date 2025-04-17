import React from "react";
import "./Pricing.css";

const Pricing = () => {
  const sectionStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
    padding: "20px",
  };

  const pricingPlans = [
    {
      title: "Peruspalvelu",
      price: "150€",
      features: [
        "Tunnin konsultaatio",
        "Perustason yritysanalyysi",
        "Sähköpostituki",
      ],
    },
    {
      title: "Laaja Konsultointi",
      price: "350€",
      features: [
        "3h strategiatyöpaja",
        "Yksityiskohtainen liiketoiminta-analyysi",
        "Jatkuva tuki 1kk",
        "Kehityssuunnitelma",
      ],
    },
    {
      title: "Premium-palvelu",
      price: "750€",
      features: [
        "1 päivän intensiivikonsultointi",
        "Kattava liiketoiminnan arviointi",
        "Räätälöity kehityssuunnitelma",
        "Jatkuva kuukausituki",
        "Verkostoitumisapu",
      ],
    },
  ];

  return (
    <section id="hinnasto" style={sectionStyle}>
      <div className="pricing-container">
        <h2>Hinnasto</h2>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="pricing-card">
              <h3>{plan.title}</h3>
              <div className="price">{plan.price}</div>

              <ul>
                {plan.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>

              <button>Valitse Paketti</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
