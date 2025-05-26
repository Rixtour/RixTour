
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, Users, Wifi } from 'lucide-react';

const Hotels = () => {
  const hotels = [
    {
      name: 'Lotte City Hotel Tashkent Palace',
      location: 'Toshkent',
      rating: 5,
      price: 'dan $120',
      image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      amenities: ['Wi-Fi', 'Spa', 'Restoran', 'Fitnes zal']
    },
    {
      name: 'Hotel Malika Bukhara',
      location: 'Buxoro',
      rating: 4,
      price: 'dan $80',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      amenities: ['Wi-Fi', 'An\'anaviy dizayn', 'Restoran', 'Hovuz']
    },
    {
      name: 'Orient Star Samarkand',
      location: 'Samarqand',
      rating: 4,
      price: 'dan $90',
      image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      amenities: ['Wi-Fi', 'Registon ko\'rinishi', 'Restoran', 'Konferens zal']
    },
    {
      name: 'Malika Khiva Hotel',
      location: 'Xiva',
      rating: 4,
      price: 'dan $70',
      image: 'https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      amenities: ['Wi-Fi', 'Ichon Qala yaqini', 'Milliy oshxona', 'Ayv bog\'i']
    }
  ];

  return (
    <section id="hotels" className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tavsiya Etilgan Mehmonxonalar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Eng yaxshi mehmonxonalarda qoling va O'zbekiston go'zalligidan zavqlaning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hotels.map((hotel, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="relative">
                <img 
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="ml-1 text-sm font-semibold">{hotel.rating}</span>
                </div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-lg">{hotel.name}</CardTitle>
                <p className="text-gray-600">{hotel.location}</p>
              </CardHeader>
              
              <CardContent>
                <div className="mb-4">
                  <div className="text-2xl font-bold text-blue-600">{hotel.price}</div>
                  <div className="text-sm text-gray-500">kuniga</div>
                </div>
                
                <div className="space-y-2">
                  {hotel.amenities.map((amenity, aIndex) => (
                    <div key={aIndex} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {amenity}
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

export default Hotels;
