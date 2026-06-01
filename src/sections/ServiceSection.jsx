import React from "react";
import {
  Sun,
  BatteryCharging,
  Zap,
  Building2,
  Wrench,
  ShieldCheck,
  Lightbulb,
  Cpu,
} from "lucide-react";

const features = [
  {
    title: "Solar Panel Installation",
    icon: Sun,
    description:
      "Professional solar panel installations designed to reduce electricity costs and maximize energy efficiency.",
  },
  {
    title: "Lithium Battery Systems",
    icon: BatteryCharging,
    description:
      "Reliable lithium battery storage solutions for uninterrupted power during load shedding and outages.",
  },
  {
    title: "Inverter Installation",
    icon: Zap,
    description:
      "Supply and installation of high-performance inverters for residential and commercial properties.",
  },
  {
    title: "Commercial Solar Solutions",
    icon: Building2,
    description:
      "Custom solar energy systems tailored for businesses, offices, warehouses, and industrial facilities.",
  },
  {
    title: "System Maintenance",
    icon: Wrench,
    description:
      "Regular inspections, maintenance, and troubleshooting to keep your solar system performing at its best.",
  },
  {
    title: "Backup Power Solutions",
    icon: ShieldCheck,
    description:
      "Reliable backup power systems that keep your home or business running during power interruptions.",
  },
  {
    title: "Energy Efficiency Consulting",
    icon: Lightbulb,
    description:
      "Professional advice on reducing electricity consumption and improving energy efficiency.",
  },
  {
    title: "Monitoring & Upgrades",
    icon: Cpu,
    description:
      "Advanced monitoring systems and solar upgrades to improve performance and long-term savings.",
  },
];

function ServiceSection() {
  return (
    <section id="services" className="relative py-24 px-6 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-slate-950 to-slate-900"></div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-[4px] font-semibold mb-4">
            Our Services
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Complete Solar & Energy Solutions
          </h2>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
            We provide professional solar installations, lithium battery
            systems, backup power solutions, and energy-saving technologies for
            homes and businesses.
          </p>
        </div>

        {/* SERVICE CARDS */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:-translate-y-2 hover:border-yellow-400 transition-all duration-300 shadow-xl"
              >
                <div className="flex flex-row gap-4">
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
                <p className="text-gray-300 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ServiceSection;
