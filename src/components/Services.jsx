import React, { Component } from "react";

// imports react-icons
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";

// imports components
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
      },
      {
        icon: <FaHiking />,
        title: "endless hiking",
    
      },
      {
        icon: <FaShuttleVan />,
        title: "free shuttle",
      },
      {
        icon: <FaBeer />,
        title: "storages beer",
      },
    ],
  };

  render() {
    return (
      <section className="servi">
        <Title title="SERVICES" />

        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="servi">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}