import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Wifi, Award, Coffee, Car, Utensils } from "lucide-react";

const Hotels = () => {
  const hotels = [
    {
      name: "Lotte City Hotel Tashkent Palace",
      location: "Toshkent",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: [
        { name: "Premium Wi-Fi", icon: Wifi },
        { name: "Luxury Spa", icon: Award },
        { name: "Fine Dining", icon: Utensils },
        { name: "VIP Transfer", icon: Car },
      ],
      category: "5-Star Luxury",
      quality: "International Standard",
    },
    {
      name: "Hotel Malika Bukhara",
      location: "Buxoro",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: [
        { name: "Free Wi-Fi", icon: Wifi },
        { name: "Traditional Design", icon: Award },
        { name: "Local Cuisine", icon: Utensils },
        { name: "Garden Pool", icon: Coffee },
      ],
      category: "Boutique Hotel",
      quality: "Authentic Experience",
    },
    {
      name: "Orient Star Samarkand",
      location: "Samarqand",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: [
        { name: "High-Speed Wi-Fi", icon: Wifi },
        { name: "Registon View", icon: Award },
        { name: "Rooftop Restaurant", icon: Utensils },
        { name: "Business Center", icon: Coffee },
      ],
      category: "Premium Location",
      quality: "Historic Views",
    },
    {
      name: "Malika Khiva Hotel",
      location: "Xiva",
      rating: 4,
      image:
        "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      amenities: [
        { name: "Complimentary Wi-Fi", icon: Wifi },
        { name: "Heritage Location", icon: Award },
        { name: "Traditional Kitchen", icon: Utensils },
        { name: "Courtyard Garden", icon: Coffee },
      ],
      category: "Heritage Hotel",
      quality: "Cultural Immersion",
    },
  ];

  return (
    <section
      id="hotels"
      className="py-24 bg-gradient-to-br from-amber-50 via-white to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-amber-100 to-orange-100 rounded-full px-6 py-3 mb-6">
            <Award className="w-5 h-5 text-amber-600 mr-2" />
            <span className="text-amber-700 font-semibold">
              Premium Turar Joylar
            </span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-amber-900 via-orange-900 to-red-900 bg-clip-text text-transparent mb-6">
            Tavsiya Etilgan Mehmonxonalar
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Yuqori sifatli mehmonxonalarda qoling va O'zbekiston go'zalligidan
            professional xizmat bilan zavqlaning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hotels.map((hotel, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 bg-white border-0 shadow-lg transform hover:-translate-y-4"
            >
              <div className="relative overflow-hidden">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 flex items-center shadow-lg">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="ml-1 text-sm font-bold text-gray-800">
                    {hotel.rating}.0
                  </span>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-amber-600 to-orange-600 text-white text-sm font-semibold rounded-full">
                    {hotel.quality}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium text-amber-300 mb-1">
                    {hotel.category}
                  </div>
                  <div className="text-lg font-bold">{hotel.location}</div>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 leading-tight">
                  {hotel.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3">
                  {hotel.amenities.map((amenity, aIndex) => {
                    const IconComponent = amenity.icon;
                    return (
                      <div
                        key={aIndex}
                        className="flex items-center text-gray-700"
                      >
                        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center mr-3 shadow-sm">
                          <IconComponent className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-medium">{amenity.name}</span>
                      </div>
                    );
                  })}
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
