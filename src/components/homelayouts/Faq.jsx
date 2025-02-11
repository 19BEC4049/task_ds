import { useState } from "react";

const faqs = [
  { question: "Can lessons be shorter than 2 hours?", answer: "Lessons are 2 hours long. Unfortunately, lessons cannot be less than or more than 2 hours." },
  { question: "Are lessons one on one training?", answer: "Yes, all our lessons are one-on-one training sessions." },
  { question: "Can a friend or parent/guardian sit in my lesson?", answer: "Yes, a parent or guardian can accompany you during the lesson." },
  { question: "Are all your drivers certified by the state and background checked?", answer: "Yes, all our instructors are state-certified and have passed background checks." },
  { question: "Is pick up and drop off offered?", answer: "Yes, we offer pick-up and drop-off services." },
  { question: "When are lessons offered?", answer: "Lessons are available Monday to Saturday from 8 AM to 6 PM." },
  { question: "What is taught during lessons?", answer: "We cover basic to advanced driving techniques, road rules, and parking skills." }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-blue-100 py-10 px-5 md:px-20">
      {/* Cancellations Box */}
      <div className=" border-2 border-blue-400 p-5 rounded-lg text-center w-[80%] mx-auto mb-10">
        <p className="font-bold">*Cancellations must be made more than 48 hours in advance.</p>
        <p>
          Cancellations made between 48 hours or less in advance will incur a late fee of $60. No shows and/or early
          termination of a lesson on behalf of a client will result in a loss of the remaining lesson time or entire
          lesson, and the session will not be refundable. Please see our <a href="#" className="text-blue-600 underline">Refund policy</a> for further details.
        </p>
      </div>

      {/* FAQ Section */}
      <h2 className="w-[80%] mx-auto text-2xl font-bold text-left mb-6">Frequently Asked Questions</h2>
      <div className="flex flex-col md:flex-row md:items-center md:space-x-8 max-w-5xl mx-auto">
        {/* Images Section */}
        <div className="flex flex-col space-y-4 md:w-1/3 ">
          <img src="src/assets/images/drivingLessonsfaq.aaa1375c4766a5185385.png" alt="Driving Lesson" className="rounded-lg shadow-md" />
          {/* <img src="/images/driving-car.jpg" alt="Driving School Car" className="rounded-lg shadow-md w-3/4" /> */}
        </div>

        {/* FAQ List */}
        <div className="md:w-2/3">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left p-4 font-semibold flex justify-between items-center bg-white"
              >
                {faq.question}
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </button>
              {openIndex === index && <p className="p-4 pt-0 text-gray-600">{faq.answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
