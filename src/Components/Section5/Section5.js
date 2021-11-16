import React from 'react'
import './Section5.css'
import meka07 from '../Assets/Img/meka_07.jpg'
import { FaTwitter } from 'react-icons/fa';
import { SiDiscord } from 'react-icons/si';
import Slider from 'infinite-react-carousel';

function Section5(props) {
    return (
        <div className="section5">
            <div className="section5-grid1 border-right">
            <div className="inline-flex">
                <h1>{props.name}</h1>
                <div className="section5-icons">
                <a href=""><FaTwitter /></a>
                <a href=""><SiDiscord /></a>
                </div>
            </div>
            <img src={props.img} alt="" />
            </div>
            <div className="section5-grid2">
            <div className="inline-flex">
                <h2>NFTs Artworks</h2>
            </div>
            <Slider arrows={false} autoplay= {true} dots= {true} pauseOnHover={false} slidesPerRow={2}>
            <div className="seaction5-center">
                <img src={props.work1} alt="" />
            </div>
            <div className="seaction5-center">
                <img src={props.work2} alt="" />
            </div>
            <div className="seaction5-center">
                <img src={props.work3} alt="" />
            </div>
            <div className="seaction5-center">
                <img src={props.work4} alt="" />
            </div>
            </Slider>
            </div>
        </div>
    )
}

export default Section5
