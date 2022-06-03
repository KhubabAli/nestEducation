import React, { Component } from "react";
import Hero from "./HeroSection";
import Category from "./CategorySection";
import Videos from "./VideosSection";
import Images from "./ImagesSection";
import Event from "./EventSection";
import Cta from "./CtaSection";
import CourseTab from "../Elements/Tab/CourseTab";
import Contact from "./ContactSection";

class HomeMain extends Component {
  render() {
    return (
      <main style={{ backgroundColor: "#56B24B" }}>
        {/* hero-start */}
        <Hero />
        {/* hero-end */}

        {/* category-start */}
        <Category />
        {/* category-end */}

        {/* Videos-start */}
        <Videos />
        {/* Videos-end */}

        {/* course-start */}
        <CourseTab />
        {/* course-end */}

        {/* event-start */}
        <Images />
        {/* event-end */}

        {/* cta-start */}
        <Contact />
        {/* cta-end */}
      </main>
    );
  }
}

export default HomeMain;
