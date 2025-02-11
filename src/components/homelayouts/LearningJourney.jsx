import React from "react";

const steps = [
  { id: "01", title: "Sign Up", desc: "Register online for our driving classes", img: "signup.png" },
  { id: "02", title: "Schedule Classes", desc: "Choose flexible class times that fit your schedule", img: "schedule.png" },
  { id: "03", title: "Set Your Route", desc: "Decide on the most convenient pick-up and drop-off locations", img: "route.png" },
  { id: "04", title: "Choose Your Instructor", desc: "Select an instructor based on your preferred location", img: "instructor.png" },
  { id: "05", title: "Complete Paperwork", desc: "We manage paperwork so you can focus on learning", img: "paperwork.png" },
  { id: "06", title: "Hit the Road!", desc: "Begin your journey to becoming a confident driver!", img: "hit-road.png" }
];

export default function LearningJourney() {
  return (
    <section className="bg-gray-100 py-12">
      <div 
        className="max-w-6xl mx-auto px-6 bg-cover bg-center" 
        style={{ backgroundImage: "url('/src/assets/images/road_bg.1323ad224ae5660976ef.png')" }}
      >
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">From Learner to Licensed</h2>
          <p className="text-orange-500 mt-2">Your Complete Guide to Becoming a New Driver</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className=" p-6  flex flex-col items-center relative"
            >
              <img src={`/src/assets/images/download (1).png`} alt={step.title} className="w-10 h-10 mb-4" />
              <h3 className="text-lg font-semibold text-center">{step.title}</h3>
              <p className="text-gray-600 text-center">{step.desc}</p>
              <span className="absolute top-4 right-4 text-5xl font-bold text-gray-300">{step.id}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
