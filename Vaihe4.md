# Project phase 4 - The end

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

## 1. Käyttötapaukset

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



## 1. Environment

Toteutus pilvessä onnistui! Palvelu pöyrii Google Cloud palvelussa Cloud Run sovelluksella. Pilvipalvelu on yhdistetty Git repoon, josta pilvipalvelu päivittää sivustoa jokaisen uuden pushin myötä. 



## 2. Frontend

Alunperin oli tarkoitus toteuttaa ulkoasu Tailwind.css käyttäen. Keskityin kuitenkin paljon enemmän toiminnallisuuksien hiomiseen, joten en sitten vaivautunut ottamaan tailwindiä käyttöön. Ulkoasu on toteutettu inline ja erillisillä .css tiedostoilla.

(Onnistuin viimeisillä ulkoasun muokkauksilla tuhoamaan responsiivisuuden jota en enää alkanut korjaamaan.)



## 3. Basic structure and architecture

Sovellus toimii hyvin. Toki siinä on kovakoodattuja tunnuksia ja muita totaalisen kiellettyjä asioita, mutta mikäli sivuston kehitystä aijon jatkaa, niin sitten hoidan tietoturvan asianmukaiseen kuntoon. 



## 4. Testing and error handling

Testausta on tehty liian vähän kun kaikki aika meni juuri ja juuri toteutuksesta selviämiseen. 





