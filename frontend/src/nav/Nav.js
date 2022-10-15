import React, { Fragment, useEffect } from 'react'
import './Nav.css'

export default function Nav() {
    useEffect(() => {
        const checkbox = document.getElementById('phone-nav');
        checkbox.addEventListener('change', (status) => {
            if (status.target.checked) {
                document.body.style.overflowY = 'hidden';
            } else {
                document.body.style.overflowY = 'auto';
            }
        })
    }, [])

    return (
        <Fragment>
            <nav className='tile'>
                <div className='phone-logo'>
                    <a href='/' >
                        <img src='/static/media/logo_new.png' alt='main logo' />
                    </a>
                </div>
                <input id='phone-nav' className='nav-check' type='checkbox' />
                <label className='phone-nav' htmlFor='phone-nav'>|||</label>
                <div className='navigation'>
                    <div className='nav-topic' id='first-nav'>
                        <label className='drop-topic-container'>
                            <input className='nav-check' type='checkbox' />
                            <div className='drop-topic'>
                                O szkole
                            </div>
                            <div className='dropdown'>
                                <a href='/historia'>Historia</a>
                                <a href='/grono'>Grono Pedagogiczne</a>
                                <a href='/pedagog'>Pedagog Szkolny</a>
                                <a href='/radarodzicuf'>Rada Rodziców</a>
                                <a href='/samorzad'>Samorząd</a>
                                <a href='/biblioteka'>Biblioteka</a>
                                <a href='/kontakty'>Kontakty</a>
                            </div>
                        </label>
                    </div>
                    <div className='nav-topic'>
                        <label className='drop-topic-container'>
                            <input className='nav-check' type='checkbox' />
                            <div className='drop-topic'>Dokumenty</div>
                            <div className='dropdown'>
                                <a href='/kalendarz'>Kalendarz roku</a>
                                <div className='sub-drop'>
                                    <div className='sub-drop-topic'>Wykaz podręczników</div>
                                    <div className='sub-dropdown'>
                                        <a href='https://koper.edu.pl/pdf/klasa1v14.doc'> Klasa I</a>
                                        <a href='https://koper.edu.pl/pdf/klasa2v14.docx'>Klasa II</a>
                                        <a href='https://koper.edu.pl/pdf/klasa3v14.docx'>Klasa III</a>
                                        <a href='https://koper.edu.pl/pdf/klasa4v14.docx'>Klasa IV</a>
                                    </div>
                                </div>
                                <a href='https://bip-v1-files.superszkolna.pl/sites/43657/wiadomosci/200390/files/statut_6_10_2021.pdf'>Statut</a>
                                <label className='sub-drop'>
                                    <input className='nav-check' type='checkbox' />
                                    <div className='sub-drop-topic'>Regulaminy</div>
                                    <div className='sub-dropdown'>
                                        <a href='https://koper.edu.pl/pdf/klasa1v14.doc'> Zakładowego funduszu socjalnego</a>
                                        <a href='https://koper.edu.pl/pdf/klasa2v14.docx'>Ceremoniał szkolny</a>
                                        <a href='https://koper.edu.pl/pdf/klasa3v14.docx'>Ewakuacji</a>
                                        <a href='https://koper.edu.pl/pdf/klasa4v14.docx'>Program wychowawczo profilaktyczny</a>
                                        <a href='https://koper.edu.pl/pdf/klasa4v14.docx'>Biblioteki szkolnej</a>
                                        <a href='https://koper.edu.pl/pdf/klasa4v14.docx'>Przyznawania stypendium</a>
                                        <a href='https://koper.edu.pl/pdf/klasa4v14.docx'>Rady Pedagogicznej</a>
                                        <a href='https://koper.edu.pl/pdf/klasa4v14.docx'>Samorzadu Uczniowskiego</a>
                                        <a href='https://koper.edu.pl/pdf/klasa4v14.docx'>Studniowki</a>
                                        <a href='https://koper.edu.pl/pdf/klasa4v14.docx'>Wycieczek szkolnych</a>
                                    </div>
                                </label>
                                <a href='/deklaracjadost'>Deklaracja dostępności</a>
                                <label className='sub-drop'>
                                    <input className='nav-check' type='checkbox' />
                                    <div className='sub-drop-topic'>Wycieczki</div>
                                    <div className='sub-dropdown'>
                                        <a href='https://koper.edu.pl/pdf/klasa1v14.doc'> Karta wycieczki</a>
                                        <a href='https://koper.edu.pl/pdf/klasa2v14.docx'>Organizacja wycieczki za granicą</a>
                                        <a href='https://koper.edu.pl/pdf/klasa3v14.docx'>Zgoda Rodziców</a>
                                        <a href='https://koper.edu.pl/pdf/klasa4v14.docx'>Regulamin wycieczki</a>
                                        <a href='https://koper.edu.pl/pdf/klasa4v14.docx'>Oświadczenie o zmianie dat</a>
                                        <a href='https://koper.edu.pl/pdf/klasa4v14.docx'>Znajomość języka obcego</a>
                                    </div>
                                </label>
                                <a href='/nauczyciel'>Dla nauczyciela</a>
                                <a href='/uczen'>Dla ucznia</a>
                            </div>
                        </label>

                    </div>
                    <div className='nav-topic'>
                        <a href='/plany' className='drop-topic'>Plany lekcji</a>
                    </div>
                    <div className='nav-topic'>
                        <a href='#zastępstwa' className='drop-topic'>Zastępstwa</a>
                    </div>
                </div>
            </nav>
        </Fragment>
    )
}