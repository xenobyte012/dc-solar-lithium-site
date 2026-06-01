import React from "react";
import { Sun, BatteryCharging, Zap } from "lucide-react";

function AboutUs() {
  return (
    <section
      id="about-us"
      className="relative py-24 px-6 overflow-hidden bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div>
            <p className="text-yellow-400 uppercase tracking-[4px] font-semibold mb-4">
              About Us
            </p>

            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              Powering Homes & Businesses With Reliable Energy
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              DC Solar & Lithium specializes in professional solar panel
              installations, lithium battery systems, inverters, and backup
              power solutions. Our mission is to help homes and businesses
              reduce electricity costs while gaining energy independence.
            </p>

            <p className="text-gray-300 leading-relaxed">
              We focus on quality workmanship, trusted products, and long-term
              customer relationships. Whether you need a small residential
              system or a large commercial installation, we deliver solutions
              tailored to your needs.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid gap-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
              <Sun className="text-yellow-400 mb-4" size={40} />
              <h3 className="text-white text-xl font-bold mb-2">
                Solar Installations
              </h3>
              <p className="text-gray-300">
                Efficient solar systems designed for maximum energy savings.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
              <BatteryCharging className="text-yellow-400 mb-4" size={40} />
              <h3 className="text-white text-xl font-bold mb-2">
                Battery Storage
              </h3>
              <p className="text-gray-300">
                Reliable lithium batteries for uninterrupted power.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-3xl">
              <Zap className="text-yellow-400 mb-4" size={40} />
              <h3 className="text-white text-xl font-bold mb-2">
                Backup Solutions
              </h3>
              <p className="text-gray-300">
                Stay protected from load shedding and power outages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
