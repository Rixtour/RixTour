import React from "react";
import { Phone, Mail, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Bosh sahifa", href: "#hero" },
    { name: "Haqimizda", href: "#about" },
    { name: "Xizmatlar", href: "#services" },
    { name: "Joylar", href: "#places" },
  ];

  const services = [
    { name: "Tarjimonlik", href: "#services" },
    { name: "Mehmonxona", href: "#hotels" },
    { name: "Transport", href: "#transportation" },
    { name: "Ekskursiya", href: "#places" },
  ];

  const destinations = [
    { name: "Samarqand", href: "#places" },
    { name: "Buxoro", href: "#places" },
    { name: "Xiva", href: "#places" },
    { name: "Toshkent", href: "#places" },
  ];

  const handlepush = () => {
    window.open("https://t.me/Alisher_Gulomov", "_blank");
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
              O'zbekiston Sayohat
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              O'zbekistonning eng yaxshi sayohat agentligi. Biz sizga eng yaxshi
              xizmat va unutilmas tajribalar taqdim etamiz.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-blue-400" />
                <span>+998 97 332 42 42</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-blue-400" />
                <span>jamoldinov42@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-3 text-blue-400" />
                <span>Tashkent shahar, Bobur ko'chasi, 42-uy</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Tezkor Havolalar
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Xizmatlar</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Mashhur Joylar
            </h4>
            <ul className="space-y-2">
              {destinations.map((destination) => (
                <li key={destination.name}>
                  <a
                    href={destination.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {destination.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              <p className="flex items-center">
                © 2025 O'zbekiston Sayohat. Barcha huquqlar himoyalangan.
              </p>
            </div>
            <div className="flex gap-1">
              <p>Created by</p>
              <div
                onClick={handlepush}
                className="text-blue-700 cursor-pointer"
              >
                Digital Solutions Group
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
