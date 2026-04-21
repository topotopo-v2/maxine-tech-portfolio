import { useRef } from 'react';
import './App.css';
import NavigationBar from './nav/NavigationBar';
import AboutSection from './about/AboutSection';
import ProjectSection from './projects/ProjectSection';
import ValuesSection from './workwithme/WorkWithMeSection';

function App() {
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const valuesRef = useRef(null);

  return (
    <div className="app">
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
