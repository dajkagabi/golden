import React from 'react';
import chef from '../../assets/chinese-chef-dumplings.png';

const About = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">

        {/* Bal oldal: Szöveg és statisztikák */}
        <div className="flex-1">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-8">
            Our
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            For over 25 years, Golden Dragon has been serving authentic
            Chinese cuisine to our beloved community. Our journey began with a
            simple mission: to bring the true flavors of China to your table using
            time-honored recipes passed down through generations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-10">
            Every dish is crafted with passion, using only the finest ingredients
            and traditional cooking techniques. From our hand-pulled noodles to
            perfectly steamed dumplings, we ensure each bite tells a story of
            authentic Chinese culinary heritage.
          </p>

          {/* Statisztikai dobozok */}
          <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto md:mx-0">
            <div className="bg-gray-100 p-6 rounded-lg text-center shadow-sm">
              <p className="text-3xl font-bold text-gray-900">25+</p>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center shadow-sm">
              <p className="text-3xl font-bold text-gray-900">50K+</p>
              <p className="text-gray-600">Happy Customers</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center shadow-sm">
              <p className="text-3xl font-bold text-gray-900">200+</p>
              <p className="text-gray-600">Daily Fresh Dishes</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg text-center shadow-sm">
              <p className="text-3xl font-bold text-gray-900">100+</p>
              <p className="text-gray-600">Traditional Recipes</p>
            </div>
          </div>
        </div>

        {/* Jobb oldal: Képgaléria */}
        <div className="flex-1 relative h-[600px] w-full md:max-w-xl mx-auto md:mx-0">
          {/* Fő kép (felül) */}
          <img
            src={chef} // Cseréld le a tényleges képed URL-jére!
            alt="Chef preparing food"
            className="absolute top-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 rounded-lg shadow-xl object-cover w-[350px] h-[300px]"
          />

          {/* Kis képek (alul, jobbra) */}
          <div className="absolute bottom-0 right-1/2 translate-x-1/2 md:translate-x-0 md:right-0 grid grid-cols-2 gap-6 w-[350px]">
            <div className="bg-gray-200 rounded-lg shadow-md flex items-center justify-center h-[140px]">
              {/* Ide jöhet egy kis kép, vagy ikon */}
              <span className="text-gray-500 text-sm">Image 1</span>
              {/* <img src="https://via.placeholder.com/160x140?text=Dish1" alt="Dish 1" className="rounded-lg object-cover w-full h-full" /> */}
            </div>
            <div className="bg-gray-200 rounded-lg shadow-md flex items-center justify-center h-[140px]">
              {/* Ide jöhet egy kis kép, vagy ikon */}
              <span className="text-gray-500 text-sm">Image 2</span>
              {/* <img src="https://via.placeholder.com/160x140?text=Dish2" alt="Dish 2" className="rounded-lg object-cover w-full h-full" /> */}
            </div>
            <div className="bg-gray-200 rounded-lg shadow-md flex items-center justify-center h-[140px]">
              {/* Ide jöhet egy kis kép, vagy ikon */}
              <span className="text-gray-500 text-sm">Image 3</span>
              {/* <img src="https://via.placeholder.com/160x140?text=Dish3" alt="Dish 3" className="rounded-lg object-cover w-full h-full" /> */}
            </div>
            <div className="bg-gray-200 rounded-lg shadow-md flex items-center justify-center h-[140px]">
              {/* Ide jöhet egy kis kép, vagy ikon */}
              <span className="text-gray-500 text-sm">Image 4</span>
              {/* <img src="https://via.placeholder.com/160x140?text=Dish4" alt="Dish 4" className="rounded-lg object-cover w-full h-full" /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;