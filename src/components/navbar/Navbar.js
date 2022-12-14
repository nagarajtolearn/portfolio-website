import React from "react";
import logo from "../../assets/logo192.png";
import { BsArrowDown } from "react-icons/bs";
import "./navbar.css";

const Navbar = () => {
  // Add .active class on click
  const addActive = (e) => {
    const navbarLinks = document.querySelector(".navbar__links");
    const burger = document.querySelector(".burger");
    e.target.parentElement.parentElement.classList.add("active");

    // hiding navlink
    setTimeout(() => {
      navbarLinks.classList.remove("active");
      burger.classList.remove("toggle");
    }, 300);
  };

  // Show navabr
  const showNav = (e) => {
    const burger = document.querySelector(".burger");
    const navbarLinks = document.querySelector(".navbar__links");

    burger.classList.toggle("toggle");
    navbarLinks.classList.toggle("active");
  };

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="navbar"
      data-aos="fade-right"
      data-aos-easing="ease"
      data-aos-duration="1000"
    >
      <div className="navbar__logo">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="navbar__links">
        <ul>
          <li
            className="intro link active btn"
            onClick={addActive}
            data-aos="fade-right"
            data-aos-easing="ease"
            data-aos-duration="1000"
          >
            <a href="#intro">
              <span className="link__number">01</span>
              <span className="link__name">Intro</span>
            </a>
          </li>
          <li
            className="about link btn"
            onClick={addActive}
            data-aos="fade-right"
            data-aos-easing="ease"
            data-aos-delay="300"
            data-aos-duration="1000"
          >
            <a href="#about">
              <span className="link__number">02</span>
              <span className="link__name">About me</span>
            </a>
          </li>
          <li
            className="skills link btn"
            onClick={addActive}
            data-aos="fade-right"
            data-aos-easing="ease"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            <a href="#skills">
              <span className="link__number">03</span>
              <span className="link__name">Skills</span>
            </a>
          </li>
          <li
            className="projects link btn"
            onClick={addActive}
            data-aos="fade-right"
            data-aos-easing="ease"
            data-aos-delay="500"
            data-aos-duration="1000"
          >
            <a href="#projects">
              <span className="link__number">04</span>
              <span className="link__name">My work</span>
            </a>
          </li>
          <li
            className="next link btn"
            onClick={addActive}
            data-aos="fade-right"
            data-aos-easing="ease"
            data-aos-delay="600"
            data-aos-duration="1000"
          >
            <a href="#next">
              <span className="link__number">05</span>
              <span className="link__name">What's next ?</span>
            </a>
          </li>
        </ul>
      </div>
      <div className="burger" onClick={showNav}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="scroll__to__top " onClick={scrollToTop}>
        <span className="btn">
          <BsArrowDown />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
