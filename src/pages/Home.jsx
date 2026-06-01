import React from 'react'
import HeroSection from '../sections/HeroSection';
import Navbar from '../components/Navbar';
// import Testimonials from "../sections/Testimonials";

import Footer from '../components/Footer'
import ServiceSection from '../sections/ServiceSection';
import ContactUs from '../sections/ContactUs';
import WhyChooseUs from '../sections/WhyChooseUs';
import WhatWeFix from '../sections/WhatWeFix';
import Gallary from '../sections/Gallary.jsx'
import AboutUs from '../sections/AboutUs.jsx';
import RecentProjects from '../sections/RecentProjects'
import FAQ from '../sections/FAQ.jsx';
import HowSolarWorks from '../sections/HowSolarWorks.jsx';
export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <AboutUs />
      <ServiceSection />
      <RecentProjects />
      <WhyChooseUs />
      <FAQ />
      <HowSolarWorks />
      <ContactUs />
      <Gallary />
      <Footer />
    </div>
  );
}

