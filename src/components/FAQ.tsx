
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: 'O\'zbekistonga safar qilish uchun viza kerakmi?',
      answer: 'Aksariyat mamlakat fuqarolari uchun O\'zbekistonga 30 kungacha vizasiz safar qilish mumkin. Ba\'zi mamlakatlar uchun elektron viza yoki oddiy viza kerak bo\'lishi mumkin. Batafsil ma\'lumot uchun biz bilan bog\'laning.'
    },
    {
      question: 'Eng yaxshi sayohat vaqti qachon?',
      answer: 'O\'zbekistonga sayohat qilish uchun eng yaxshi vaqt bahor (mart-may) va kuz (sentyabr-noyabr) oylari. Bu paytda ob-havo juda qulay va barcha diqqatga sazovor joylarni ko\'rib chiqish mumkin.'
    },
    {
      question: 'Tarjimon xizmati qanday ishlaydi?',
      answer: 'Bizning professional tarjimonlarimiz ingliz, rus, arab, turk va boshqa tillarda xizmat ko\'rsatadilar. Ular faqat til tarjimasi emas, balki madaniy ma\'lumotlar ham beradilar.'
    },
    {
      question: 'Transport xizmatlari xavfsizmi?',
      answer: 'Ha, bizning barcha transport vositalarimiz zamonaviy va xavfsizlik standartlariga javob beradi. Haydovchilarimiz malakali va tajribali.'
    },
    {
      question: 'Mehmonxonalar qanday tanlanadi?',
      answer: 'Biz faqat sifatli va xavfsiz mehmonxonalarni tanlaymiz. Har bir mehmonxona tekshirilgan va mijozlarimizning talablariga javob beradi.'
    },
    {
      question: 'To\'lovni qanday amalga oshirsam bo\'ladi?',
      answer: 'To\'lovni naqd pul, bank o\'tkazmasi yoki kredit karta orqali amalga oshirish mumkin. Batafsil ma\'lumot uchun biz bilan bog\'laning.'
    },
    {
      question: 'Sayohatni bekor qilsam nima bo\'ladi?',
      answer: 'Sayohatni bekor qilish shartlari xizmat turiga qarab farq qiladi. Odatda, oldindan bekor qilish holida pul qaytariladi. Batafsil shartlar bilan tanishish uchun biz bilan bog\'laning.'
    },
    {
      question: 'Maxsus talablar bo\'lsa nima qilishim kerak?',
      answer: 'Agar sizda maxsus talablar (oziq-ovqat, sog\'liq, transport) bo\'lsa, oldindan bizga xabar bering. Biz sizning barcha talablaringizni hisobga olib sayohatni tashkil qilamiz.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tez-tez So'raladigan Savollar
          </h2>
          <p className="text-xl text-gray-600">
            O'zbekistonga sayohat haqida eng ko'p so'raladigan savollarga javoblar
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
              <AccordionTrigger className="text-left hover:no-underline py-6">
                <span className="font-semibold text-gray-900">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-gray-700 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
