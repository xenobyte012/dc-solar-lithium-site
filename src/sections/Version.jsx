import React from "react";
import ourGoalsImage from '../images/ct (2).jpg' 
function Version() {

return (
  <section className="bg-background-1 py-12 px-6">
    <div className="max-w-6xl mx-auto text-center ">
      <h2 className="text-4xl font-bold mb-4 text-normal-text-1 leading-tight pb-10 ">
        What Makes Our Service Different
      </h2>
      <div className=" grid md:grid-cols-3 lg:grid-cols-2 gap-8">
        <div className="bg-slate-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition max-h-45">
          <h3 className="text-xl text-sub-heading-2 font-semibold mb-2">
            Vision
          </h3>
          <p className="text-normal-text-2">
            A world where every learner — regardless of background — has access
            to education that sparks curiosity and prepares them for life beyond
            the classroom.
          </p>
        </div>
        <div className="bg-slate-900 p-6 rounded-xl shadow-xl hover:shadow-2xl  transition max-h-45">
          <h3 className="text-xl text-sub-heading-2 font-semibold mb-2">
            Mission
          </h3>
          <p className="text-normal-text-2">
            To deliver accessible, high‑impact tutoring that builds academic
            mastery, critical thinking, and unstoppable confidence.
          </p>
        </div>

        <div className="bg-slate-900 p-6 rounded-xl shadow-xl hover:shadow-2xl transition">
          <h3 className="text-xl text-sub-heading-2 font-semibold mb-2">
            Goals
          </h3>
          <div className="text-normal-text-2 text-left">
            <p className="pb-2">
              📘 Excellence – We set high standards, then go beyond them.
            </p>
            <p className="pb-2">
              🤝 Integrity – Honest communication, transparent pricing, no
              surprises.
            </p>
            <p className="pb-2">
              🚀 Growth – We celebrate progress, not just perfection.
            </p>
            <p className="pb-2">
              💡 Innovation – Modern methods, interactive tools, real
              engagement.
            </p>
            <p className="pb-2">
              ❤️ Community – A welcoming space where students and families
              belong.
            </p>
          </div>
        </div>
        <div className="hidden md:block">
          <img src={ourGoalsImage} className="w-full h-full" />
        </div>
      </div>
    </div>
  </section>
);
}
export default Version;