
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: 'Tarjimonlik Xizmati',
      description: 'Professional tarjimonlar bilan til muammolarisiz sayohat qiling. Ingliz, rus, arab va boshqa tillarda xizmat.',
      icon: '🗣️',
      features: ['24/7 tarjimon xizmati', 'Turli tillar', 'Professional tajriba', 'Madaniy ma\'lumotlar']
    },
    {
      title: 'Mehmonxona Rezervatsiyasi',
      description: 'Eng yaxshi mehmonxonalarni topish va bron qilish. Har qanday byudjet uchun mos variantlar.',
      icon: '🏨',
      features: ['Eng yaxshi narxlar', 'Turli kategoriyalar', 'Onlayn bron', 'Bekor qilish imkoniyati']
    },
    {
      title: 'Transport Xizmati',
      description: 'Xavfsiz va qulay transport. Aeroportdan olib ketish, shahar bo\'ylab sayohat va boshqalar.',
      icon: '🚗',
      features: ['Airport transfer', 'Shahar sayohati', 'Xavfsiz haydovchilar', 'Zamonaviy avtomobillar']
    }
  ];

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
            <Card key={index} className="h-full hover:shadow-xl transition-shadow duration-300 border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="text-6xl mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-bold text-gray-900">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
