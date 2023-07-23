import React, { useState } from "react";
import { Parallax } from "react-parallax";
import { FaStar } from "react-icons/fa";
import RV from "../components/RV";
import { left } from "@popperjs/core";

const imageDemo = "https://images.wallpaperscraft.com/image/single/mountains_hotel_window_25771_1920x1080.jpg";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9"
};

function Review() {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [experience, setExperience] = useState("");
  const [submittedReviews, setSubmittedReviews] = useState([]);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Create a new review object
    const newReview = {
      id: Date.now(),
      firstName,
      lastName,
      experience,
      rating: currentValue,
    };

    // Add the new review to the submittedReviews array
    setSubmittedReviews((prevReviews) => [...prevReviews, newReview]);

    // Clear the input fields and rating
    setFirstName("");
    setLastName("");
    setExperience("");
    setCurrentValue(0);
  };

  return (
    <div className="ser">
      <Parallax bgImage={imageDemo} strength={500}>
        <div style={{ height: 500 }}>
          <h1
            style={{
              marginTop: "10%",
              fontWeight: "bold",
              fontSize: "70px",
              color: "white",
              marginLeft: "15%"
            }}
          >
            What Our Customers Say About Us!
          </h1>
          <p style={{ fontWeight: "bold", color: "white", marginLeft: "35%" }}>
            Let us know what you think!
          </p>
        </div>
      </Parallax>

      <div className="container">
        <div children="title">
          <div className="underline"></div>
        </div>
        <RV />
      </div>

      <div style={styles.container}>
        <h2 style={{ color: "#818181" }}> Leave a Review!</h2>
        <div style={styles.stars}>
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index + 1)}
                onMouseOver={() => handleMouseOver(index + 1)}
                onMouseLeave={handleMouseLeave}
                color={
                  (hoverValue || currentValue) > index
                    ? colors.orange
                    : colors.grey
                }
                style={{
                  marginRight: 10,
                  cursor: "pointer"
                }}
              />
            );
          })}
        </div>

        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="First Name"
            style={styles.textarea2}
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
          <br />
          <textarea
            placeholder="Last Name"
            style={styles.textarea2}
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <br />
          <textarea
            placeholder="What's your experience?"
            style={styles.textarea}
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            required
          />
          <br />
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stars: {
    display: "flex",
    flexDirection: "row"
  },
  textarea: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 1,
    margin: "20px 0",
    minHeight: "100px",
    width: 300,

  },
  button: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    width: 300,
    padding: 10,
    marginBottom: "100px"
  },
  textarea2: {
    border: "1px solid #a9a9a9",
    borderRadius: 5,
    padding: 1,
    margin: "20px 0",
    width: 300,
    height: "50px",

  }
};

export default Review;
