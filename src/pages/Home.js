import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import ReactPlayer from "react-player";
import "../App.css";
import Services from "../components/Services";
import { useTranslation } from "react-i18next";
import ReactCardSlider from "react-card-slider-component";

const slides = [
  {
    image: "https://www.eliaermouhotel.com/uploads/photos/D1024/2019/02/deluxeroom_1748.jpg",
    title: "Deluxe Room",
    description: "150$/night"
    // clickEvent: sliderClick
  },
  {
    image: "https://image-tc.galaxy.tf/wijpeg-afu0zj5rhmyyirzditj3g96mk/deluxe-room-king-1-2000px.jpg",
    title: "Deluxe Room",
    description: "150$/night"
    // clickEvent: sliderClick
  },
  {
    image: "https://www.landmarklondon.co.uk/wp-content/uploads/2019/05/Executive-Family-1800x1200-1.jpg",
    title: "Family Suite",
    description: "200$/night"
    // clickEvent: sliderClick
  },
  {
    image: "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/231/2020/05/06025033/Luxury-Ocean-View-Room-1-1170x780.jpg",
    title: "Ocean View",
    description: "175$/night"
    // clickEvent: sliderClick
  },
  {
    image: "https://travelupdate.com/wp-content/uploads/2021/05/Ocean-View-Room-Johannes-W-Unsplash-1200x640.jpg",
    title: "Ocean View",
    description: "175$/night"
    // clickEvent: sliderClick
  },
  {
    image: "https://d2e5ushqwiltxm.cloudfront.net/wp-content/uploads/sites/12/2016/02/09120423/Pullman-Executive-Room-King-Bed-1.jpg",
    title: "Executive Suite",
    description: "150$/night"
    // clickEvent: sliderClick
  },
 
];

export const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home">
      <Carousel id="car1">
        <Carousel.Item>
          <img
            className=" w-100 img-fluid"
            src="https://static2.gensler.com/uploads/image/26354/filename/portman-ritz-carlton-2000_1546545445.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1
              style={{
                marginBottom: "30%",
                fontWeight: "bold",
                fontSize: "150px",
              }}
            >
              {t("Home.aboutUs")}
            </h1>

            <p
              style={{
                marginBottom: "10%",
                fontWeight: "bold",
                fontSize: "50px",
              }}
            >
             
              {t("Home.aboutCap")}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://wallpaperaccess.com/full/2690754.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>{t("Home.secondSildeTit")}</h3>
            <p>
            {t("Home.secondSlideCap")}
             
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-fluid"
            src="https://wallpaperaccess.com/full/3353905.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>{t("Home.thirdSildeTit")}</h3>
            <p>
              {t("Home.thirdSlideCap")}
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <h1
        style={{
          fontWeight: "bold",
          marginLeft: "100px",
          marginTop: "100px",
          marginBottom: "50px",
        }}
      >
        {t("Home.rooms")}
      </h1>
      <div style={{ marginTop: "2em", marginLeft:"3em", WebkitTextFillColor:"black", maxWidth:"100%" }}>
      <ReactCardSlider slides={slides} />
    </div>



      <Services />

      <div>
        <h1
          style={{
            fontWeight: "bold",
            marginLeft: "30%",
            marginTop: "100px",
            marginBottom: "50px",
          }}
        >
          {t("Home.rest")}
        </h1>

        <ReactPlayer
          style={{
            marginLeft: "100px",
            marginTop: "100px",
            marginBottom: "50px",
          }}
          url="https://www.youtube.com/embed/ZRnIn8IS2JA"
        />
        <h4
          style={{
            textAlign: "center",
            fontSize: "25px",
            position: "absolute",
            marginLeft: "770px",
            marginTop: "-300px",
            marginRight: "50px",
          }}
        >
          {t("Home.restDes")}
         
        </h4>
        <Button
          variant="primary"
          href="./resto"
          style={{
            backgroundColor: "#818181",
            borderRadius: "0%",
            borderColor: "#818181",
            marginTop: "-260px",
            marginLeft: "1200px",
          }}
        >
          {t("Home.explore")}
        </Button>
      </div>
    </div>
  );
};

export default Home;
