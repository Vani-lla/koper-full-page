import React from 'react'
import './Kontakty.css'

export default function Kontakty() {
    return (
        <div className='kontakty central'>
            <div className='kontakty-title tile'>
                <h1>Kontakty międzynarodowe</h1>
            </div>

            <div className='tile'>
                <h1 className='school-name'>Trifels-Gymnasium - Niemcy</h1>
                <img src='https://koper.edu.pl/zagranica/annw/logo.jpg' alt='Contact'/>
                <p>
                    Projekty przygotowywane są we współpracy z organizacją polsko-niemiecką PNWM z Warszawy.
                    Pomaga ona dofinansowując wymiany międzyszkolne pomiędzy Evangelisches Trifels-Gymnasium w Annweiler a II LO im. M. Kopernika w Cieszynie.
                    Przez 25 lat wymianę organizowała pani Aleksandra Żelińska. Obecnie organizatorami ze strony polskiej są pani Małgorzata Kusz i pani Ewa Cieplik.
                    <h3>Historia wymiany</h3>
                    Wymiana rozpoczęła się w 1990 roku. Doszło do niej poprzez kontakty prywatne. Inicjatywa wyszła ze strony niemieckiej. Trifels-gymnasium od dawna poszukiwało partnerskiej szkoły w Polsce. Gdy dostali adres naszej szkoły od proboszcza parafii w Annweiler oraz pana Mayera, którzy w latach osiemdziesiątych przyjeżdżali do Polski z darami, postanowili do naszego liceum napisać. To był dopiero początek. Nasza szkoła okazała wielkie zainteresowanie i dzięki temu już w czerwcu 1990 przyjechali do Cieszyna pierwsi goście. Była to grupa siedmioosobowa: trzech nauczycieli, trzech uczniów i jeden rodzic. W Cieszynie bardzo im się spodobało. Do Cieszyna przywieźli zaproszenie z Ministerstwa Oświaty Rheinlandpfalz do zamku w Halbach na sympozjum o temacie: "Budujemy wspólną Europę". W sympozjum uczestniczyła młodzież z Belgii, Francji, Niemiec i Polski. Z naszej szkoły wzięło w nim udział 17 uczniów. Po sympozjum grupa spędziła 4-5 dni w Annwieler. Od tej pory wymiana trwa nieprzerwanie do dnia obecnego dwa razy w roku.
                    W marcu Niemcy odwiedzają nas a we wrześniu my jedziemy do Annweiler. Podczas tej wieloletniej współpracy nasi uczniowie mieli już okazję zobaczyć takie miejscowości, jak: Trewir, Heidelberg, Strasburg, Stuttgart, Speier . Dla niemieckich gości stałą atrakcją jest zwiedzanie Krakowa oraz Oświęcimia. Często organizowane są kuligi. Wymiana uczniowska otwiera przed nami wspaniałe możliwości poznania nowych ludzi oraz miejsc. Sprawdzenia swoich umiejętności językowych. Przede wszystkim uczy nas ona większej tolerancji i zrozumienia dla innej kultury i innego narodu.
                </p>
                <div className='info'>
                    Trifels-Gymnasium<br />
                    Bannenbergstraße 17<br />
                    76855 Annweiler<br />
                    Deutschland<br />
                    <a href='https://www.trifelsgymnasium.de/'>www.trifelsgymnasium.de</a>
                </div>
            </div>

            <div className='tile'>
                <h1 className='school-name'>Lukio Teuvan - Finlandia</h1>
                <img src='https://koper.edu.pl/zagranica/finlandia/image.jpg' alt='Contact'/>
                <p>
                    <h3>Historia wymiany</h3>
                    Wymianę uczniów między Lukio Teuvan a II LO im. M. Kopernika zapoczątkowały kontakty nauczycieli w ramach realizacji projektu szkolnego programu Socrates Comenius1 "Woda jest życiem". Na pierwszym spotkaniu roboczym, które odbyło się w październiku 2004r.
                    Fińscy uczniowie wraz z nauczycielami przyjechali do nas w połowie kwietnia 2005r. Byli zauroczeni Cieszynem, Krakowem oraz naszymi Beskidami. Finowie byli bardzo zainteresowani stałą wymianą pomiędzy naszymi szkołami ponieważ Teuva i Cieszyn są miastami
                    Głównym organizatorem ze strony polskiej jest pani Grażyna Słowiena
                </p>
                <div className='info'>
                    Lukio Teuvan <br />
                    Sipiläntie 3<br />
                    64700 TEUVA<br />
                    Finland<br />
                    <a href='https://teuva.fi/koulut/lukio'>www.teuva.fi/koulut/lukio</a>
                </div>
            </div>

            <div className='tile'>
                <h1 className='school-name'>Lycée Saint-Michel - Francja</h1>
                <img src='https://koper.edu.pl/zagranica/francja/szkola.jpg' alt='Contact'/>
                <p>
                    <h3>Historia wymiany</h3>
                    Pierwsza wymiana z Francją została zorganizowana w marcu 2009 roku. Zrodziła się dzięki prywatnym kontaktom. Katolickie Liceum Saint-Michel w małej miejscowości Solesmes, leżącej w regionie Nord-Pas-de-Calais przyjęło propozycję współpracy z naszą szkołą.
                    Tygodniowy program pobytu we Francji obejmuje wiele turystycznych atrakcji takich jak zwiedzanie La Coupole - bazy tajnej broni Hitlera V2, wyjazd do nadmorskiego kurortu Le Touquet nad Kanałem La Manche, muzeum koronek w Caudry, muzeum twórczości Henri Matisse'a w Le Cateau, zwiedzanie historycznego miasta Cambrai oraz Paryża z wieżą Eiffla i Luwrem. Młodzież przyjmowana jest także w lokalnym ratuszu. Uczestniczy w lekcjach, poznaje szkolne środowisko. Wymiana sprzyja rozwijaniu umiejętności językowych, odkrywaniu nowych smaków kulinarnych (!), poznawaniu zabytków, obyczajów i kultury Francji.
                    Wymianę organizuje Pani Aleksandra Żołnowska
                </p>
                <div className='info'>
                    Lycée Saint Michel<br />
                    13, rue Emile Zola<br />
                    59730 Solesmes<br />
                    France<br />
                    <a href='https://www.saint-michel-solesmes.com/'>www.saint-michel-solesmes.com</a>
                </div>
            </div>
        </div>
    )
}
