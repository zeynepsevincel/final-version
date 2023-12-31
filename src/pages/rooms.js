import React, { useState } from 'react';
import FacetCheckbox from '../components/FacetCheckbox';
import SearchResults from '../components/SearchResults';
import data from '../data.json'; 
import '../rooms.css';
import { Parallax } from "react-parallax";


export const Rooms = () => {
    const imageDemo =
    'https://png.pngtree.com/thumb_back/fh260/back_our/20190625/ourmid/pngtree-black-atmosphere-hotel-voucher-image_262050.jpg';
  const [results, setResults] = useState(data);
  const [selectedFacets, setSelectedFacets] = useState({});

  const handleFacetChange = (facetName, facetValue, checked) => {
    setSelectedFacets(prevFacets => ({
      ...prevFacets,
      [facetName]: checked
        ? [...(prevFacets[facetName] || []), facetValue]
        : prevFacets[facetName].filter(val => val !== facetValue),
    }));
  };

  // Apply faceted filtering to the data
  const filteredResults = results.filter(item => {
    // Check if each facet matches the selected values
    return Object.entries(selectedFacets).every(([facetName, facetValues]) => {
      if (facetValues.length === 0) return true; // Skip if no filters applied for this facet
      if (facetName === 'price') {
        return facetValues.some(range => {
          const [minPrice, maxPrice] = range.split('-').map(Number);
          return item.price >= minPrice && item.price <= maxPrice;
        });
      } else {
        return facetValues.includes(item[facetName]);
      }
    });
  });

  // Category options for FacetCheckbox
  const categoryOptions = [
    { value: 'Room for two', label: 'Room for two' },
    { value: 'Room for 2+', label: 'Room for 2+' },
  ];

  // Numeric price ranges for FacetCheckbox
  const priceRanges = [
    { value: '0-150', label: '$0-$150' },
    { value: '150-200', label: '$150-$200' },
  ];

  return (
    <div className="home">
      <div>
        <Parallax bgImage={imageDemo} strength={500}>
          <div style={{ height: 570 }}>
            <h1 style={{ marginLeft: '40%', marginTop: '40px', marginBottom: '50px', color: 'white' }}>Our Rooms</h1>
            <h2 style={{ marginLeft: '20%', marginTop: '40px', marginBottom: '50px', color: 'white' }}>
              Compare our rooms and choose the one you like the best!
            </h2>
          </div>
        </Parallax>

        <div>
          <FacetCheckbox name="category" values={categoryOptions} onChange={handleFacetChange} />
          <FacetCheckbox name="price" values={priceRanges} onChange={handleFacetChange} />
        </div>
        <SearchResults results={filteredResults} />
      </div>
    </div>
  );
};
export const Deluxe = () => {
return (
	<div className="home">
	<h1 style={{marginLeft:"700px", fontWeight:"bold", marginTop:"50px",color:"black"}}>Deluxe Room</h1>

    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/116405496.jpg?k=e03485ffb197356e2322824a8a7cdbc56731a7437ae1a2cdfb44c28b5c0efbc9&o=&hp=1" width="40%" height="40%" style={{float:"left", marginTop: "100px",marginLeft: "50px", marginRight: "40px",}}></img>
<p style={{fontSize:"27px", marginTop:"70px",marginBottom:"500px", color:"black"}}>Step into pure luxury and space with our Deluxe Suites, spanning approximately 500 sq ft. Enjoy a king-size bed, ample lounging and work areas, and wrap-around couches that convert into two twin beds. Relax in the private bath, featuring a clawfoot tub or large shower. Experience the elegance of hardwood floors, classic views of Southwest Portland, and original art and detailing. Enhance your stay with a record player and vintage vinyl, while enjoying free WiFi. We welcome your furry friends as we are a pet-friendly establishment. Experience ultimate comfort with our really comfy hypoallergenic mattresses, and appreciate the charm of locally made and vintage furniture.</p>
	</div>
);
};

export const Family = () => {
return (
	<div className="home">
	<h1 style={{marginLeft:"700px", fontWeight:"bold", marginTop:"50px",color:"black"}}>Family Suite</h1>

<img src="https://www.discoveryhotelancol.com/wp-content/uploads/2020/03/DA-Family-Room-Bedroom-02.jpg" width="40%" height="40%" style={{float:"left", marginTop: "100px",marginLeft: "50px", marginRight: "40px",}}></img>
<p style={{fontSize:"27px", marginTop:"100px",marginBottom:"500px",color:"black"}}>Embrace the spaciousness of our Family Suites, designed to accommodate the whole family. Multiple bedrooms provide privacy and comfort, while a separate living room allows for quality time together. Enjoy the convenience of free WiFi, hypoallergenic mattresses, and locally made and vintage furniture that adds a unique touch to your stay.</p>
</div>
);
};

export const Ocean = () => {
    return (
        <div className="home">
       <h1 style={{marginLeft:"700px", fontWeight:"bold", marginTop:"50px",color:"black"}}>Ocean View Room</h1>

<img src="https://www.halekulani.com/wp-content/uploads/2022/02/HKU_Ocean-View-King-scaled.jpg" width="40%" height="40%" style={{float:"left", marginTop: "100px",marginLeft: "50px", marginRight: "40px",}}></img>
<p style={{fontSize:"27px", marginTop:"100px",marginBottom:"550px",color:"black"}}>Immerse yourself in the beauty of the sea with our Ocean View Rooms. Wake up to breathtaking vistas, soak in the serenity, and indulge in the comfort of hypoallergenic mattresses. Appreciate the charm of locally made and vintage furniture, and stay connected with free WiFi throughout your stay.</p>
</div>
    );
    };

    export const Executive = () => {
        return (
            <div className="home">
            <h1 style={{marginLeft:"700px", fontWeight:"bold", marginTop:"50px",color:"black"}}>Executive Room</h1>

<img src="https://www.chelseatoronto.com/en/uploads/images/2023/03/chelsea-hotel-executive-room2.jpg" width="40%" height="40%" style={{float:"left", marginTop: "100px",marginLeft: "50px", marginRight: "40px",}}></img>
<p style={{fontSize:"27px", marginTop:"100px", marginBottom:"500px",color:"black"}}>Designed for discerning business travelers, our Executive Rooms provide the perfect blend of productivity and relaxation. These well-appointed rooms offer a dedicated work area, ensuring a conducive environment for work. Sink into the comfort of hypoallergenic mattresses, enjoy free WiFi, and appreciate the locally made and vintage furniture that adds character to the room.</p>
</div>
        );
        };
            