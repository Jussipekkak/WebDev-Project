import React from "react";
import { Link } from "react-scroll";
import "./Home.css";

const Home = () => {
  const sectionStyle = {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    backgroundColor: "#f4f4f4",
  };

  const buttonStyle = {
    margin: "0 10px",
    padding: "10px 20px",
    borderRadius: "5px",
    color: "white",
    textDecoration: "none",
    cursor: "pointer",
  };

  return (
    <section id="etusivu" style={sectionStyle}>
      <div className="home-content">
        <h1>Tervetuloa Yrittäjän Palveluihin</h1>
        <p>
          Tarjoamme asiantuntevia palveluita yrittäjille. Autamme sinua
          menestymään liiketoiminnassasi.
        </p>

        <div className="button-group">
          <Link
            to="kalenteri"
            smooth={true}
            duration={500}
            style={{ ...buttonStyle, backgroundColor: "#3B82F6" }}
          >
            Klikkaa tästä varauskalenteriin!
          </Link>

          <Link
            to="yrittaja"
            smooth={true}
            duration={500}
            style={{ ...buttonStyle, backgroundColor: "#10B981" }}
          >
            Lue Lisää
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
