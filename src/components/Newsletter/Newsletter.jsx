import React from "react";

const New = () => {
  return (
    <section className="bg-white text-gray-800 py-16 px-4 md:px-20 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-4">Stay Updated</h2>

        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          Subscribe to our newsletter for special offers and new menu items
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full sm:w-80 px-6 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#911929] focus:border-transparent text-gray-800"
          />
          <button className="bg-[#911929] text-white font-semibold py-3 px-8 rounded-full shadow-md hover:bg-[#EC2642] transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default New;
