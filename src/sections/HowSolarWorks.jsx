import React from "react";
import { ClipboardCheck, Sun, BatteryCharging, Zap } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Free Site Assessment",
    description:
      "Our team evaluates your property, energy usage, and power requirements to recommend the ideal solar and lithium solution.",
  },
  {
    icon: Sun,
    title: "Solar Panel Installation",
    description:
      "High-quality solar panels are professionally installed to capture sunlight and generate clean renewable energy.",
  },
  {
    icon: BatteryCharging,
    title: "Lithium Battery Setup",
    description:
      "Advanced lithium batteries are installed to store excess solar energy for use at night and during load shedding.",
  },
  {
    icon: Zap,
    title: "Power & Savings",
    description:
      "Your system begins producing electricity, reducing your energy costs while providing reliable backup power when needed.",
  },
];

function HowSolarWorks() {
  return (
    <section id="how-it-works" className="relative py-24 px-6 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"></div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-20">
          <p className="text-yellow-400 uppercase tracking-[4px] font-semibold mb-4">
            How It Works
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            How Solar & Lithium Systems Work
          </h2>

          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
            Our process is designed to provide reliable, cost-effective, and
            sustainable energy solutions for homes and businesses.
          </p>
        </div>

        {/* STEPS */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:-translate-y-2 hover:border-yellow-400 transition-all duration-300"
              >
                {/* STEP NUMBER */}
                <div className="absolute -top-4 -right-4 w-10 h-10 rounded-full bg-yellow-400 text-slate-900 font-bold flex items-center justify-center">
                  {index + 1}
                </div>

                {/* ICON */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-blue-600 flex items-center justify-center mb-6 shadow-lg">
                  <Icon size={30} className="text-white" />
                </div>

                {/* TITLE */}
                <h3 className="text-xl font-bold text-white mb-4">
                  {step.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* BOTTOM EXPLANATION */}
        <div className="mt-20 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-white mb-6 text-center">
            The Benefits of Solar & Lithium
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-yellow-400 text-2xl font-bold mb-3">
                Lower Bills
              </h4>

              <p className="text-gray-300">
                Generate your own electricity and reduce monthly energy costs.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-yellow-400 text-2xl font-bold mb-3">
                Backup Power
              </h4>

              <p className="text-gray-300">
                Stay powered during load shedding and unexpected outages.
              </p>
            </div>

            <div className="text-center">
              <h4 className="text-yellow-400 text-2xl font-bold mb-3">
                Sustainable Energy
              </h4>

              <p className="text-gray-300">
                Reduce your environmental impact with clean renewable energy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowSolarWorks;
