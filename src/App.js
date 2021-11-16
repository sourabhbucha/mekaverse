import './App.css';
import React from 'react';
import front from './Components/Assets/Img/1.png'
import logo from './Components/Assets/Img/logo.png'
import meka07 from './Components/Assets/Img/meka_07.jpg'
import { FaTwitter } from 'react-icons/fa';
import { SiDiscord } from 'react-icons/si';
import Slider from 'infinite-react-carousel';
import Front from './Components/Front/Front';
import Section1 from './Components/Section1/Section1';
import Section2 from './Components/Section2/Section2';
import Section3 from './Components/Section3/Section3';
function App() {
  return (
    <div className="App">
      <Front />
      <Section1 />
      <Section2 />
      <Section3 />
      <div className="section4">
        <div className="section4-head">
          <h2>Who are we?</h2>
          <h1>Creative teams</h1>
        </div>
        <div className="section4-content">
          <p>Hi! Mattey & Matt. B are two friends currently focusing on 3D & Art direction. We have been working hard to establish our own style, and we're continuously looking for new ways to push ourselves. We also worked with Apple, Microsoft, MTV, Adobe, Adidas, Nike and more!</p>
        </div>
      </div>
      <div className="section5">
        <div className="section5-grid1 border-right">
          <div className="inline-flex">
            <h1>Mattey</h1>
            <div className="section5-icons">
              <a href=""><FaTwitter /></a>
              <a href=""><SiDiscord /></a>
            </div>
          </div>
          <img src={meka07} alt="" />
        </div>
        <div className="section5-grid2">
          <div className="inline-flex">
            <h1>NFTs Artworks</h1>
          </div>
          <Slider arrows={false} autoplay= {true} dots= {true} pauseOnHover={false} slidesPerRow={2}>
          <div className="seaction5-center">
            <img src={meka07} alt="" />
          </div>
          <div className="seaction5-center">
            <img src={meka07} alt="" />
          </div>
          <div className="seaction5-center">
            <img src={meka07} alt="" />
          </div>
          <div className="seaction5-center">
            <img src={meka07} alt="" />
          </div>
        </Slider>
        </div>
      </div>
      <div className="section5">
        <div className="section5-grid1 border-right">
          <div className="inline-flex">
            <h1>Mattey</h1>
            <div className="section5-icons">
              <a href=""><FaTwitter /></a>
              <a href=""><SiDiscord /></a>
            </div>
          </div>
          <img src={meka07} alt="" />
        </div>
        <div className="section5-grid2">
          <div className="inline-flex">
            <h1>NFTs Artworks</h1>
          </div>
          <Slider arrows={false} autoplay= {true} dots= {true} pauseOnHover={false} slidesPerRow={2}>
          <div className="seaction5-center">
            <img src={meka07} alt="" />
          </div>
          <div className="seaction5-center">
            <img src={meka07} alt="" />
          </div>
          <div className="seaction5-center">
            <img src={meka07} alt="" />
          </div>
          <div className="seaction5-center">
            <img src={meka07} alt="" />
          </div>
        </Slider>
        </div>
      </div>
      <div className="section7" style={{ backgroundImage: `url(${front})` }}>
        <div className="section7-content">
          <h1>Join the community</h1>
          <p>MekaVerse Discord already has over 200,000 members! If you want to join the #MEKAGANG it’s here. Join us to get the news as soon as possible and follow our latest announcements.</p>
          <a href="">Join our Discord</a>
        </div>
      </div>
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
            <div className="section7-icons">
              <a href=""><FaTwitter /></a>
              <a href=""><SiDiscord /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
