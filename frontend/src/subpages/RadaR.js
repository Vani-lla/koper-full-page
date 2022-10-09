import React from 'react'
import './RadaR.css'

export default function RadaR() {
    return (
        <div className='radar tile central'>
            <h1>Rada Rodziców</h1>
            <div className='rada-bank'>
                <div>Numer Konta</div>
                <div className='i'>26 8113 0007 2001 0051 3597 0001</div>

                <div>Nazwa Banku</div>
                <div className='i'>Bank Spółdzielczy Cieszyn</div>

                <div>Adres Banku</div>
                <div className='i'>ul. Kochanowskiego 4 43-400 Cieszyn</div>
            </div>
            <div><a href='https://koper.edu.pl/pdf/rada_ro.pdf'>Regulamin rady rodziców</a></div>
        </div>
    )
}
