# Project phase 2 - Basic structure and main functionalities

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
| 18.4.       | 2h     | Dokumentointia |



## 1. Environment

Minulla oli tarkoitus ja kova halu toteuttaa sivusto google Cloudissa, mutta kohtasin niin paljon ongelmia, että en kerennyt kaikkia vielä ratkomaan. Sovellus toimii siis nyt vain paikallisella koneella. Yritin toteuttaa sovellusta pilvessä viimeiseen asti, joten en halunnut alkaa tutkimaan toteutusta virtuaalikoneessa. Aijon kyllä vielä käyttää aikaa, ja kokeilla viimeiseen asti toteutusta pilvessä. 

## 2. Backend

Backendiksi valitsin Expressin. Se toimii kevyenä ja minulle ymmärrettävänä ratkaisuna REST API:n toteuttamiseen. Express vastaa reittien hallinnasta ja kommunikoi tietokannan kanssa.

## 3. Frontend

Frontend on toteutettu Reactilla ja rakennettu Vite:llä. Käytössä on komponenttipohjainen rakenne, jossa on mm. lomakkeita, tietolistoja ja käyttöliittymäelementtejä käyttäjän vuorovaikutukseen. 

## 4. Database

Tietokantana käytetään MongoDB:tä. MongoDB valittiin sen joustavuuden ja dokumenttipohjaisen rakenteen vuoksi, mikä sopii hyvin sovelluksen tarpeisiin. Käytössä on mongoose-kirjasto datan validointiin ja skeeman määrittelyyn. 

## 5. Basic structure and architecture

Sovelluksen arkkitehtuuri noudattaa klassista client-server-mallia:

    Frontend vastaa käyttöliittymästä ja kommunikoi backendin kanssa HTTP-pyyntöjen kautta.

    Backend toimii välikätenä frontendin ja tietokannan välillä.

    Tietokanta tallentaa käyttäjän syöttämää dataa.

Projektin kansiorakenne on selkeästi jaettu client ja server -hakemistoihin.

## 6. Functionalities

Sovelluksessa on seuraavat perustoiminnot:

    Käyttäjä voi tehdä varauksen kalenterin lomakkeen kautta.

    Tiedot tallennetaan MongoDB-tietokantaan.

    Kalenteri näyttää punaisella jo varatut päivät, ja varatulle päivälle ei voi tehdä uutta varausta.
    Kun asiakas tekee uuden varauksen, backend (nodemailer) lähettää sähköpostin ylläpitäjän sähköpostiin.

    Sivustolla on myös yhteydenottolomake, jolla asiakkaan täyttämä lomake lähetetään ylläpitäjän sähköpostiin.
    

## 7. Code quality and documentation

Koodi on pyritty pitämään selkeänä ja kommentoituna. Sovelluksen rakenne noudattaa hyviä käytäntöjä: logiikka on eroteltu omiin tiedostoihinsa, ja tiedostonimet kuvaavat sisältöä.

## 8. Testing and error handling

Perustason virheidenkäsittely on toteutettu backendissä: virheelliset pyynnöt palauttavat sopivat HTTP-statukset ja viestit. Frontendissä käyttäjälle näytetään virheilmoituksia esimerkiksi lomakkeen virheistä. 

## 9. User interface and interaction

Käyttöliittymän kehityksessä on panostettu yksinkertaisuuteen ja intuitiivisuuteen. Käyttöliittymä koostuu seuraavista elementeistä:

    Header jossa navigointpalkki. 

    Hero page.
    Toimii landing pagena. Tarjoaa linkit tärkeimpiin osioihin, eli kalenteriin ja yhteydenottolomakkeeseen. 

    Yrittäjän esittely.
    Tässä osiossa kerrotaan tarkemmin yrittäjästä. Elementti on olemassa, mutta sisältö ei vastaa vielä lopullista versioita. 

    Hinnasto. 
    Elementissä on tällä hetkellä esimerkki millainen lopullinen toteutus voisi olla. Elementtiin lisätään mahdollisesti laskuri, jolla asiakas voi arvioida palvelun lopullista hintaa. 

    Kalenteri.
    Tässä elementissä on kalenteri, joka näyttää punaisella jo varatut päivät. Klikkaamalla vapaata päivää, käyttäjä saa lomakkeen, jonka täyttämällä voi tehdä varauksen. Tehdystä varauksesta sivuston ylläpitäjä saa tiedon sähköpostiin. 

    Contact- lomake
    Lomakkeella saa yhteyden ylläpitäjään. Lähetetty lomake lähetetään ylläpitäjän sähköpostiin. Lomakkeessa tulee olla lähettäjän sähköposti ja puhelinnumero jotta yrittäjä voi palata asiaan. 

  
    
