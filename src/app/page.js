'use client';

import Link from 'next/link';

import styles from './page.module.css';
import React, { useState } from 'react';
import GridGallery from './components/GridGallery';
import Header from './components/Headers';
import MiniGallery from './components/MiniGallery';
import Video from './components/Video';
import Gallery from './components/Gallery';

export default function Home() {
  const initialPlayer = Math.floor(Math.random() * 2);
  const [player, setPlayer] = useState(initialPlayer);

  const handlePlayerChange = (newPlayer) => {
    setPlayer(newPlayer);
  };

  return (
    <div style={{ marginTop: 36 }}>
      <Header player={player} setPlayer={handlePlayerChange} />

      <main className={styles.main}>
        <section>
          <Video player={player} setPlayer={handlePlayerChange} />
          <div className='center'>
            <button style={{ margin: 0, marginRight: 8 }}>
              read marks story
            </button>
            <button style={{ margin: 0, marginLeft: 8 }}>
              read claudines story
            </button>
          </div>
        </section>

        <section style={{ marginBottom: -24 }}>
          <div className='inner'>
            <div className='largetext center'>
              <h1>om projekt</h1>
              <p>
                De er begge skadet i krig.
                <br />
                Den ene som voksen i Afghanistan, den anden som barn under
                folkemord i Rwanda. En professionel soldat og et uskyldigt barn.
              </p>
            </div>
          </div>
        </section>
        <MiniGallery claudine='01' mark='04' />
        <section style={{ marginBottom: -24, marginTop: -24 }}>
          <div className='inner'>
            <div className='largetext center'>
              <p>
                Begge har mistet ben, og begge er kommet videre. Gennem
                parasporten. Om kort tid skal de hver især repræsentere deres
                land til den største begivenhed indenfor parasporten - de
                Paralympiske Lege (PL) i Paris 2024.
              </p>
              <p>
                Nu er det kampen om medaljer, det gælder. Siden 2020 har vi
                fulgt de to stjerner. Gennem deres fortællinger har vi oplevet,
                hvor stærk en forandringskraft holdsport kan have. Potentialet
                for at løfte det enkelte menneske gennem sport er stort.
              </p>
            </div>
          </div>
        </section>
        <MiniGallery claudine='06' mark='07' />

        <section>
          <h1>
            mark og
            <br /> Claudine
          </h1>
        </section>

        <section>
          <div className='inner'>
            <div className='largetext'>
              <h5>om mark</h5>
              <h2>Uden rugby var jeg blevet monsterfed</h2>{' '}
              <p className='blue'>
                ”Uden rugby i mit liv havde jeg spillet meget computerspil og
                var blevet monsterfed. Jeg ville have kedet mig, men jeg ville
                også have haft masser af tid til at være sammen med kæresten,”
              </p>
              <p>
                {' '}
                siger Mark Peters, som bruger næsten al sin fritid på at træne
                og spille kørestolsrugby. For sporten har givet den tidligere
                professionelle soldat mere energi, glæde og selvtillid. I dag er
                hans blik kun rettet mod de Paralympiske Lege i Paris.
              </p>
              <Link href='/mark'>
                <button>Læs hele Marks historie</button>
              </Link>
            </div>
          </div>
        </section>

        <GridGallery images={['01', '02', '03', '04', '05', '07']} />

        <section>
          <img className='logoicon' src='images/icons/ball2.png' />{' '}
          <img className='logoicon' src='images/icons/ball2.png' />{' '}
          <img className='logoicon' src='images/icons/ball2.png' />
        </section>

        <section style={{ textAlign: 'right' }}>
          <div className='inner'>
            <div className='largetext'>
              <h5>om claudine</h5>
              <h2>Jeg vil være en af verdens bedste</h2>{' '}
              <p className='blue'>
                Når Claudine og hendes hold vender hjem efter en sejr i
                udlandet, går det ikke stille for sig.
              </p>
              <p>
                I åbne busser kører kvindelandsholdet hujende og syngende gennem
                hovedstadens gader, fylder godt på Instagram og bliver
                interviewet til Rwandas TV og radio. Claudine og
                kvindelandsholdet i siddende volleyball er blevet
                sportsstjerner. Og Claudine drømmer stadig om mere.
              </p>{' '}
              <Link href='/claudine'>
                <button>Læs Claudines historie her</button>
              </Link>
            </div>
          </div>
        </section>
        <Gallery images={['01', '02', '03', '04', '05', '06']} />

        {/* <section>
          <div className='largetext'>
            <p>
              Ikke kun i et udviklingsland, hvor mennesker med handicap ofte er
              at finde blandt samfundets mest udsatte og fattige, men også i et
              velfærdssamfund som Danmark.
            </p>

            <p>
              Over hele verden kan muligheden for at dyrke sport, få mennesker
              til at drømme stort – og deres liv kan tage en helt ny og positiv
              drejning- uanset køn, handicap og nationalitet.
            </p>
          </div>
        </section>
        <MiniGallery claudine='05' mark='03' />
        <section>
          <div className='largetext'>
            <p>
              Det sætter vores projekt ’To Verdener – Samme Mål’ spot på. Gennem
              holdsport har vores hovedpersoner, Claudine fra Rwanda og Mark fra
              Danmark, fået venner, livsmod og selvtillid. I dag er de på hver
              deres måde rollemodeller for os andre. Mød dem. Her på siden og
              ude i virkeligheden til de Paralympiske Lege i Paris 2024.
            </p>
          </div>
        </section>
        <section>
          <img className='logoicon' src='images/icons/ball2.png' />{' '}
          <img className='logoicon' src='images/icons/ball2.png' />{' '}
          <img className='logoicon' src='images/icons/ball2.png' />
        </section> */}
        <section>
          <div className='inner'>
            <div className='largetext box'>
              <h2>Alle har ret til at dyrke sport</h2>
              <p>
                FN’s Verdensmål og Handicapkonvention giver alle lige
                rettigheder også når det gælder muligheden for at dyrke sport.
                Virkeligheden lever dog ikke altid op til verdenssamfundets
                smukke ord om ikke at lade nogen i stikken - ’Leave Noone
                Behind’. Heller ikke, når det gælder adgangen til at dyrke
                sport. I handicapkonventionen står der, at personer med handicap
                har ret til at være med til sport og kultur. Og have mulighed
                for at have sin egen sport og kultur. Det betyder i praksis, at
                det skal være muligt for alle med et handicap at komme ind og
                deltage i både sport og kultur i det område, man bor i. Kilder:
                Handicapkonventionen, FNs Verdensmål og Institut for
                Menneskerettigheder{' '}
              </p>
            </div>
          </div>
        </section>

        <section>
          <img className='logoicon' src='images/icons/ball2.png' />{' '}
          <img className='logoicon' src='images/icons/ball2.png' />{' '}
          <img className='logoicon' src='images/icons/ball2.png' />
        </section>
        <section>
          <div className='inner'>
            <div className='largetext box right'>
              <h2>Para- hvilke lege? </h2>
              <p>
                De Paralympiske Lege er verdens største internationale
                begivenhed for atleter med handicap og finder sted umiddelbart
                efter de Olympiske Lege i samme værtsby og samme faciliteter. I
                2024 afholdes PL i Paris fra 28. august – 8. september. 23
                forskellige sportsgrene med 4400 deltagere deltager.
              </p>
            </div>
          </div>
        </section>
        <section>
          <img className='logoicon' src='images/icons/ball2.png' />{' '}
          <img className='logoicon' src='images/icons/ball2.png' />{' '}
          <img className='logoicon' src='images/icons/ball2.png' />
        </section>
        <section>
          <div className='inner'>
            <div className='largetext'>
              <h2>Om Os</h2>
              <p>
                <span className='blue'>Tine Harden</span> er en
                sportsinteresseret og prisvindende fotograf, som blandt andet
                har lavet fotobogen ’A kick out of Africa’ op til VM i Sydafrika
                i 2010.
              </p>
              <p>
                <span className='blue'>Hanne Selnæs</span> er uddannet
                journalist og kommunikerer primært om udsatte menneskers vilkår,
                muligheder og rettigheder – hjemme som ude.{' '}
              </p>
              <p>
                <i>
                  I 2021 modtog vi sammen Timbuktu Prisen som en anerkendelse af
                  vores arbejde med projektet ’To Verdener – Samme Mål’.
                  Projektet bliver til i samarbejde med: Dansk Handicap
                  Forbund,DHF{' '}
                </i>
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className='inner'>
            <div className='largetext'>
              <h2>Dansk Handicap Forbund, DHF</h2>
              <p>
                Dansk Handicap Forbund, DHF, som arbejder for at forbedre
                forholdene på handicapområdet og skabe sociale forbindelser for
                mennesker med bevægelseshandicap.{' '}
              </p>

              <p>
                DHF har 8.300 medlemmer i godt 40 lokalkredse rundt om i
                Danmark. DHF arbejder internationalt med udviklingsprojekter i
                otte lande i Asien, Afrika og Mellemamerika. Vores
                udviklingsarbejde er i høj grad drevet af frivilligt engagement
                med professionel støtte fra et internationalt sekretariat. I
                samarbejde med Parasport Danmark er vi engageret i
                internationale udviklingsprojekter, der styrker adgangen til
                parasport i Nepal, Bolivia, Vietnam og Uganda.
              </p>
            </div>
          </div>
          {/* <p>
            Parasport Danmark arbejder for at alle mennesker med handicap eller
            særlige behov skal have mulighed for at dyrke idræt. Herhjemme
            tilbyder Parasport Danmark pt. aktiviteter inden for flere end 30
            idrætsgrene. Der er muligheder for alle alders- og handicapgrupper
            og på alle niveauer. Som Danmarks National Paralympiske Komite
            sigter vi også mod at fostre eliteatleter og rollemodeller i
            verdensklasse. Det var derfor en stor sejr, da det i 2020 lykkedes
            det danske kørestolsrugby-hold at kvalificere sig til de
            Paralympiske Lege for første gang nogensinde, Ca. 500 medlemsklubber
            med knap 8000 medlemmer hører under Parasport Danmark, som er et
            specialforbund under Danmarks Idrætsforbund, DIF. I samarbejde med
            DHF er vi engageret i internationale udviklingsprojekter, der
            styrker adgangen til parasport i Nepal, Bolivia, Vietnam og Uganda.
          </p>
          <p>
            <span className='blue'>
              National Paralympic Commitee, NPC, Rwanda
            </span>{' '}
            er Parasport Danmarks pendant i Rwanda. NPC samler, promoverer og
            koordinerer idrætsklubbernes tilbud om parasport til mennesker med
            forskellige typer handicap indenfor 13 sportsgrene. Tre af dem har i
            de sidste 15 år opnået at blive repræsenteret ved de Paralympiske
            Lege. Den paralympiske komite’s vision er, at Rwanda bliver det
            førende paralympiske land i Afrika. NPC Rwanda arbejder derfor med
            at udvikle et bæredygtigt paralympisk sportssystem i Rwanda, og for
            at paraatleter får mulighed for at nå deres ambitioner på den lokale
            og internationale sportsarena. Når det gælder holdsport, er
            kvindernes siddende volleyball-hold komiteens stolthed.
            Kvindelandsholdet skal til sommer deltage til de Paralympiske Lege
            for fjerde gang.
          </p> */}
        </section>
        {/* <section>
          <h2>Hvem står bag </h2>
          <div className='largetext'>
            <p>Fotograf Tine Harden og journalist Hanne Selnæs</p>
            <p>i samarbejde med Dansk Handicap Forbund (DHF).</p>
          </div>
        </section> */}

        <footer>
          <div className='inner'>
            <div className='large'>
              <h3>
                TO VERDENER <br />
                SAMME MÅL
              </h3>
              <h5>om projekt</h5>
              <p>
                DHF har 8.300 medlemmer i godt 40 lokalkredse rundt om i
                Danmark. DHF arbejder internationalt med udviklingsprojekter i
                otte lande i Asien, Afrika og Mellemamerika
              </p>
              <br />
              <h5>sponsors</h5>
            </div>
            <div className='small'>
              {' '}
              <h5>om mark</h5>
              <h5>om claudine</h5>
            </div>
            <div className='small'>
              {' '}
              <h5>kontakt</h5>
              <p>
                photographs were taken by photographer Tine Harden and are up
                for sale
              </p>
              <p>
                contact{' '}
                <a href='mailto:tine@tineharden.dk'>tine@tineharden.dk</a>
              </p>
              <p>texts are written by journalist Hanne Selnæs</p>
              <p>contact hanne.selnaes@gmail.com</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}