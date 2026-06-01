import React from "react";
import {
  Sun,
  BatteryCharging,
  ShieldCheck,
  BadgeCheck,
  DollarSign,
  Wrench,
} from "lucide-react";

const features = [
  {
    icon: Sun,
    title: "Professional Solar Installations",
    description:
      "Custom-designed solar energy systems for homes and businesses, built for maximum efficiency and long-term savings.",
  },
  {
    icon: BatteryCharging,
    title: "Premium Lithium Batteries",
    description:
      "Reliable lithium battery storage solutions that keep your lights on during load shedding and power outages.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description:
      "We use trusted solar components and industry-leading installation practices for lasting performance.",
  },
  {
    icon: DollarSign,
    title: "Reduce Energy Costs",
    description:
      "Lower your monthly electricity bills with efficient solar and backup power solutions tailored to your needs.",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description:
      "From system inspections to upgrades and repairs, we provide ongoing support to keep your system running optimally.",
  },
  {
    icon: BadgeCheck,
    title: "Trusted Energy Partner",
    description:
      "Committed to delivering reliable energy solutions, excellent workmanship, and outstanding customer service.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"></div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-[4px] font-semibold mb-4">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Reliable Solar & Energy Experts
          </h2>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
            DC Solar & Lithium provides professional solar installations,
            lithium battery systems, and backup power solutions designed to
            deliver energy independence, long-term savings, and peace of mind.
          </p>
        </div>

        {/* FEATURE GRID */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:-translate-y-2 hover:border-yellow-400 transition-all duration-300 shadow-xl"
              >
                <div className="flex flex-row gap-6">
                  {/* ICON */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-blue-600 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition duration-300">
                    <Icon size={30} className="text-white" />
                  </div>

                  <div>
                    {/* TITLE */}
                    <h3 className="text-xl font-bold text-white mb-4">
                      {feature.title}
                    </h3>
                  </div>
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* BOTTOM STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-yellow-400">100+</h3>
            <p className="text-gray-300 mt-2">Projects Completed</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-yellow-400">24/7</h3>
            <p className="text-gray-300 mt-2">Customer Support</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-yellow-400">98%</h3>
            <p className="text-gray-300 mt-2">Customer Satisfaction</p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center">
            <h3 className="text-3xl font-bold text-yellow-400">10+</h3>
            <p className="text-gray-300 mt-2">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  );
}
