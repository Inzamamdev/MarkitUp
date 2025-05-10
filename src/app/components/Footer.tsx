import { LuFacebook } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import { LuLinkedin } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="mx-auto px-4 max-w-7xl ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/logo.svg"
                alt="SoftSell Logo"
                className="h-10 w-10 mr-2"
              />
              <span className="text-2xl font-bold text-blue-400">SoftSell</span>
            </div>
            <p className="text-gray-400 mb-6">
              The premier marketplace for software license resale, helping
              businesses maximize their ROI.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <LuFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <BsTwitterX size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <LuLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <LuInstagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#why-choose-us"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  Cookie Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  GDPR Compliance
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={20} className="mr-2 text-gray-400 mt-1 shrink-0" />
                <span className="text-gray-400">info@softsell.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-2 text-gray-400 mt-1 shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin
                  size={20}
                  className="mr-2 text-gray-400 mt-1 shrink-0"
                />
                <span className="text-gray-400">
                  123 Tech Drive, San Francisco, CA 94107
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} SoftSell. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Made by Inzamam Shaikh
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
