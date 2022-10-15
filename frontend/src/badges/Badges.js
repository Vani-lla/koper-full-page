import React from 'react'
import { useState, useEffect } from 'react'
import './Badges.css'

const imageUrl = '/static/media/'

export default function Badges() {
    const [mobile, setMobile] = useState(true);

    useEffect(() => {
        setMobile(false);
    }, [])
    

    if (mobile) {
        return (
            <div className='badges tile badges-active'>
                <button className='badges-mobile-btn' onClick={() => { setMobile(!mobile) }}></button>
                <a href='/' id='main-logo-a'>
                    <img id="main-logo" src={imageUrl + 'logo_new.png'} alt='main logo' />
                </a>
                <a className='silver-badge' href='https://licea.perspektywy.pl/2022/rankings'>
                    <img src={imageUrl + 'sr22.png'} alt='silver badge' />
                </a>
                <a className='round-badge' href='/rekrutacja'>
                    <img src={imageUrl + 'rekrut.png'} alt='badge' />
                </a>
                <a className='round-badge' href='https://uonetplus.vulcan.net.pl/powiatcieszynski'>
                    <img src={imageUrl + 'logo_dziennik.png'} alt='badge' />
                </a>
                <div className='phone-badges'>
                    <a className='round-badge' href='https://www.instagram.com/lo_koper/'>
                        <i className='fab fa-facebook-square'></i>
                    </a>
                    <a className='round-badge' href='https://www.instagram.com/lo_koper/'>
                        <i className='fab fa-instagram'></i>
                    </a>
                    <a className='round-badge' href='https://www.youtube.com/channel/UCs-FtjKbzLeNSTj8zK87sag'>
                        <i className='fab fa-youtube'></i>
                    </a>
                    <a className='round-badge' href='https://koper.edu.pl/index.php?pokaz=menu_kontakt'>
                        <i className='fa fa-phone-square'></i>
                    </a>
                    <a className='round-badge' href='https://koper.edu.pl/index.php?pokaz=menu_inne&baner=tak'>
                        <i className='fa fa-microchip' aria-hidden="true"></i>
                    </a>
                </div>
                <a className='round-badge' href='/erasmus'>
                    <img src={imageUrl + 'logo_erasmus.png'} alt="Erasmus"/>
                </a>
            </div>
        )
    } else {
        return (
            <div className='badges tile'>
                <button className='badges-mobile-btn' onClick={() => { setMobile(!mobile) }}></button>
                <a href='/' id='main-logo-a'>
                    <img id="main-logo" src={imageUrl + 'logo_new.png'} alt='main logo' />
                </a>
                <a className='silver-badge' href='https://licea.perspektywy.pl/2022/rankings'>
                    <img src={imageUrl + 'sr22.png'} alt='silver badge' />
                </a>
                <a className='round-badge' href='/rekrutacja'>
                    <img src={imageUrl + 'rekrut.png'} alt='badge' />
                </a>
                <a className='round-badge' href='https://uonetplus.vulcan.net.pl/powiatcieszynski'>
                    <img src={imageUrl + 'logo_dziennik.png'} alt='badge' />
                </a>
                <div className='phone-badges'>
                    <a className='round-badge' href='https://www.instagram.com/lo_koper/'>
                        <i className='fab fa-facebook-square'></i>
                    </a>
                    <a className='round-badge' href='https://www.instagram.com/lo_koper/'>
                        <i className='fab fa-instagram'></i>
                    </a>
                    <a className='round-badge' href='https://www.youtube.com/channel/UCs-FtjKbzLeNSTj8zK87sag'>
                        <i className='fab fa-youtube'></i>
                    </a>
                    <a className='round-badge' href='https://koper.edu.pl/index.php?pokaz=menu_kontakt'>
                        <i className='fa fa-phone-square'></i>
                    </a>
                    <a className='round-badge' href='https://koper.edu.pl/index.php?pokaz=menu_inne&baner=tak'>
                        <i className='fa fa-microchip' aria-hidden="true"></i>
                    </a>
                </div>
                <a className='round-badge' href='/erasmus'>
                    <img src={imageUrl + 'logo_erasmus.png'} alt="Erasmus"/>
                </a>
            </div>
        )
    }
}
