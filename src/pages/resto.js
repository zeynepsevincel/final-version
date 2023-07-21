import React from "react";
import { Parallax } from "react-parallax";
import Carousel from 'react-bootstrap/Carousel';
import Calendar from 'react-calendar'; 
import {useState} from 'react';
import "../components/calendar.css";
import Time from "../components/Time.js";
import ReactDOM from 'react-dom/client';



const imag = "https://www.hoteldupont.com/resourcefiles/mainimages/dining-overview-masthead.jpg?version=7182022134123";

function Resto() {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false) 

  const shoot = (a) => {
    alert(a);
		/*
		'b' represents the React event that triggered the function.
    In this case, the 'click' event
		*/
  }
return (
<div className="events">
<Parallax bgImage={imag} strength={500}>
      <div style={{ height: 500 }}>
        <h1 style={{marginTop:"10%", fontWeight:"bold", fontSize:"100px", marginLeft:"34%", color:"white",}}>DINE&DRINK</h1>
		<p style={{fontSize:"40px", marginLeft:"24%", color:"white",marginTop:"20px"}}>Keep Smiling. It makes people wonder where you have been.</p>
      </div>
    </Parallax>



<h3 style={{marginTop:"70px", marginLeft:"-800px", textAlign:"center"}}>OPENING TIMES<br></br><br></br>

Mon - Fri, Lunch: 12:30 – 17:30 | <br></br>
Dinner: 19:00 – 22:30 | <br></br>
Sat - Sun, 12:30 - 22:30</h3>

<h3 style={{marginTop:"-178px", marginLeft:"800px", marginBottom:"100px", textAlign:"center"}}>CONTACT US<br></br><br></br>
<br></br>
restaurants@sunsetinn.com<br></br>
123 456-7890</h3>





<div>
<h1 className='header' style={{marginLeft:"40%", marginBottom:"40px"}}>Book a Table!</h1>
   <div>
    <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)} />
   </div>

   {date.length > 0 ? (
   <p>
     <span>Start:</span>
     {date[0].toDateString()}
     &nbsp;
     &nbsp;
     <span>End:</span>{date[1].toDateString()}
   </p>
          ) : (
   <p style={{color:"black"}}>
      <span style={{color:"black", marginLeft:"35%"}}>Default selected date:</span>{date.toDateString()}
   </p> 
          )
   }
   <Time showTime={showTime} date={date}/>

   <button style={{marginLeft:"45%"}} onClick={() => shoot("Your reservation is complete!")}>Reserve</button>

</div>




<Carousel id="car1" style={{width:"50%", marginLeft:"25%", marginBottom:"100px", marginTop:"100px"}}>
        <Carousel.Item >
          <img
            className=" w-100 img-fluid"
            src="https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2018/10/header.jpg?fit=1267%2C713&ssl=1"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://www.restaurant-hospitality.com/sites/restaurant-hospitality.com/files/styles/article_featured_retina/public/hotel-restaurant-6-Skyhigh.png?itok=7ORfeFto"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://qtxasset.com/quartz/qcloud1/media/image/hotelmanagement/1522085116/Hearth-Dram-Interiors-Night-23.jpg?VersionId=J2bxR3.UEWQWzU.p0ubnfcM_YdEqOuUU"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>




</div>



);
};

export default Resto;