import React, { useRef, useState } from "react";

import { Phone, Mail, MessageCircle, Sun } from "lucide-react";

import emailjs from "@emailjs/browser";

function ContactUs() {
  const form = useRef();

  const [loading, setLoading] = useState(false);

  const phoneNumber = "27738715044";

  const message = "Hello, I am interested in your solar and lithium solutions.";

  const encodedMessage = encodeURIComponent(message);

  // CALL FUNCTION
  const callNow = () => {
    window.location.href = `tel:+${phoneNumber}`;
  };

  // EMAIL JS
  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);

    emailjs
      .sendForm(
        "service_wka3g7s",
        "template_l7ysijd",
        form.current,
        "zcHvdMDTRE0XNKDJC",
      )
      .then(
        () => {
          alert("Message sent successfully!");

          form.current.reset();

          setLoading(false);
        },
        (error) => {
          console.log(error.text);

          alert("Failed to send message.");

          setLoading(false);
        },
      );
  };

  return (
    <section className="relative py-24 px-6 overflow-hidden" id="contact">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"></div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10">
        {/* HEADER */}
        <div className="max-w-5xl mx-auto text-center mb-16">
          <p className="text-yellow-400 uppercase tracking-[4px] font-semibold mb-4">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Request Your Free Solar Consultation
          </h2>

          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to reduce electricity costs and gain energy independence?
            Contact DC Solar & Lithium for professional solar panel, inverter,
            and lithium battery solutions.
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          {/* CONTACT INFO */}
          <div className="space-y-6">
            {/* PHONE */}
            <button
              onClick={callNow}
              className="w-full bg-white/5 hover:bg-white/10 transition backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex items-center gap-4 shadow-lg text-left"
            >
              <div className="bg-gradient-to-br from-yellow-400 to-blue-600 p-4 rounded-xl">
                <Phone className="text-white" />
              </div>

              <div>
                <p className="font-semibold text-white text-lg">Call Us</p>

                <p className="text-gray-300">073 871 5044</p>
              </div>
            </button>

            {/* EMAIL */}
            <a
              href="mailto:info@dcsolar.co.za"
              className="w-full bg-white/5 hover:bg-white/10 transition backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex items-center gap-4 shadow-lg"
            >
              <div className="bg-gradient-to-br from-yellow-400 to-blue-600 p-4 rounded-xl">
                <Mail className="text-white" />
              </div>

              <div>
                <p className="font-semibold text-white text-lg">Email Us</p>

                <p className="text-gray-300">info@dcsolar.co.za</p>
              </div>
            </a>

            {/* WHATSAPP */}
            <a
              href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white/5 hover:bg-white/10 transition backdrop-blur-xl border border-white/10 p-6 rounded-2xl flex items-center gap-4 shadow-lg"
            >
              <div className="bg-gradient-to-br from-green-500 to-green-700 p-4 rounded-xl">
                <MessageCircle className="text-white" />
              </div>

              <div>
                <p className="font-semibold text-white text-lg">WhatsApp Us</p>

                <p className="text-green-400">Start Conversation</p>
              </div>
            </a>

            {/* FREE QUOTE CARD */}
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-3xl p-6 text-slate-900 shadow-xl">
              <Sun size={40} className="mb-4" />

              <h3 className="text-2xl font-bold mb-3">Free Solar Assessment</h3>

              <p className="leading-relaxed">
                Get a free consultation and discover how much you can save with
                a professionally designed solar and lithium system.
              </p>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl space-y-5"
          >
            {/* NAME */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm">
                Full Name
              </label>

              <input
                type="text"
                name="user_name"
                placeholder="Enter your full name"
                className="w-full p-4 rounded-xl bg-slate-900/80 text-white border border-slate-700 outline-none focus:border-yellow-400 transition"
                required
              />
            </div>

            {/* EMAIL */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm">
                Email Address
              </label>

              <input
                type="email"
                name="user_email"
                placeholder="you@example.com"
                className="w-full p-4 rounded-xl bg-slate-900/80 text-white border border-slate-700 outline-none focus:border-yellow-400 transition"
                required
              />
            </div>

            {/* PHONE */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm">
                Phone Number
              </label>

              <input
                type="text"
                name="user_phone"
                placeholder="081 234 5678"
                className="w-full p-4 rounded-xl bg-slate-900/80 text-white border border-slate-700 outline-none focus:border-yellow-400 transition"
                required
              />
            </div>

            {/* SERVICE TYPE */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm">
                Service Required
              </label>

              <select
                name="service"
                className="w-full p-4 rounded-xl bg-slate-900/80 text-white border border-slate-700 outline-none focus:border-yellow-400 transition"
              >
                <option>Solar Installation</option>
                <option>Lithium Battery System</option>
                <option>Inverter Installation</option>
                <option>Backup Power Solution</option>
                <option>Maintenance & Repairs</option>
                <option>Commercial Solar Project</option>
              </select>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-gray-300 mb-2 text-sm">
                Project Details
              </label>

              <textarea
                name="message"
                placeholder="Tell us about your property, electricity usage, or project requirements..."
                className="w-full p-4 rounded-xl bg-slate-900/80 text-white border border-slate-700 min-h-[140px] outline-none focus:border-yellow-400 transition"
                required
              ></textarea>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:opacity-90 transition py-4 rounded-xl text-slate-900 font-bold text-lg shadow-lg"
            >
              {loading ? "Sending..." : "Request Free Quote"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
