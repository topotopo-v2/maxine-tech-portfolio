import { useRef } from 'react';
import './App.css';
import NavigationBar from './nav/NavigationBar';
import AboutSection from './about/AboutSection';
import ProjectSection from './projects/ProjectSection';
import ValuesSection from './workwithme/WorkWithMeSection';
import { useScrollPosition } from './useScrollPosition';
import { ParallaxBackground } from './ParallaxBackground';

function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const valuesRef = useRef(null);
  const scrollY = useScrollPosition();

  return (
    <div className="app">
      <ParallaxBackground scrollY={scrollY} />
      <div className="foreground">
        <NavigationBar
          aboutRef={aboutRef}
          experienceRef={experienceRef}
          valuesRef={valuesRef}
        />
        <AboutSection aboutRef={aboutRef} />
        <ProjectSection experienceRef={experienceRef} />
        <ValuesSection valuesRef={valuesRef} />
      </div>
    </div>
  );
}

export default App
