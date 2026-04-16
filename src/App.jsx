import React from 'react'
import './App.css'
import NavigationBar from './NavigationBar'
import { useRef } from 'react'
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';
import ValuesSection from './ValueSection';
import { useEffect, useState } from "react";
import starIcon from "./assets/star.svg";

export function ScrollHook() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollY;
}

const clamp = (value, min, max) =>
  Math.min(Math.max(value, min), max);

const styles = {
  image: {
    position: "absolute",
    width: "150px",
    height: "150px",
    objectFit: "cover",
    transition: "transform 0.15s ease-in-out",
  }
}

function App() {
  // refs for each section
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const valuesRef = useRef(null);
  const scrollY = ScrollHook();

  return (
    <>
      <body>
        <div class="app">
          <div className="background">
            <img
              src={starIcon}
              style={{
                ...styles.image,
                top: clamp(200 - scrollY * 0.3, 0, 700),
                // top: `${200 - scrollY * 0.3}px`,
                left: "5%",
              }}
            />

            <img
              src={starIcon}
              style={{
                ...styles.image,
                top: clamp(400 - scrollY * 0.6, 100, 700),
                // top: `${200 - scrollY * 0.3}px`,
                left: clamp(700 - scrollY * 0.3, 450, 700),
                // left: "50%",
              }}
            />

            <img
              src={starIcon}
              style={{
                ...styles.image,
                top: clamp(49 - scrollY * 0.6, -1000, 49),
                // top: `${200 - scrollY * 0.3}px`,
                //right: clamp(450 - scrollY * 0.2, 100, 450),
                right: 450,
              }}
            />

            <img
              src={starIcon}
              style={{
                ...styles.image,
                top: clamp(100 - scrollY * 0.4, -1000, 100),
                // top: `${200 - scrollY * 0.3}px`,
                right: clamp(300 - scrollY * 0.1, 100, 300),
                // left: "50%",
              }}
            />

            <img
              src={starIcon}
              style={{
                ...styles.image,
                // bottom: "0px",
                // right: "200px",
                bottom: clamp(0 + scrollY * 0.2, 0, 150),
                // top: `${200 - scrollY * 0.3}px`,
                right: clamp(200 - scrollY * 0.1, 150, 200)
                // left: "50%",
              }}
            />

            {/* from second page */}
            <img
              src={starIcon}
              style={{
                ...styles.image,
                top: "800px",
                // top: clamp(2000 - scrollY * 0.3, -2000, 700),
                // top: `${200 - scrollY * 0.3}px`,
                left: "50%",
              }}
            />

            {/* <img
              src={starIcon}
              style={{
                ...styles.image,
                top: `${350 - scrollY * 0.4}px`,
                left: "80%",
              }}
            />

            <img
              src={starIcon}
              style={{
                ...styles.image,
                top: `${350 - scrollY * 0.7}px`,
                left: `${50 + scrollY * 0.02}%`,
              }}
            /> */}
          </div>
          <div class="foreground">
            <NavigationBar aboutRef={aboutRef} experienceRef={experienceRef} valuesRef={valuesRef} />
            <AboutSection aboutRef={aboutRef} />
            <ProjectSection experienceRef={experienceRef} />
            <ValuesSection valuesRef={valuesRef} />
          </div>
        </div>
      </body>
    </>
  )
}

export default App
