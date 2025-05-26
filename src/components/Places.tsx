
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

const Places = () => {
  const places = [
    {
      name: 'Samarqand',
      description: 'Registon maydoni va Temur maqbarasi bilan mashhur qadimiy shahar',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Registon maydoni', 'Bibi Xonim masjidi', 'Shah-i Zinda maqbarasi']
    },
    {
      name: 'Buxoro',
      description: 'Qadimiy Ipak yo\'li shahri, UNESCO merosi',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Ark qal\'asi', 'Kalon minorasi', 'Chor Minor']
    },
    {
      name: 'Xiva',
      description: 'Ichon Qala - ochiq osmon ostidagi muzeyi',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Ichon Qala', 'Kalta Minor', 'Tosh Hovli saroyi']
    },
    {
      name: 'Toshkent',
      description: 'O\'zbekistonning zamonaviy poytaxti',
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Chorsu bozori', 'Mustaqillik maydoni', 'Zamonaviy arxitektura']
    }
  ];

  return (
    <section id="places" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Mashhur Joylar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O'zbekistonning eng go'zal va tarixiy joylarini kashf eting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {places.map((place, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={place.image}
                  alt={place.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{place.name}</h3>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 mb-4">{place.description}</p>
                <div className="space-y-2">
                  {place.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-center text-sm text-gray-700">
                      <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Places;
