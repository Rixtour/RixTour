
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmad Karimov',
      location: 'Germaniya',
      rating: 5,
      text: 'O\'zbekistonga sayohatim juda ajoyib o\'tdi. Tarjimon xizmati va transport juda yaxshi edi. Barcha joylarni ko\'rib chiqdim va juda mamnunman.',
      avatar: '👨‍💼'
    },
    {
      name: 'Sarah Johnson',
      location: 'AQSH',
      rating: 5,
      text: 'Fantastic experience! The translation service was professional and the hotels were amazing. I felt safe and comfortable throughout my trip to Uzbekistan.',
      avatar: '👩‍💻'
    },
    {
      name: 'Mohammed Ali',
      location: 'Saudiya Arabistoni',
      rating: 5,
      text: 'خدمة ممتازة ومرشدين محترفين. استمتعت كثيراً بزيارة سمرقند وبخارى. أنصح الجميع بهذه الشركة للسياحة في أوزبكستان.',
      avatar: '👨‍🎓'
    },
    {
      name: 'Elena Petrov',
      location: 'Rossiya',
      rating: 5,
      text: 'Отличная организация поездки! Все было на высшем уровне - от встречи в аэропорту до проводов. Хочу вернуться в Узбекистан снова.',
      avatar: '👩‍🎨'
    },
    {
      name: 'Chen Wei',
      location: 'Xitoy',
      rating: 5,
      text: '非常棒的旅行体验！导游很专业，酒店很舒适，交通很方便。丝绸之路的历史让我印象深刻。强烈推荐这家旅行社！',
      avatar: '👨‍🔬'
    },
    {
      name: 'Fatima Hassan',
      location: 'Turkiya',
      rating: 5,
      text: 'Harika bir deneyimdi! Rehberler çok bilgiliydi ve her şey mükemmel organize edilmişti. Özbekistan\'ın güzelliğini keşfetmek için mükemmel bir seçim.',
      avatar: '👩‍⚕️'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mijozlarimiz Fikri
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dunyo bo'ylab mijozlarimizning O'zbekiston sayohati haqidagi fikrlari
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full bg-white/80 backdrop-blur-sm hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-3">{testimonial.avatar}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                </div>
                
                <div className="relative">
                  <Quote className="w-8 h-8 text-gray-300 absolute -top-2 -left-2" />
                  <p className="text-gray-700 italic pl-6">{testimonial.text}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
