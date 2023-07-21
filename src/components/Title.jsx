import React from "react";

export default function Title({ title }) {
  return (
    <div className="section-title">
      <h4 style={{marginTop:"100px", fontWeight:"bold", marginBottom:"50px", fontSize:"30px"}}>{title}</h4>
      <div />
    </div>
  );
}