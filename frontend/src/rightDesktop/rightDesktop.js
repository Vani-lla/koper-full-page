import React from 'react'
import './rightDesktop.css'
import Graphs from '../graphs/Graphs'
import Menubar from '../menubar/Menubar'

export default function rightDesktop() {
    return (
        <div className='right-desktop'>
            <Graphs />
            <Menubar />
        </div>
    )
}
