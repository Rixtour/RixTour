
import React from 'react';
import { Users, Award, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Users,
      number: '5000+',
      label: 'Mamnun Mijozlar'
    },
    {
      icon: Award,
      number: '15+',
      label: 'Yillik Tajriba'
    },
    {
      icon: Globe,
      number: '50+',
      label: 'Shaharlar'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Biz Haqimizda
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O'zbekiston sayohat agentligi sifatida biz 15 yildan ortiq vaqt davomida 
            xorijiy va mahalliy turistlarga eng yaxshi xizmatlarni taqdim etib kelmoqdamiz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Nima uchun bizni tanlashingiz kerak?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-600 rounded-full flex-shrink-0 mt-1 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Professional Tarjimonlar</h4>
                  <p className="text-gray-600">Malakali tarjimonlar bilan til to'sig'isiz sayohat qiling</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-amber-600 rounded-full flex-shrink-0 mt-1 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Eng Yaxshi Mehmonxonalar</h4>
                  <p className="text-gray-600">Har bir byudjet uchun qulay va sifatli turar joylar</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-600 rounded-full flex-shrink-0 mt-1 mr-4"></div>
                <div>
                  <h4 className="font-semibold text-gray-900">Xavfsiz Transport</h4>
                  <p className="text-gray-600">Zamonaviy va xavfsiz transport vositalari</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="O'zbekiston landshafti"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gradient-to-br from-blue-50 to-amber-50 rounded-xl">
              <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
