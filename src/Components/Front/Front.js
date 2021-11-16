import React from 'react'
import front from '../Assets/Img/1.png'
import logo from '../Assets/Img/logo.png'
import { FaTwitter } from 'react-icons/fa';
import { SiDiscord } from 'react-icons/si';
import './Front.css'
function Front() {
    return (
        <div className="front">
            <div className="front-flex">
                <img src={logo} alt="" />
                <h2>MekaVerse</h2>
                <div className="icons">
                    <a href=""><FaTwitter /></a>
                    <a href=""><SiDiscord /></a>
                </div>
            </div>
            <a href="">View on Opensea</a>
            <img src={front} alt="" />
        </div>
    )
}

export default Front
