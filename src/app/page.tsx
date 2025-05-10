"use client";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useTheme } from "./context/ThemeContext";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/CustomersTestimonials";
import ContactForm from "./components/Contact";
import Footer from "./components/Footer";
export default function Home() {
  const { theme } = useTheme();
  return (
    <div className={`${theme} transition-colors duration-300`}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        <Navbar />
        <main>
          <Hero />
          <HowItWorks />
          <WhyChooseUs />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
      </div>
    </div>
  );
}
