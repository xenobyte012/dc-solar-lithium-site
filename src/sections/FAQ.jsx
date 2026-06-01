import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much can I save with solar?",
    answer:
      "Savings depend on your electricity usage, but many customers significantly reduce their monthly electricity bills.",
  },
  {
    question: "Do solar panels work during load shedding?",
    answer:
      "With the correct inverter and battery setup, your system can continue powering essential appliances during outages.",
  },
  {
    question: "How long do lithium batteries last?",
    answer:
      "Most quality lithium batteries last between 10 and 15 years depending on usage.",
  },
  {
    question: "Do you offer commercial installations?",
    answer:
      "Yes, we provide solar and battery solutions for homes, businesses, warehouses, and industrial facilities.",
  },
  {
    question: "Do you provide maintenance?",
    answer:
      "Yes, we offer maintenance, inspections, upgrades, and troubleshooting services.",
  },
];

function FAQ() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className="py-24 px-6 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-[4px] font-semibold mb-4">
            FAQ
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="text-white font-semibold">{faq.question}</span>

                <ChevronDown
                  className={`text-yellow-400 transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-gray-300">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
