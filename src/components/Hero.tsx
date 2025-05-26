
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2600&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-amber-900/60"></div>
      </div>
      
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          O'zbekiston bo'ylab
          <span className="block text-amber-300">Unutilmas Sayohat</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-fade-in">
          Ipak yo'li merosi, qadimiy shahirlar va zamonaviy qulayliklar bilan tanishing. 
          Biz sizga eng yaxshi sayohat tajribasini taqdim etamiz.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Sayohatni Boshlash
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg font-semibold rounded-full transition-all duration-200"
          >
            Xizmatlarni Ko'rish
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
