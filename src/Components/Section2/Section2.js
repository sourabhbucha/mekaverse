import React from 'react'
import './Section2.css'
import meka01 from '../Assets/Img/meka_01.jpg'
import meka02 from '../Assets/Img/meka_02.jpg'
import meka03 from '../Assets/Img/meka_03.jpg'
import meka04 from '../Assets/Img/meka_04.jpg'
import meka05 from '../Assets/Img/meka_05.jpg'
import meka06 from '../Assets/Img/meka_06.jpg'
import meka07 from '../Assets/Img/meka_07.jpg'
import meka08 from '../Assets/Img/meka_08.jpg'
import meka09 from '../Assets/Img/meka_09.jpg'
import Slider from 'infinite-react-carousel';
function Section2() {
    return (
        <div className="section2">
            <Slider arrows={false} autoplay= {true} dots= {true} pauseOnHover={false} slidesPerRow={3}>
                <div className="center">
                    <img src={meka01} alt="" />
                </div>
                <div className="center">
                    <img src={meka02} alt="" />
                </div>
                <div className="center">
                    <img src={meka03} alt="" />
                </div>
                <div className="center">
                    <img src={meka04} alt="" />
                </div>
                <div className="center">
                    <img src={meka05} alt="" />
                </div>
                <div className="center">
                    <img src={meka06} alt="" />
                </div>
                <div className="center">
                    <img src={meka07} alt="" />
                </div>
                <div className="center">
                    <img src={meka08} alt="" />
                </div>
                <div className="center">
                    <img src={meka09} alt="" />
                </div>
            </Slider>
        </div>
    )
}

export default Section2
