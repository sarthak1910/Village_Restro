import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
              Welcome to Village_Restro, a cozy retreat nestled in the heart of
              Siddharth Nagar. Here, we believe in the simple joys of life: good
              food, great company, and the charm of a warm, welcoming
              atmosphere.Our journey began with a passion for authentic,
              home-cooked meals that celebrate the rich culinary traditions of
              our village. Each dish we serve is crafted with love, using fresh,
              locally-sourced ingredients that reflect the vibrant flavors and
              time-honored recipes passed down through generations.
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
