import React from "react";
import ourGoalsImage from "../images/ct (2).jpg";

function CoreValues() {
  return (
    <section
      id="about"
      className="bg-background-2 text-normal-text-2 py-10  px-4 flex  justify-center text-center"
    >
      <div className="text-left">
        <h1 className="text-4xl font-bold text-center pb-8 pt-6 text-gray-50 leading-tight">
          Core Values
        </h1>
        <p className="text-2xl font-bold text-sub-heading-2 ">What Guides Us</p>

        <div className="grid md:grid-cols-2  pt-6 text-left">
          <div className="flex flex-col gap-6 text-left ">
            <div>
              <h1 className="text-xl font-semibold pb-2 text-subheading-2">
                � Excellence
              </h1>
              <p className="pl-6 text-gray-300">
                We set high standards, then go beyond them.
              </p>
            </div>
            <div>
              <h1 className="text-xl font-semibold pb-2 text-subheading-2">
                🤝 Integrity
              </h1>
              <p className="pl-6 text-gray-300">
                Honest communication, transparent pricing, no surprises.
              </p>
            </div>
            <div>
              <h1 className="text-xl font-semibold pb-2 text-subheading-2">
                � Growth
              </h1>
              <p className="pl-6 text-300">
                We celebrate progress, not just perfection
              </p>
            </div>
            <div className="pt-2">
              <h1 className="text-xl font-semibold pb-2 text-subheading-2">
                💡 Innovation
              </h1>
              <p className="pl-6 text-300">
                Modern methods, interactive tools, real engagement.
              </p>
            </div>
            <div className="pt-2">
              <h1 className="text-xl font-semibold pb-2 text-subheading-2">
                ❤️ Community
              </h1>
              <p className="pl-6 text-300">
                A welcoming space where students and families belong.
              </p>
            </div>
          </div>
         
                    <div className="hidden md:block  pt-2 ">
            <img
              loading="lazy"
              src={ourGoalsImage}
              alt="our goal images"
              className="rounded-xl object-cover shadow-2xl w-full h-full"
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default CoreValues;
