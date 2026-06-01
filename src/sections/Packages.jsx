import React from "react";

const pricingPlans = [
  {
    title: "Primary School",
    price: "R250",
    description: "Grade 1 to 7",
    features: [
      "All subjects covered",
      "CAPS aligned content",
      "Exam preparation",
      "Personalized attention",
    ],
    highlight: false,
  },
  {
    title: "Grade 8 - 10",
    price: "R250",
    description: "Per subject",
    features: [
      "1 subject per plan",
      "Structured lessons",
      "Exam-focused learning",
      "Extra practice support",
    ],
    highlight: false,
  },

  {
    title: "Online Classes (Gr 11 & 12)",
    price: "R450",
    description: "2 subjects",
    features: [
      "Live online sessions",
      "Flexible schedule",
      "Recorded lessons (optional)",
      "Learn from anywhere",
    ],
    highlight: false,
  },
];
export default function Pricing() {
    const scrollToContact = () => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    };
  return (
    <section className="bg-background-2 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our Pricing Plans
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Flexible and affordable tutoring plans designed to help every student
          succeed.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-lg border bg-slate-800 border-slate-700 "
          >
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-sm mb-4 opacity-80">{plan.description}</p>
            <div className="text-3xl font-bold mb-4">
              {plan.price}
              <span className="text-sm font-normal"> / month</span>
            </div>
            <ul className="space-y-2 text-sm mb-6">
              {plan.features.map((feature, i) => (
                <li key={i}>✔ {feature}</li>
              ))}
            </ul>
            <button
              onClick={scrollToContact}
              className="w-full py-2 rounded-xl font-semibold bg-amber-500 text-heading-2"
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
