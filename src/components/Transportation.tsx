
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Transportation = () => {
  const transportOptions = [
    {
      type: 'Airport Transfer',
      description: 'Aeroportdan mehmonxonaga va aksincha qulay transfer xizmati',
      icon: '✈️',
      features: ['24/7 xizmat', 'Puchta kutish', 'Zamonaviy avtomobillar', 'Professional haydovchilar'],
      price: 'dan $15'
    },
    {
      type: 'Shahar Bo\'ylab Sayohat',
      description: 'Shahardagi barcha diqqatga sazovor joylarni ko\'rib chiqish',
      icon: '🚗',
      features: ['Gid xizmati', 'Moslashuvchan vaqt', 'Qulaylik', 'Foto to\'xtashlari'],
      price: 'dan $30'
    },
    {
      type: 'Shaharlararo Transfer',
      description: 'Samarqand, Buxoro, Xiva va boshqa shaharlar orasida sayohat',
      icon: '🚌',
      features: ['Qulay avtobuslar', 'Xavfsizlik', 'To\'xtash joylari', 'Gid ma\'lumotlari'],
      price: 'dan $50'
    },
    {
      type: 'VIP Transport',
      description: 'Hashamatli avtomobillar bilan maxsus xizmat',
      icon: '🚙',
      features: ['Premium avtomobillar', 'Shaxsiy haydovchi', 'Wi-Fi', 'Ichimliklar'],
      price: 'dan $80'
    }
  ];

  return (
    <section id="transportation" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Transport Xizmatlari
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Xavfsiz va qulay transport bilan O'zbekiston bo'ylab sayohat qiling
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {transportOptions.map((option, index) => (
            <Card key={index} className="h-full hover:shadow-xl transition-shadow duration-300 border-2 border-transparent hover:border-blue-200">
              <CardHeader className="text-center">
                <div className="text-5xl mb-4">{option.icon}</div>
                <CardTitle className="text-lg">{option.type}</CardTitle>
                <p className="text-gray-600 text-sm">{option.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-blue-600">{option.price}</div>
                </div>
                
                <div className="space-y-2">
                  {option.features.map((feature, fIndex) => (
                    <div key={fIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Maxsus Takliflar</h3>
          <p className="text-lg mb-6">
            Bir necha kunlik sayohat uchun transport xizmatlariga chegirmalar!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl font-bold">-15%</div>
              <div>3-5 kunlik sayohat</div>
            </div>
            <div>
              <div className="text-3xl font-bold">-25%</div>
              <div>6-10 kunlik sayohat</div>
            </div>
            <div>
              <div className="text-3xl font-bold">-35%</div>
              <div>10+ kunlik sayohat</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transportation;
