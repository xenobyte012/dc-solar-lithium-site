import React from "react";
import { FaWhatsapp, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "WhatsApp",
      icon: FaWhatsapp,
      url: "https://wa.me/27738715044",
      color: "hover:text-green-400",
    },
    {
      name: "Facebook",
      icon: FaFacebook,
      url: "#",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: FaInstagram,
      url: "#",
      color: "hover:text-pink-400",
    },
    {
      name: "TikTok",
      icon: FaTiktok,
      url: "#",
      color: "hover:text-yellow-400",
    },
  ];

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Why Choose Us", href: "#about" },
    { name: "About Us", href: "#about-us" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Projects", href: "#projects" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative py-20 px-6 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900"></div>

      {/* GLOW EFFECTS */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-yellow-500/20 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* COMPANY INFO */}
          <div>
            <h3 className="text-3xl font-extrabold text-white mb-4">
              <span className="text-yellow-400">DC Solar</span> & Lithium
            </h3>

            <p className="text-gray-300 leading-relaxed">
              Providing professional solar panel installations, lithium battery
              systems, inverters, and backup power solutions for homes and
              businesses. Power your future with clean, reliable energy.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-yellow-400 transition duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-4">
              Contact Information
            </h4>

            <div className="space-y-3 text-gray-300">
              <p>📍 South Africa</p>

              <p>📞 073 871 5044</p>

              <p>📧 info@dcsolar.co.za</p>
            </div>

            {/* SOCIAL MEDIA */}
            <div className="flex gap-5 mt-8">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className={`text-white transition-all duration-300 transform hover:scale-110 ${social.color}`}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* CTA SECTION */}
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready To Switch To Solar?
          </h3>

          <p className="text-gray-300 max-w-2xl mx-auto mb-6">
            Get a free consultation and discover how much you can save with
            solar energy and lithium battery storage solutions.
          </p>

          <a
            href="https://wa.me/27738715044"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold px-8 py-4 rounded-xl transition duration-300"
          >
            <FaWhatsapp size={24} />
            Get Free Quote
          </a>
        </div>

        {/* BOTTOM BAR */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {currentYear} DC Solar & Lithium. All rights reserved.</p>

          <p>
            Designed & Developed by{" "}
            <span className="font-semibold text-yellow-400">
              Xenobyte Web Studio
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
