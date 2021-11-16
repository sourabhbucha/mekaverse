import './App.css';
import React from 'react';

import mattey from './Components/Assets/Img/mattey.jpg'
import mattey_1 from './Components/Assets/Img/mattey_work_01.jpg'
import mattey_2 from './Components/Assets/Img/mattey_work_02.jpg'
import mattey_3 from './Components/Assets/Img/mattey_work_03.jpg'
import mattey_4 from './Components/Assets/Img/mattey_work_04.jpg'

import bracco from './Components/Assets/Img/bracco.jpg'
import bracco_1 from './Components/Assets/Img/bracco_work_01.jpg'
import bracco_2 from './Components/Assets/Img/bracco_work_02.jpg'
import bracco_3 from './Components/Assets/Img/bracco_work_03.jpg'
import bracco_4 from './Components/Assets/Img/bracco_work_04.jpg'

import Front from './Components/Front/Front';
import Section1 from './Components/Section1/Section1';
import Section2 from './Components/Section2/Section2';
import Section3 from './Components/Section3/Section3';
import Section4 from './Components/Section4/Section4';
import Section5 from './Components/Section5/Section5';
import Section6 from './Components/Section6/Section6';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Front />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 name={'Mattey'} img={mattey} work1={mattey_1} work2={mattey_2} work3={mattey_3} work4={mattey_4}/>
      <Section5 name={'Matt.B'} img={bracco} work1={bracco_1} work2={bracco_2} work3={bracco_3} work4={bracco_4}/>
      <Section6 />
      <Footer />
    </div>
  )
}

export default App;
