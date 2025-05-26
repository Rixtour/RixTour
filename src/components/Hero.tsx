import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Sparkles } from "lucide-react";

const Hero = () => {
  const handleStartJourney = () => {
    window.open("https://t.me/llaazzzizz", "_blank");
  };

  const handleViewServices = () => {
    const servicesSection = document.querySelector("#services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollDown = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/90 via-purple-900/80 to-pink-900/70"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="flex items-center justify-center mb-6 animate-fade-in">
          <Sparkles className="w-8 h-8 text-yellow-400 mr-3" />
          <span className="text-lg font-medium bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
            Premium Sayohat Xizmatlari
          </span>
          <Sparkles className="w-8 h-8 text-yellow-400 ml-3" />
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold mb-7 animate-fade-in">
          O'zbekiston bo'ylab
          <span className="block bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent p-2">
            Ajoyib Sayohat
          </span>
        </h1>

        <p className="text-xl md:text-2xl mb-12 text-gray-100 animate-fade-in opacity-90 max-w-3xl mx-auto leading-relaxed">
          Ipak yo'li merosi, qadimiy shaharlar va zamonaviy qulayliklar bilan
          tanishing. Professional xizmatlarimiz bilan eng yaxshi sayohat
          tajribasini yasang.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
          <Button
            onClick={handleStartJourney}
            size="lg"
            className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 hover:from-purple-700 hover:via-pink-700 hover:to-red-700 text-white px-10 py-6 text-xl font-bold rounded-2xl shadow-2xl transform hover:scale-110 transition-all duration-300 hover:shadow-purple-500/25 border-2 border-white/20"
          >
            <Sparkles className="w-6 h-6 mr-2" />
            Sayohatni Boshlash
          </Button>
          <Button
            onClick={handleViewServices}
            size="lg"
            variant="outline"
            className="border-3 border-white/40 text-black hover:text-gray-50 hover:bg-white/10 backdrop-blur-sm px-10 py-6 text-xl font-bold rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:border-white/60"
          >
            Xizmatlarni Ko'rish
          </Button>
        </div>
      </div>

      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:scale-125 transition-transform duration-1000"
      >
        <div className="w-12 h-16 border-3 border-white/50 rounded-full flex justify-center items-center hover:border-yellow-300 transition-colors backdrop-blur-sm bg-white/10">
          <ChevronDown className="w-6 h-6 text-white animate-pulse" />
        </div>
      </button>
    </section>
  );
};

export default Hero;
