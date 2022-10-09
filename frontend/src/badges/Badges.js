import React from 'react'
import './Badges.css'

const imageUrl = '/static/media/'

export default function Badges() {
    return (
        <div className='badges tile'>
            <a href='/' id='main-logo-a'>
                <img id="main-logo" src={imageUrl+'logo_new.png'} alt='main logo' />
            </a>
            <a href='https://licea.perspektywy.pl/2022/rankings'>
                <img src={imageUrl+'sr22.png'} alt='silver badge'/>
            </a>
            <a className='round-badge' href='/rekrutacja'>
                <img src={imageUrl+'rekrut.png'} alt='badge'/>
            </a>
            <a className='round-badge' href='https://uonetplus.vulcan.net.pl/powiatcieszynski'>
                <img src={imageUrl+'logo_dziennik.png'} alt='badge'/>
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
                {/* <img src={erasmus} alt="Erasmus"/> */}
            </a>
        </div>
    )
}
