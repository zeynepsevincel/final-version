
import { Parallax } from "react-parallax";
import RegistrationForm from '../components/registrationform'
import Stepper from 'react-stepper-horizontal';
import React, { useState } from 'react';
import Formy from '../components/formy';
import RoomDetails from '../components/RoomDetails';


const imag1 = "https://wallpapercave.com/wp/wp1846087.jpg";

function UserDetails() {
  return <RegistrationForm/>;
}

function Payment() {
  return <Formy />;
}

function RoomDet() {
  return <RoomDetails/>;
}
function Confirmation() {
  return <h2 style={{marginLeft:"35%", marginTop:"100px", marginBottom:"100px"}}>Your Reservation is Succesful! </h2>;
}





function Booking  () {
  const [ activeStep, setActiveStep ] = useState(0);

  const steps = [
    { title: 'Person Details' },
    { title: 'Hotel Details' },
    { title: 'Room Details' },
    { title: 'Booking confirmation' }
   
  ];
  function getSectionComponent() {
    switch(activeStep) {
      case 0: return <UserDetails/>;
      case 1: return <Payment/>;
      case 2: return <RoomDet/>
      case 3: return <Confirmation/>;
      default: return null;
    }
  }


return (
	<div className="contact">

<Parallax bgImage={imag1} strength={500}>
      <div style={{ height: 500 }}>
        <h1 style={{marginTop:"10%", fontWeight:"bold", fontSize:"100px", marginLeft:"30%", color:"white",}}>RESERVATIONS</h1>
		
      </div>
    </Parallax>

 
    <div>
      <Stepper
        steps={steps}
        activeStep={activeStep}/>
      <div style={{padding: '20px'}}>
        { getSectionComponent()  }
        { (activeStep !== 0 && activeStep !== steps.length - 1)
            && <button onClick={ () => setActiveStep(activeStep - 1) }>Previous</button>
        }
        { activeStep !== steps.length - 1
          && <button onClick={ () => setActiveStep(activeStep + 1) } style={{marginLeft:"90%"}}>Next</button>
        }
      </div>
    </div>
    
	</div>
  
);
};

export default Booking;
