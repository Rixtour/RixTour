
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Xabar yuborildi!",
      description: "Tez orada siz bilan bog'lanamiz.",
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      details: ['+998 71 123 45 67', '+998 90 123 45 67']
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@uzbekistansayohat.uz', 'booking@uzbekistansayohat.uz']
    },
    {
      icon: MapPin,
      title: 'Manzil',
      details: ['Toshkent shahri', 'Amir Temur shox ko\'chasi 1']
    },
    {
      icon: Clock,
      title: 'Ish vaqti',
      details: ['Dushanba - Juma: 9:00-18:00', 'Shanba: 9:00-15:00']
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Biz Bilan Bog'laning
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sayohatingizni rejalashtirish uchun biz bilan bog'laning. Biz sizga yordam berishga tayyormiz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="h-full bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">
                  Xabar Qoldiring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ismingiz *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Ismingizni kiriting"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="emailingizni kiriting"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon raqami
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+998 90 123 45 67"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Xabar *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Qanday sayohat rejalashtirmoqchisiz? Batafsil yozing..."
                      className="w-full"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg transition-all duration-200"
                  >
                    Xabar Yuborish
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, dIndex) => (
                        <p key={dIndex} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-4">24/7 Qo'llab-quvvatlash</h3>
                <p className="mb-4">
                  Sayohatingiz davomida har qanday muammo yuzaga kelsa, biz 24 soat davomida sizga yordam berishga tayyormiz.
                </p>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-2" />
                  <span className="font-semibold">+998 24/7 support</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
