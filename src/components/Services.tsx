
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Languages, Hotel, Car, CheckCircle, Star, Globe } from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const { toast } = useToast();

  const services = [
    {
      title: 'Professional Tarjimonlik',
      description: 'Yuqori malakali tarjimonlar bilan til to\'siqlarisiz sayohat qiling.',
      icon: Languages,
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        { text: '24/7 professional xizmat', icon: CheckCircle },
        { text: '10+ til bo\'yicha yordam', icon: Globe },
        { text: 'Madaniy yo\'naltirish', icon: Star },
        { text: 'Audio tarjimon qurilmasi', icon: Languages }
      ],
      quality: 'Premium Sifat'
    },
    {
      title: 'Mehmonxona Rezervatsiyasi',
      description: 'Eng yaxshi mehmonxonalarni topish va professional bron qilish xizmati.',
      icon: Hotel,
      gradient: 'from-purple-500 to-pink-500',
      features: [
        { text: 'Eksklyuziv narxlar', icon: Star },
        { text: 'Turli kategoriya mehmonxonalar', icon: Hotel },
        { text: 'Onlayn bron tizimi', icon: CheckCircle },
        { text: 'Bepul bekor qilish', icon: CheckCircle }
      ],
      quality: 'Ishonchli Hamkor'
    },
    {
      title: 'VIP Transport Xizmati',
      description: 'Xavfsiz va hashamatli transport bilan qulay sayohat.',
      icon: Car,
      gradient: 'from-green-500 to-emerald-500',
      features: [
        { text: 'Luxury avtomobillar', icon: Star },
        { text: 'Tajribali haydovchilar', icon: CheckCircle },
        { text: 'Airport VIP transfer', icon: Car },
        { text: 'Wi-Fi va ichimliklar', icon: CheckCircle }
      ],
      quality: 'Hashamatli Xizmat'
    }
  ];

  const handleServiceSelect = (index: number) => {
    setSelectedService(selectedService === index ? null : index);
  };

  const handleBookService = (serviceName: string) => {
    toast({
      title: "Xizmat tanlandi! ✨",
      description: `${serviceName} uchun so'rov yuborildi. Professional jamoamiz tez orada siz bilan bog'lanadi.`,
    });
  };

  return (
    <section id="services" className="py-24 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3 mb-6">
            <Star className="w-5 h-5 text-purple-600 mr-2" />
            <span className="text-purple-700 font-semibold">Premium Xizmatlar</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 bg-clip-text text-transparent mb-6">
            Bizning Xizmatlarimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Sayohatingizni mukammal qilish uchun professional va yuqori sifatli xizmatlarni taqdim etamiz
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={index} 
                className={`group h-full cursor-pointer transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transform hover:-translate-y-4 ${
                  selectedService === index 
                    ? 'shadow-2xl scale-105 ring-4 ring-purple-400/30' 
                    : ''
                }`}
                onClick={() => handleServiceSelect(index)}
              >
                <CardHeader className="text-center pb-6">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${service.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${service.gradient} text-white`}>
                      {service.quality}
                    </span>
                  </div>
                  
                  <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-lg leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="px-6 pb-8">
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div key={featureIndex} className="flex items-center text-gray-700 group-hover:text-gray-900 transition-colors">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center mr-4 shadow-sm`}>
                            <FeatureIcon className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-medium">{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>
                  
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookService(service.title);
                    }}
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
                  >
                    Xizmatni Tanlash
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
