import { useState } from "react";
import Accordion from "../components/Accordion";

const sections = [
  {
    title: "What Is Foodie Place?",
    content: (
      <p>
        Foodie Place is a React-based restaurant discovery and food ordering
        frontend. Users can explore restaurants, search and filter them, open
        restaurant menus, and manage food items through a Redux-powered cart.
      </p>
    ),
  },
  {
    title: "How Does It Work?",
    content: (
      <p>
        Restaurant and menu data comes from Firebase Firestore. React handles
        the UI, React Router manages navigation, custom hooks handle reusable
        logic, and Redux Toolkit manages the global cart state.
      </p>
    ),
  },
  {
    title: "What I Built",
    content: (
      <p>
        The project includes responsive navigation, restaurant search, top-rated
        filtering, dynamic restaurant routes, menu fetching, cart management,
        loading states, offline detection, and reusable React components.
      </p>
    ),
  },
];

const highlights = [
  {
    value: "React",
    title: "Frontend",
  },
  {
    value: "Firebase",
    title: "Data Layer",
  },
  {
    value: "Redux",
    title: "State Management",
  },
];

const AboutUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-orange-50">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <section className="mb-10 text-center sm:mb-12">
          <h1 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">
            About Foodie Place
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            A React food ordering project built to explore modern frontend
            development, real-time data flow, and state management.
          </p>
        </section>

        <section className="mb-12 space-y-5 sm:mb-14">
          {sections.map((section, index) => (
            <Accordion
              key={section.title}
              title={section.title}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            >
              <div className="leading-relaxed text-gray-600">
                {section.content}
              </div>
            </Accordion>
          ))}
        </section>

        <section>
          <h2 className="mb-6 text-center text-2xl font-bold text-gray-800 sm:text-3xl">
            Project Highlights
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl sm:p-8"
              >
                <h3 className="text-2xl font-bold text-orange-500 sm:text-3xl">
                  {item.value}
                </h3>

                <p className="mt-2 font-medium text-gray-600">{item.title}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
