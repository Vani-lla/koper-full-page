import React from 'react'
import './Dyrekcja.css'

export default function Dyrekcja() {
    return (
        <div className='headquarters tile central'>
            <div className='sensei-room'>
                <div className='member'>
                    <div className='role'>
                        Wicedyrektor
                    </div>
                    <img src="https://koper.edu.pl/_images/mm.jpg" alt='Help me' />
                    <div className='description'>
                        <div>mgr inż.</div>
                        <b>Maria Mendrek</b>
                    </div>
                </div>
                <div className='member'>
                    <div className='role'>
                        Dyrektor
                    </div>
                    <img src="https://koper.edu.pl/_images/rr.jpg" alt='Help me' />
                    <div className='description'>
                        <div>mgr</div>
                        <b>Regina Rakowska</b>
                    </div>
                </div>
                <div className='member'>
                    <div className='role'>
                        Wicedyrektor
                    </div>
                    <img src="https://koper.edu.pl/_images/tg2.jpg" alt='Help me' />
                    <div className='description'>
                        <div>mgr inż.</div>
                        <b>Tadeusz Gajdzica</b>
                    </div>
                </div>
            </div>

            <img id='villains' src='https://koper.edu.pl/_images/grono2.jpg' alt='villains'/>

            <div className='teachers'>
                <div className='subject'>
                    <div className='subject-name'>
                        J. Polski
                    </div>
                    <div className='teacher-list'>
                        <div>mgr Patrycja Łyżbicka</div>
                        <div>mgr Anna Haratyk</div>
                    </div>
                </div>
                <div className='subject'>
                    <div className='subject-name'>
                        J. Angielski
                    </div>
                    <div className='teacher-list'>
                        <div>mgr Piotr Chwastek</div>
                        <div>mgr Magdalena Michalik</div>
                    </div>
                </div>
                <div className='subject'>
                    <div className='subject-name'>
                        J. Francuski
                    </div>
                    <div className='teacher-list'>
                        <div>mgr Aleksandra Żołnowska</div>
                        <div>mgr Tomasz Szkudliński</div>
                    </div>
                </div>
            </div>

        </div>
    )
}
