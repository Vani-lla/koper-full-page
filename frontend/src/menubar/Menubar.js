import React, { Fragment } from 'react'
import './Menubar.css'

export default function Menubar() {
    return (
        <Fragment>
            <div className='menu-links tile'>
                <div id='first-grid-nav'>
                    <a title='Facebook' className='flash-text-nav' href='https://www.facebook.com/kopercieszyn'>
                        <i className='fab fa-facebook-square'></i>
                    </a>
                </div>
                <div>
                    <a title='Instagram' className='flash-text-nav' href='https://www.instagram.com/lo_koper/'>
                        <i className='fab fa-instagram'></i>
                    </a>
                </div>
                <div>
                    <a title='Youtube' className='flash-text-nav' href='https://www.youtube.com/channel/UCs-FtjKbzLeNSTj8zK87sag'>
                        <i className='fab fa-youtube'></i>
                    </a>
                </div>
                <div>
                    <a title='Kontakt' className='flash-text-nav' href='https://koper.edu.pl/index.php?pokaz=menu_kontakt'>
                        <i className='fa fa-phone-square'></i>
                    </a>
                </div>
                <div>
                    <a title='Ta ikona jeszcze nic nie robi, do zrobienia. Coś tu będzie' href='#coś' className='flash-text-nav'>
                        <i className='fa fa-heart' aria-hidden="true"></i>
                    </a>
                </div>
                <div>
                    <a title='Informatyka' className='flash-text-nav' href='https://koper.edu.pl/index.php?pokaz=menu_inne&baner=tak'>
                        <i className='fa fa-microchip' aria-hidden="true"></i>
                    </a>
                </div>
            </div>
            <div className='credits tile'>
                <div className='creator'>
                    <div>Projekt i wykonanie:</div> <b>Igoł Kowalczyk</b>
                    <div>Grafika:</div> <b className='larla'>Larła Sędek</b>
                </div>
            </div>
        </Fragment>
    )
}