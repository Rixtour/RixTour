
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const { toast } = useToast();

  const services = [
    {
      title: 'Tarjimonlik Xizmati',
      description: 'Professional tarjimonlar bilan til muammolarisiz sayohat qiling. Ingliz, rus, arab va boshqa tillarda xizmat.',
      icon: '🗣️',
      features: ['24/7 tarjimon xizmati', 'Turli tillar', 'Professional tajriba', 'Madaniy ma\'lumotlar'],
      price: 'dan $25/kun'
    },
    {
      title: 'Mehmonxona Rezervatsiyasi',
      description: 'Eng yaxshi mehmonxonalarni topish va bron qilish. Har qanday byudjet uchun mos variantlar.',
      icon: '🏨',
      features: ['Eng yaxshi narxlar', 'Turli kategoriyalar', 'Onlayn bron', 'Bekor qilish imkoniyati'],
      price: 'dan $50/kecha'
    },
    {
      title: 'Transport Xizmati',
      description: 'Xavfsiz va qulay transport. Aeroportdan olib ketish, shahar bo\'ylab sayohat va boshqalar.',
      icon: '🚗',
      features: ['Airport transfer', 'Shahar sayohati', 'Xavfsiz haydovchilar', 'Zamonaviy avtomobillar'],
      price: 'dan $15/soat'
    }
  ];

  const handleServiceSelect = (index: number) => {
    setSelectedService(selectedService === index ? null : index);
  };

  const handleBookService = (serviceName: string) => {
    toast({
      title: "Xizmat tanlandi!",
      description: `${serviceName} uchun so'rov yuborildi. Tez orada siz bilan bog'lanamiz.`,
    });
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Bizning Xizmatlarimiz
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sayohatingizni mukammal qilish uchun barcha kerakli xizmatlarni taqdim etamiz
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`h-full cursor-pointer transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm transform hover:-translate-y-2 ${
                selectedService === index 
                  ? 'shadow-2xl ring-4 ring-blue-400 ring-opacity-50' 
                  : 'hover:shadow-xl'
              }`}
              onClick={() => handleServiceSelect(index)}
            >
              <CardHeader className="text-center">
                <div className="text-6xl mb-4 transform transition-transform hover:scale-110">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
                <div className="text-2xl font-bold text-blue-600 mt-2">
                  {service.price}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookService(service.title);
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-200 transform hover:scale-105"
                >
                  Xizmatni Tanlash
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
