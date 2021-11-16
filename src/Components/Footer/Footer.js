import React from 'react'
import './Footer.css'
import logo from '../Assets/Img/logo.png'
import { FaTwitter } from 'react-icons/fa';
import { SiDiscord } from 'react-icons/si';

function Footer() {
    return (
        <div className="footer">
            <div className="footer-grid">
            <div className="footergrid1">
                <div className="flex">
                    <img src={logo} alt="" />
                    <h2>MekaVerse</h2>
                </div>
                <h3>8,888 unique mekas who need drivers.</h3>
                <p>©2021 MekaVerse. All rights reserved.</p>
            </div>
            <div className="footergrid2">
                <h1 className="blue">Home</h1>
                <h1>Team</h1>
                <h1>Terms & Conditions</h1>
                <div className="footer-icons">
                    <a href=""><FaTwitter /></a>
                    <a href=""><SiDiscord /></a>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Footer
