
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Star, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Places = () => {
  const [selectedPlace, setSelectedPlace] = useState<number | null>(null);
  const { toast } = useToast();

  const places = [
    {
      name: 'Samarqand',
      description: 'Registon maydoni va Temur maqbarasi bilan mashhur qadimiy shahar',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Registon maydoni', 'Bibi Xonim masjidi', 'Shah-i Zinda maqbarasi'],
      rating: 4.9,
      duration: '2-3 kun',
      price: 'dan $150'
    },
    {
      name: 'Buxoro',
      description: 'Qadimiy Ipak yo\'li shahri, UNESCO merosi',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Ark qal\'asi', 'Kalon minorasi', 'Chor Minor'],
      rating: 4.8,
      duration: '2-3 kun',
      price: 'dan $130'
    },
    {
      name: 'Xiva',
      description: 'Ichon Qala - ochiq osmon ostidagi muzeyi',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Ichon Qala', 'Kalta Minor', 'Tosh Hovli saroyi'],
      rating: 4.7,
      duration: '1-2 kun',
      price: 'dan $120'
    },
    {
      name: 'Toshkent',
      description: 'O\'zbekistonning zamonaviy poytaxti',
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      highlights: ['Chorsu bozori', 'Mustaqillik maydoni', 'Zamonaviy arxitektura'],
      rating: 4.6,
      duration: '1-2 kun',
      price: 'dan $100'
    }
  ];

  const handlePlaceSelect = (index: number) => {
    setSelectedPlace(selectedPlace === index ? null : index);
  };

  const handleBookTour = (placeName: string) => {
    toast({
      title: "Tur tanlandi!",
      description: `${placeName}ga sayohat uchun so'rov yuborildi. Tez orada tur haqida batafsil ma'lumot beramiz.`,
    });
  };

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
            <Card 
              key={index} 
              className={`group overflow-hidden cursor-pointer transition-all duration-300 transform ${
                selectedPlace === index 
                  ? 'shadow-2xl scale-105 ring-4 ring-blue-400 ring-opacity-50' 
                  : 'hover:shadow-2xl hover:-translate-y-2'
              }`}
              onClick={() => handlePlaceSelect(index)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={place.image}
                  alt={place.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="ml-1 text-sm font-semibold">{place.rating}</span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">{place.name}</h3>
                  <div className="flex items-center mt-1">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{place.duration}</span>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 mb-4">{place.description}</p>
                <div className="space-y-2 mb-4">
                  {place.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-center text-sm text-gray-700">
                      <MapPin className="w-4 h-4 text-blue-600 mr-2" />
                      {highlight}
                    </div>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-lg font-bold text-blue-600">{place.price}</div>
                  <Button 
                    onClick={(e) => {
                      e.stopPropagation();
                      handleBookTour(place.name);
                    }}
                    size="sm"
                    className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-lg transition-all duration-200"
                  >
                    Tanlash
                  </Button>
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
