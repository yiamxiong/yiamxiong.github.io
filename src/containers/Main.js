import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import DataPortfolio from "../components/dataPortfolio/dataPortfolio";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import { splashScreen } from "../portfolio";
import "./Main.scss";

import { StyleProvider } from "../contexts/StyleContext";

const Main = () => {
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(() => {
        setIsShowingSplashAnimation(false);
      }, splashScreen.duration);
      return () => clearTimeout(splashTimer);
    }
  }, []);

  return (
    <StyleProvider>
      {splashScreen.enabled && isShowingSplashAnimation ? (
        <SplashScreen />
      ) : (
        <>
          <Header />
          <Greeting />
          <Skills />
          <StackProgress />
          <Education />
          <WorkExperience />
          <Projects />
          <StartupProject />
          <Achievement />
          <DataPortfolio />
          <Blogs />
          <Talks />
          <Twitter />
          <Podcast />
          <Profile />
          <Footer />
          <ScrollToTopButton />
        </>
      )}
    </StyleProvider>
  );
};

export default Main;
