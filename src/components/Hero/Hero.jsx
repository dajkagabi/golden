import React from "react";
import { Link } from "react-router-dom";
import chines from "../../assets/chinese-noodles.png";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-4 py-16 md:px-20 md:py-24 max-w-7xl mx-auto">
      <div className="flex-1 text-center md:text-left mb-12 md:mb-0 md:pr-10 animate-in fade-in slide-in-from-left-4 duration-700">
        <div className="flex items-center justify-center md:justify-start mb-4">
          <span className="text-xl text-chinese-gold-500">★★★★★</span>
          <p className="ml-2 text-lg text-chinese-gold-500 font-medium">
            Authentic Chinese Cuisine
          </p>
        </div>

        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-chinese-red-900 mb-6">
          Experience the <br className="hidden md:block" /> Taste of Tradition
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
          Savor authentic Chinese flavors crafted with traditional recipes and
          the finest ingredients. From hand-pulled noodles to perfectly steamed
          dumplings.
        </p>

        <Link to="/menu">
          <button className="bg-chinese-red-600 text-red font-semibold py-4 px-8 rounded-full shadow-lg hover:bg-chinese-red-900 hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-pulse-soft">
            View Menu
          </button>
        </Link>
      </div>

      <div className="flex-1 flex justify-center md:justify-end animate-in fade-in slide-in-from-right-4 duration-700">
        <img
          src={chines}
          alt="Delicious Chinese Noodles"
          className="rounded-3xl shadow-2xl ring-4 ring-chinese-gold-500 max-w-full h-auto object-cover animate-wave-slow"
          style={{ width: "clamp(300px, 100%, 600px)" }}
        />
      </div>
    </section>
  );
};

export default Hero;
