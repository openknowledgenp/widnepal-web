import { h } from 'preact';
import { useState } from 'preact/hooks';
import { ChevronDown, ChevronUp } from 'lucide-react';


const Faqs = () => {
    const faqData = [
        {
            question: "Who can participate?",
            answer: "Anyone passionate about using data to address societal challenges is welcome! We encourage a diverse range of participants, including students, professionals, and enthusiasts from various fields."
        },
        {
            question: "How many participants will be selected?",
            answer: "Approximately 250 participants will be selected to ensure a meaningful and engaging experience for everyone involved."
        },
        {
            question: "How can I register?",
            answer: "You can register for the conference by filling out the registration form here."
        },
        {
            question: "What is the registration fee?",
            answer: "There is no registration fee for attending the Women in Data (WiD) Conference 2025."
        },
        {
            question: "I’ve registered! What happens next?",
            answer: "Our team will review all registrations after the deadline. If selected, you will receive detailed information about the venue, schedule, and logistics via email."
        },
        {
            question: "Will there be food and swags?",
            answer: "Absolutely! Participants will receive cool swag items, and we’ll provide lunch and coffee throughout the event."
        },
        {
            question: "What is the schedule of the conference?",
            answer: "The full schedule will be published soon. Stay tuned to the conference page and follow our updates on social media."
        },
        {
            question: "I live outside Kathmandu Valley. How can I join?",
            answer: "You can apply for our travel and accommodation scholarship here. We are offering 20 scholarships for participants from outside the Kathmandu Valley."
        },
        {
            question: "What is the language of the conference?",
            answer: "The sessions will primarily be conducted in Nepali, with English and sign language interpreters available to ensure inclusivity."
        },
        {
            question: "Where can I contact if I have more questions?",
            answer: "Feel free to reach out to us via any of our social media platforms: Facebook | LinkedIn | Twitter | Instagram."
        }
    ];

    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
      setExpandedIndex(expandedIndex === index ? null : index);
    };
    

    return (
        <div className="relative h-fit w-screen items-center justify-center text-black overflow-hidden bg-[#f1f1f1] backdrop-blur-sm">
        <div className="container mx-auto p-4 w-4/5">
          <h1 className="text-2xl text-black font-bold text-center mb-6 mt-8">
            Frequently Asked Questions (FAQ)
          </h1>
          <div className="space-y-1">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className=" rounded-lg shadow-sm bg-white overflow-hidden"
              >
                <button
                  className="w-full p-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors focus:outline-none border-none"
                  onClick={() => toggleExpand(index)}
                >
                  <h2 className="text-lg font-semibold text-[#40ADE3] border-none">
                    {faq.question}
                  </h2>
                  {expandedIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-[#40ADE3]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#40ADE3]" />
                  )}
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    expandedIndex === index ? 'max-h-40' : 'max-h-0'
                  }`}
                >
                  <p className="p-4 text-gray-700 ">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Faqs;


