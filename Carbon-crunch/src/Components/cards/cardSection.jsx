import React, { useEffect, useRef } from "react";
import Card from "./cards";
import "./cardSection.css";
const cardSection = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current.querySelectorAll(".cards");
    cards.forEach((card) => observer.observe(card));

    return () => {
      cards.forEach((card) => observer.unobserve(card));
    };
  }, []);
  return (
    <section className="card-section" ref={sectionRef}>
      <div className="card-container">
        <Card
          number="3X"
          text="ESG High Performers Deliver A Higher Total Shareholder Return"
          color="green"
        />
        <Card
          number="98%"
          text="Of CEOs Agree Sustainability Is Their Responsibility"
          color="dark"
        />

        <Card
          number="18%"
          text="Of Companies Are Cutting Emissions Fast Enough To Reach Net Zero By 2050"
          color="dark"
        />

        <Card
          number="37%"
          text="Of The World's Largest Companies Have A Public Net Zero Target. Nearly All Are Off Track"
          color="green"
        />
      </div>
    </section>
  );
};

export default cardSection;
