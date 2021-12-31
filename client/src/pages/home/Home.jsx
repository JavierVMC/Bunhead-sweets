import React from 'react';
import { About } from '../../components/about/about';
import { Gallery } from '../../components/gallery/gallery';
import JsonData from '../../data/data.json';
import { useState, useEffect } from 'react';
import Intro from '../../components/intro/Intro';
import VerticalLinearStepper from '../../components/vertical_stepper/VerticalLinearStepper';

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div id="home">
      <Intro data={landingPageData.Header}></Intro>
      <About data={landingPageData.About} />
      <Gallery data={landingPageData.Gallery} />
      <VerticalLinearStepper></VerticalLinearStepper>
    </div>
  );
};

export default Home;
