import './App.css';
import { useEffect } from 'react';
import MenueBar from './MenueBar';
import LogoLo from './Logo';
import BodyContent from './BodyContent';
import Feauture from './Features';
import GymOffer from './gymOffer';
import LearnUs from './LearnUS';
import ContactUs from './ContactUs';
function App() {
           
  useEffect(() => {
    document.title = "Gym App"; 
  }, []); // 
  return (
    

    <div className="overlay">

      <MenueBar/>
      <LogoLo/>
      <BodyContent/>
      <Feauture/>
      <GymOffer/>
      <LearnUs/>
      <ContactUs/>

    </div>
  );
}

export default App;
