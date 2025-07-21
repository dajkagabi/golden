import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-4 md:px-20">
     
      <div className="max-w-7xl ml-auto mr-0 grid grid-cols-1 md:grid-cols-3 gap-12"> 

   
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center mb-4">
            <span className="text-3xl font-bold">
              <span className="text-black">龙</span> Golden Dragon
            </span>
          </div>
          <p className="text-gray-700 leading-relaxed mb-8">
            Experience authentic Chinese cuisine crafted with traditional recipes and the
            finest ingredients. We've been serving our community for over 25 years with
            passion and dedication.
          </p>
          <div className="flex space-x-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <Facebook size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <Instagram size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
              <Twitter size={24} />
            </a>
          </div>
        </div>

        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-bold mb-6">Contact Info</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start">
              <MapPin className="text-gray-600 mr-3 flex-shrink-0" size={20} />
              <p className="text-gray-700">123 Dragon Street <br /> Chinatown, NY 10013</p>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Phone className="text-gray-600 mr-3 flex-shrink-0" size={20} />
              <p className="text-gray-700">(555) 123-4567</p>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Mail className="text-gray-600 mr-3 flex-shrink-0" size={20} />
              <p className="text-gray-700">info@goldendragon.com</p>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <h3 className="text-xl font-bold mb-6">Opening Hours</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-center md:justify-start">
              <Clock className="text-gray-600 mr-3 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold text-gray-700">Mon - Thu</p>
                <p className="text-gray-600">11:00 AM - 10:00 PM</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Clock className="text-gray-600 mr-3 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold text-gray-700">Fri - Sat</p>
                <p className="text-gray-600">11:00 AM - 11:00 PM</p>
              </div>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Clock className="text-gray-600 mr-3 flex-shrink-0" size={20} />
              <div>
                <p className="font-semibold text-gray-700">Sunday</p>
                <p className="text-gray-600">12:00 PM - 9:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;