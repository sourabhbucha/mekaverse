import React from 'react'
import './Section6.css'
import front from '../Assets/Img/1.png'
function Section6() {
    return (
        <div className="section6" style={{ backgroundImage: `url(${front})` }}>
            <div className="section6-content">
                <h1>Join the community</h1>
                <p>MekaVerse Discord already has over 200,000 members! If you want to join the #MEKAGANG it’s here. Join us to get the news as soon as possible and follow our latest announcements.</p>
                <a href="">Join our Discord</a>
            </div>
        </div>
    )
}

export default Section6
