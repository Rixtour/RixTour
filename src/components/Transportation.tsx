
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Plane, Car, Bus, Crown, Shield, Clock, Star, Wifi } from 'lucide-react';

const Transportation = () => {
  const transportOptions = [
    {
      type: 'VIP Airport Transfer',
      description: 'Luxury avtomobillar bilan aeroportdan mehmonxonaga premium transfer',
      icon: Plane,
      gradient: 'from-blue-500 to-cyan-500',
      features: [
        { text: '24/7 Premium xizmat', icon: Clock },
        { text: 'Puchta VIP kutish', icon: Crown },
        { text: 'Luxury avtomobillar', icon: Star },
        { text: 'Professional haydovchilar', icon: Shield }
      ],
      quality: 'VIP Xizmat'
    },
    {
      type: 'Premium City Tours',
      description: 'Shahardagi barcha diqqatga sazovor joylarni luxury avtomobillar bilan',
      icon: Car,
      gradient: 'from-purple-500 to-pink-500',
      features: [
        { text: 'Professional gid', icon: Star },
        { text: 'Moslashuvchan vaqt', icon: Clock },
        { text: 'Premium qulaylik', icon: Crown },
        { text: 'Foto to\'xtashlari', icon: Shield }
      ],
      quality: 'Premium Tour'
    },
    {
      type: 'Luxury Inter-city',
      description: 'Samarqand, Buxoro, Xiva orasida hashamatli avtobuslar bilan sayohat',
      icon: Bus,
      gradient: 'from-green-500 to-emerald-500',
      features: [
        { text: 'VIP avtobuslar', icon: Star },
        { text: 'Yuqori xavfsizlik', icon: Shield },
        { text: 'Qulay to\'xtashlar', icon: Clock },
        { text: 'Professional gid', icon: Crown }
      ],
      quality: 'Luxury Class'
    },
    {
      type: 'Executive Service',
      description: 'Maxsus tadbirlar uchun eng yuqori darajadagi executive transport',
      icon: Crown,
      gradient: 'from-amber-500 to-orange-500',
      features: [
        { text: 'Executive avtomobillar', icon: Crown },
        { text: 'Shaxsiy haydovchi', icon: Star },
        { text: 'Premium Wi-Fi', icon: Wifi },
        { text: 'VIP xizmatlar', icon: Shield }
      ],
      quality: 'Executive Level'
    }
  ];

  return (
    <section id="transportation" className="py-24 bg-gradient-to-br from-gray-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-gray-100 to-slate-100 rounded-full px-6 py-3 mb-6">
            <Crown className="w-5 h-5 text-gray-600 mr-2" />
            <span className="text-gray-700 font-semibold">Premium Transport</span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-900 via-slate-900 to-zinc-900 bg-clip-text text-transparent mb-6">
            Transport Xizmatlari
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Luxury va professional transport xizmatlari bilan O'zbekiston bo'ylab qulay sayohat qiling
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {transportOptions.map((option, index) => {
            const IconComponent = option.icon;
            return (
              <Card key={index} className="group h-full hover:shadow-2xl transition-all duration-500 border-0 bg-white shadow-lg transform hover:-translate-y-4">
                <CardHeader className="text-center pb-6">
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${option.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  
                  <div className="mb-4">
                    <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${option.gradient} text-white`}>
                      {option.quality}
                    </span>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-gray-900 mb-3">
                    {option.type}
                  </CardTitle>
                  <p className="text-gray-600 text-base leading-relaxed">
                    {option.description}
                  </p>
                </CardHeader>
                
                <CardContent className="px-6 pb-8">
                  <div className="space-y-4">
                    {option.features.map((feature, fIndex) => {
                      const FeatureIcon = feature.icon;
                      return (
                        <div key={fIndex} className="flex items-center text-gray-700">
                          <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${option.gradient} flex items-center justify-center mr-4 shadow-sm`}>
                            <FeatureIcon className="w-4 h-4 text-white" />
                          </div>
                          <span className="font-medium">{feature.text}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center shadow-2xl">
          <Crown className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h3 className="text-4xl font-bold mb-6">Premium Paketlar</h3>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Bir necha kunlik sayohat uchun maxsus premium transport paketlari!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl font-bold mb-2">VIP</div>
              <div className="text-lg">3-5 kunlik premium</div>
            </div>
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-6 transform scale-105">
              <div className="text-4xl font-bold mb-2">LUXURY</div>
              <div className="text-lg">6-10 kunlik hashamat</div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
              <div className="text-4xl font-bold mb-2">EXECUTIVE</div>
              <div className="text-lg">10+ kunlik executive</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transportation;
