import React from "react";
import { ShieldCheck, Sun, BatteryCharging } from "lucide-react";

import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

import heroImg from "../images/main-img.jpg";

function HeroSection() {
  const phoneNumber = "27718884499";

  const message =
    "Hello, I am interested in your solar and lithium battery solutions.";

  const encodedMessage = encodeURIComponent(message);

  const callNow = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden mt-14"
    >
      {/* BACKGROUND IMAGE */}
      <img
        src={heroImg}
        alt="Solar panel installation"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/75 to-black/60"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl">
          {/* SMALL LABEL */}
          <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-400/30 backdrop-blur-md px-4 py-2 rounded-full text-yellow-300 font-medium mb-6">
            <Sun size={18} />
            <span>Reliable Solar Energy Solutions</span>
          </div>

          {/* HEADING */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-white">
            Power Your Future With
            <span className="block text-yellow-400">DC Solar & Lithium</span>
          </h1>

          {/* DESCRIPTION */}
          <p className="mt-6 text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl">
            Professional solar panel installations, lithium battery storage,
            inverters, and backup power solutions for homes and businesses.
            Reduce electricity costs and stay powered during load shedding.
          </p>

          {/* TRUST BADGES */}
          <div className="flex flex-wrap gap-4 mt-8 text-sm text-gray-200">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <Sun size={18} className="text-yellow-400" />
              <span>Solar Installations</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <BatteryCharging size={18} className="text-green-400" />
              <span>Lithium Battery Systems</span>
            </div>

            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <ShieldCheck size={18} className="text-blue-400" />
              <span>Trusted Energy Solutions</span>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-5">
            {/* CALL BUTTON */}
            <button
              onClick={callNow}
              className="flex items-center justify-center gap-3 bg-yellow-500 hover:bg-yellow-600 transition duration-300 px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:scale-105 text-black"
            >
              <FaPhoneAlt className="text-xl" />
              <span>Get Free Quote</span>
            </button>

            {/* WHATSAPP BUTTON */}
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 transition duration-300 px-8 py-4 rounded-xl text-lg font-semibold shadow-xl hover:scale-105 text-white"
            >
              <FaWhatsapp className="text-3xl" />
              <span>WhatsApp Us</span>
            </a>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-6 mt-12 max-w-2xl">
            <div>
              <h3 className="text-3xl font-bold text-yellow-400">100+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-400">24/7</h3>
              <p className="text-gray-300">Customer Support</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-yellow-400">10+</h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
