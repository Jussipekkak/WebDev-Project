# Phase 4 – Project Presentation

## Tuntikirjaus

| Päivämäärä | Tunnit | Selitys |
|-------------|--------|---------|
| 19.3.       | 4h     | Nauhoite + suunnitelma |
| 20.3.       | 2h     | UI mock design |
| 28.3.       | 4h     | UI design, käyttäjäprofiilit |
| 30.3.       | 4h     | Nauhoite + suunnitelma |
| 1.4.        | 6h     | MongoDBn yhdistäminen |
| 10.4.       | 6h     | Kalenterin ja sähköpostipalvelimen kehitys |
| 16.4.       | 4h     | Kalenterin ja sähköpostipalvelimen käyttöönotto |
| 17.4.       | 8h     | Pilvijulkaisun toteutusta |
| 25.4.       | 3h     | Pilvipalvelun toteutus jatkuu  |
| 26.4.       | 4h     | Ulkoasun päivitystä |
| 27.4.       | 6h     | Pilvitoteutuksen viimeistely |
|             | =      |         |
|             | 51h    |         |





##  Project title

**Booking System Web Application with React, Express, and MongoDB**

---

##  Project overview

Tämän projektin tarkoituksena on tarjota siivousyrityksen asiakkaille mahdollisuus tehdä varauksia helposti verkkosovelluksen kautta. Kohderyhmänä ovat henkilöt, jotka tarvitsevat helppokäyttöistä varausjärjestelmää ja yhteydenottolomaketta.  
Frontend on toteutettu Reactilla ja backend Expressillä, ja tietokanta on MongoDB Atlas -pilvipalvelussa. Sovellus julkaistiin Google Cloudin avulla.

---

##  Käyttötapaukset

| Use Case | Implemented (Yes/No) | Demonstration / Notes |
|----------|----------------------|------------------------|
| Käyttäjä voi tehdä varauksen kalenterista lomakkeella | Yes | Lomake tallentaa varaukset MongoDB:hen. |
| Yhteydenottolomake, jolla voi lähettää viestin | Yes | Lomakkeen data vastaanotetaan ja käsitellään backendissä. |
| Näkymä varauksista ja viesteistä | No | Ei priorisoitu ensimmäiseen versioon, mahdollista jatkokehitystä varten. |


Määritin alussa projektille mahdollisia käyttötapauksia. Käyn tässä läpi miten kunkin käyttäjän toiveisiin on vastattu. 
Tarkemmin tapauksista voi lukea täältä [Käyttötapaukset](https://github.com/Jussipekkak/WebDev-Project/blob/main/README.md)

Käyttäjä 1. Eläkkeellä oleva Aino – Viikkosiivouksen tarvitsija

Tärkeää sivustolla:

    Suuret painikkeet
    Selkeä “soita meille” -toiminto
    Kuva ja esittely yrittäjästä → luottamus
    Mahdollisuus varata myös puhelimitse

Nämä toteutui ihan hyvin

Käyttäjä 2. Muuttava Matti – Tarvitsee muuttosiivouksen

Tärkeää sivustolla:

    Selkeä muuttosiivous-osio
    Hinnasto heti nähtävissä
    Vapaiden aikojen kalenteri
    Helppo ja nopea varaus

Selkeää muuttosiivous osiota ei ole. Hinnasto löytyy ja varauskalenteri toimii. 

Käyttäjä 3. Perheellinen Petra – Ikkunanpesun tilaaja

Tärkeää sivustolla:

    Kuvia tehdyistä töistä
    Arvosteluja tai suositteluja
    Selkeä lista eri siivouspalveluista (ikkunanpesu erikseen)
    Helppo yhteydenottolomake
    Yrittäjän esittely luo luottamusta

Sivustolta ei tällä hetkellä löydy asiakaspalautteita. Muut kohdat täyttyvät.

---

##  Technical implementation

- **Frontend:** React + Vite, lomakkeet ja reaktiivinen käyttöliittymä.
- **Backend:** Express.js, REST API -pohjaiset reititykset varauksille ja yhteydenotoille.
- **Tietokanta:** MongoDB Atlas (pilvipohjainen).
- **Deployment:** Google Cloud (Dockerfile pohjainen julkaisu).
- **Muita kirjastoja:**
  - CORS ja Body-Parser backendissä
  - Axios frontendissa tiedon lähettämiseen

Arkkitehtuuri on jaettu frontend- ja backend-kansioihin. Buildattu frontend palvellaan Expressin kautta staattisena sisältönä.

---

##  Development process

Aloitin määrittelemällä projektin vaatimukset ja use caset. Ensimmäisenä rakensin toimivan frontendin lomakkeineen.  
Backendissä loin REST-API-reitit ja MongoDB-yhteyden. Lopullinen julkaisu aiheutti haasteita erityisesti Docker-konfiguroinnin ja environment-muuttujien asettamisen kanssa, mutta ongelmat ratkaistiin onnistuneesti.  
Projektin aikana opin erityisesti julkaisuun liittyvistä vaatimuksista ja muuttujien käsittelystä lopullisessa julkaisussa.

---

##  Reflection and future work

**Mikä toimi hyvin:**  
- Toteutus pilvessä onnistui! Palvelu pöyrii Google Cloud palvelussa Cloud Run sovelluksella. Pilvipalvelu on yhdistetty Git repoon, josta pilvipalvelu         päivittää sivustoa jokaisen uuden pushin myötä. 
- Frontendin ja backendin yhteensovittaminen sujui hyvin.  
- Julkaisu onnistui lopulta ilman suuria lisämuutoksia.
- Ulkoasu on hieno
- Projekti on jaettu moduuleihin, joten hallinta on helppoa

**Haasteet:**  
- Dockerfilen rakentaminen niin, että sekä frontend että backend toimivat samassa kontissa.
- MongoDB Atlas SSL-yhteyshaasteet Googlen ympäristössä.

**Tulevaisuuden parannuksia:**  
- Admin-näkymä varauksien ja yhteydenottojen hallintaan.   
- Käyttäjätunnistautuminen ja kirjautuminen.
- Tietoturvan parantaminen

---


---

##  Presentation link

[Youtube](https://youtu.be/seZ6TOnDG1o)







