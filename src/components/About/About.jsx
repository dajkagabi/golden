import React from 'react';

import aboutImage from '../../assets/chinese-chef-dumplings.png'; 
import bent from '../../assets/bent.jpg';
import bent2 from '../../assets/bent2.jpg';
import bent3 from '../../assets/bent3.jpg';
import bent4 from '../../assets/bent4.jpg';

const About = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20 text-center md:text-left">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
       
        <div className="flex-1">
          <h2 className="text-1xl font-extrabold text-chinese-red-900 mb-6"> 
            Our <span className="text-chinese-gold-500">Story</span> 
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            For over 25 years, Golden Dragon has been serving authentic Chinese cuisine to our beloved community. Our journey began with a simple mission: to bring the true flavors of China to your table using time-honored recipes passed down through generations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Every dish is crafted with passion, using only the finest ingredients and traditional cooking techniques. From hand-pulled noodles to perfectly steamed dumplings, we ensure each bite tells a story of authentic Chinese culinary heritage.
          </p>

         
          <div className="grid grid-cols-2 gap-6 text-center">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="text-3xl font-bold text-chinese-red-600 mb-2">25+</p> 
              <p className="text-gray-700">Years of Excellence</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="text-3xl font-bold text-chinese-red-600 mb-2">50K+</p> 
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="text-3xl font-bold text-chinese-red-600 mb-2">200+</p> 
              <p className="text-gray-700">Daily Fresh Dishes</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <p className="text-3xl font-bold text-chinese-red-600 mb-2">100+</p> 
              <p className="text-gray-700">Traditional Recipes</p>
            </div>
          </div>
        </div>

    
        <div className="flex-1 flex flex-col items-center md:items-end gap-6 w-full md:w-auto">
         
          <img
            src={aboutImage} 
            alt="Chef preparing food"
            className="w-full max-w-md h-auto rounded-lg shadow-xl object-cover ring-4 ring-chinese-gold-500 animate-in fade-in zoom-in duration-700" 
          />
          
          <div className="grid grid-cols-2 gap-6 w-full max-w-md mt-6">
            <div className="bg-gray-200 h-32 rounded-lg shadow-md flex items-center justify-center text-gray-500">
              <img
            src={bent} 
            alt="Chef preparing food"
            className="w-full max-w-md h-auto rounded-lg shadow-xl object-cover ring-4 ring-chinese-gold-500 animate-in fade-in zoom-in duration-700" 
          />
            </div>

            <div className="bg-gray-200 h-32 rounded-lg shadow-md flex items-center justify-center text-gray-500">
           
            <img
            src={bent2} 
            alt="Chef preparing food"
            className="w-full max-w-md h-auto rounded-lg shadow-xl object-cover ring-4 ring-chinese-gold-500 animate-in fade-in zoom-in duration-700" 
          />
            </div>
            
            <div className="bg-gray-200 h-32 rounded-lg shadow-md flex items-center justify-center text-gray-500">
               <img
            src={bent3} 
            alt="Chef preparing food"
            className="w-full max-w-md h-auto rounded-lg shadow-xl object-cover ring-4 ring-chinese-gold-500 animate-in fade-in zoom-in duration-700" 
          />
            </div>

            <div className="bg-gray-200 h-32 rounded-lg shadow-md flex items-center justify-center text-gray-500">
            <img
            src={bent4} 
            alt="Chef preparing food"
            className="w-full max-w-md h-auto rounded-lg shadow-xl object-cover ring-4 ring-chinese-gold-500 animate-in fade-in zoom-in duration-700" 
          />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;