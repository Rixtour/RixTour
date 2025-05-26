import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Star, Clock, Camera, Users, Award } from "lucide-react";
// import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Places = () => {
  const [selectedPlace, setSelectedPlace] = useState<number | null>(null);
  const { toast } = useToast();

  const places = [
    {
      name: "Samarqand",
      description:
        "UNESCO merosi - Registon maydoni va Temur maqbarasi bilan mashhur qadimiy shahar",
      image:
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Registon maydoni",
        "Bibi Xonim masjidi",
        "Shah-i Zinda maqbarasi",
      ],
      rating: 4.9,
      duration: "2-3 kun",
      category: "Tarixiy Meros",
      quality: "UNESCO Sayti",
    },
    {
      name: "Buxoro",
      description:
        "Qadimiy Ipak yo'li shahri - ming yillik tarix va madaniyat markazi",
      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Ark qal'asi", "Kalon minorasi", "Chor Minor"],
      rating: 4.8,
      duration: "2-3 kun",
      category: "Madaniy Meros",
      quality: "Tarixiy Shahar",
    },
    {
      name: "Xiva",
      description:
        "Ichon Qala - dunyo bo'ylab mashhur ochiq osmon ostidagi muzeyi",
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: ["Ichon Qala", "Kalta Minor", "Tosh Hovli saroyi"],
      rating: 4.7,
      duration: "1-2 kun",
      category: "Ochiq Muzey",
      quality: "Noyob Tajriba",
    },
    {
      name: "Toshkent",
      description:
        "O'zbekistonning zamonaviy poytaxti - an'ana va modernlikning uyg'unligi",
      image:
        "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      highlights: [
        "Chorsu bozori",
        "Mustaqillik maydoni",
        "Zamonaviy arxitektura",
      ],
      rating: 4.6,
      duration: "1-2 kun",
      category: "Zamonaviy Shahar",
      quality: "Poytaxt Tajribasi",
    },
  ];

  const handlePlaceSelect = (index: number) => {
    setSelectedPlace(selectedPlace === index ? null : index);
  };

  const handleBookTour = (placeName: string) => {
    toast({
      title: "Tur tanlandi! 🎉",
      description: `${placeName}ga premium sayohat uchun so'rov yuborildi. Professional gidlarimiz bilan ajoyib tajriba sizni kutmoqda!`,
    });
  };

  return (
    <section
      id="places"
      className="py-24 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full px-6 py-3 mb-6">
            <Award className="w-5 h-5 text-indigo-600 mr-2" />
            <span className="text-indigo-700 font-semibold">
              Premium Yo'nalishlar
            </span>
          </div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 bg-clip-text text-transparent mb-6">
            Mashhur Joylar
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            O'zbekistonning eng go'zal va tarixiy joylarini professional gidlar
            bilan kashf eting
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {places.map((place, index) => (
            <Card
              key={index}
              className={`group overflow-hidden cursor-pointer transition-all duration-500 border-0 shadow-xl hover:shadow-2xl transform hover:-translate-y-6 ${
                selectedPlace === index
                  ? "shadow-2xl scale-105 ring-4 ring-indigo-400/30"
                  : ""
              }`}
              onClick={() => handlePlaceSelect(index)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-56 object-cover group-hover:scale-125 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-full px-3 py-2 flex items-center shadow-lg">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="ml-1 text-sm font-bold text-gray-800">
                    {place.rating}
                  </span>
                </div>

                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-full">
                    {place.quality}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">{place.name}</h3>
                  <div className="flex items-center mb-2">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">
                      {place.duration}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">{place.category}</span>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {place.description}
                </p>

                <div className="space-y-3 mb-6">
                  {place.highlights.map((highlight, hIndex) => (
                    <div
                      key={hIndex}
                      className="flex items-center text-gray-700"
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center mr-3 shadow-sm">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleBookTour(place.name);
                  }}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Camera className="w-5 h-5 mr-2" />
                  Premium Tur Tanlash
                </Button> */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Places;
