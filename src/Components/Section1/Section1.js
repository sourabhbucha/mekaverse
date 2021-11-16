import React from 'react'
import './Section1.css'
import meka07 from '../Assets/gif/various.gif'
function Section1() {
    return (
        <div className="section1">
            <div className="section1-grid">
                <div className="grid-section1">
                    <h1>8,888 unique Mekas</h1>
                    <h2>who need Drivers.</h2>
                    <p>The MekaVerse is a collection of 8,888 generative Mekas with hundreds of elements inspired by the Japan Mecha universes.Each artwork is original, with its own color palette and creation. <br/> <br/>The objective was to make each Meka unique in order to prioritize quality above quantity.</p>
                </div>
                <img src={meka07} alt="" />
            </div>
        </div>
    )
}

export default Section1
