import React, { useState, useEffect } from "react";
import "./Calendar.css";

const BookingSystem = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    customer: "",
    email: "",
    phone: "",
    time: "", // Muutetaan pudotusvalikoksi
    details: "",
    service: "",
  });
  const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const timeOptions = generateTimeOptions();

  function generateTimeOptions() {
    const options = [];
    for (let hour = 9; hour <= 20; hour++) {
      options.push(`${hour.toString().padStart(2, "0")}:00`);
      if (hour < 20) {
        options.push(`${hour.toString().padStart(2, "0")}:30`);
      }
    }
    return options;
  }

  // Hae varaukset
  useEffect(() => {
    const fetchBookings = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/bookings");
        if (!response.ok) throw new Error(`HTTP error: ${response.status}`);
        const data = await response.json();
        setBookings(data);
      } catch (err) {
        console.error("Error fetching bookings:", err);
        setError(`Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, [submitStatus]);

  // Käsittele lomakkeen muutokset
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Lähetä varaus
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ type: "loading", message: "Tallennetaan varausta..." });

    try {
      const bookingData = {
        ...formData,
        date: selectedDate,
        // duration poistettu lähetyksestä
      };

      const response = await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Varauksen tallennus epäonnistui");
      }

      setSubmitStatus({ type: "success", message: "Varaus tallennettu!" });
      setTimeout(() => {
        setSelectedDate(null);
        setSubmitStatus({ type: "", message: "" });
      }, 2000);
    } catch (err) {
      setSubmitStatus({ type: "error", message: err.message });
    }
  };

  // Vaihda kuukautta
  const changeMonth = (increment) => {
    setCurrentMonth(
      new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + increment,
        1
      )
    );
  };

  // Renderöi kalenteri
  const renderCalendar = () => {
    const firstDay = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    );
    const lastDay = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    );
    const startDayOfWeek = (firstDay.getDay() + 6) % 7;
    const emptyStartDays = Array(startDayOfWeek).fill(null);
    const emptyEndDays = Array(6 - (lastDay.getDay() % 7)).fill(null);

    return (
      <>
        {emptyStartDays.map((_, i) => (
          <div key={`s-${i}`} className="empty-day" />
        ))}
        {Array.from({ length: lastDay.getDate() }, (_, i) => {
          const day = i + 1;
          const dateStr = `${currentMonth.getFullYear()}-${(
            currentMonth.getMonth() + 1
          )
            .toString()
            .padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
          const isBooked = bookings.some((b) => b.date === dateStr);

          return (
            <div
              key={day}
              className={`day ${isBooked ? "booked" : "available"}`}
              onClick={() => !isBooked && setSelectedDate(dateStr)}
            >
              {day}
              {isBooked && <div className="booked-badge" />}
            </div>
          );
        })}
        {emptyEndDays.map((_, i) => (
          <div key={`e-${i}`} className="empty-day" />
        ))}
      </>
    );
  };

  // Kuukausien nimet
  const monthNames = [
    "Tammikuu",
    "Helmikuu",
    "Maaliskuu",
    "Huhtikuu",
    "Toukokuu",
    "Kesäkuu",
    "Heinäkuu",
    "Elokuu",
    "Syyskuu",
    "Lokakuu",
    "Marraskuu",
    "Joulukuu",
  ];

  if (loading && !selectedDate)
    return <div className="loading">Ladataan...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="kalenteri">
      {selectedDate ? (
        <div className="booking-form-container">
          <div className="form-header">
            <h2>Uusi varaus</h2>
            <p className="selected-date">
              {new Date(selectedDate).toLocaleDateString("fi-FI", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {submitStatus.message && (
            <div className={`status-message ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nimi</label>
              <input
                type="text"
                name="customer"
                value={formData.customer}
                onChange={handleInputChange}
                placeholder="Etunimi Sukunimi"
                required
              />
            </div>

            <div className="form-group">
              <label>Sähköposti</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="sähköposti@osoite.fi"
                required
              />
            </div>

            <div className="form-group">
              <label>Puhelinnumero</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="040 123 4567"
                required
              />
            </div>

            <div className="form-group">
              <label>Alkamisaika</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                required
              >
                <option value="">Valitse aika</option>
                {timeOptions.map((time) => (
                  <option key={time} value={time}>
                    {time}
                  </option>
                ))}
              </select>
            </div>

            {/* Arvioitu kesto -kenttä poistettu */}

            <div className="form-group">
              <label>Palvelu</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
              >
                <option value="">Valitse palvelu</option>
                <option value="Viikkosiivous">Viikkosiivous</option>
                <option value="Ikkunanpesu">Ikkunanpesu</option>
                <option value="Muuttosiivous">Muuttosiivous</option>
                <option value="Muu">Muu</option>
              </select>
            </div>

            <div className="form-group">
              <label>Lisätiedot</label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleInputChange}
                placeholder="Lisätietoja"
                rows="3"
              />
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="secondary"
                onClick={() => setSelectedDate(null)}
              >
                Peruuta
              </button>
              <button type="submit" className="primary">
                Varaa
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div className="calendar-container">
          <div className="calendar-header">
            <button onClick={() => changeMonth(-1)} className="nav-button">
              &lt;
            </button>
            <h2>
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h2>
            <button onClick={() => changeMonth(1)} className="nav-button">
              &gt;
            </button>
          </div>

          <div className="weekdays">
            {["Ma", "Ti", "Ke", "To", "Pe", "La", "Su"].map((day) => (
              <div key={day} className="weekday">
                {day}
              </div>
            ))}
          </div>

          <div className="calendar-grid">{renderCalendar()}</div>
        </div>
      )}
    </div>
  );
};

export default BookingSystem;
