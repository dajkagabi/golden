import React, { useState } from 'react';
import { FaBowlFood, FaBowlRice, FaDrumstickBite, FaShrimp, FaIceCream, FaRegClock, FaUtensils } from 'react-icons/fa6';


import handPulledNoodlesImage from '../../assets/beef-noodle-soup.png';
import danDanNoodlesImage from '../../assets/dan-dan-noodles.png';
import loMeinImage from '../../assets/chinese-lo-mein.png';
import porkDumplingsImage from '../../assets/pork-dumplings-steamer.png';
import springRollsImage from '../../assets/golden-crispy-spring-rolls.png';
import chiliOilWontonsImage from '../../assets/chili-oil-wontons.png';
import kungPaoChickenImage from '../../assets/kung-pao-chicken.png';
import sweetAndSourChickenImage from '../../assets/sweet-and-sour-chicken.png';
import shirpfriedrice from '../../assets/shrimp-fried-rice.png';
import kungpaoshrimp from '../../assets/kung-pao-shrimp.jpg';
import mango from '../../assets/mango.png';
import mochi from '../../assets/mochi.jpg'

const menuItems = [
  {
    id: 1,
    name: 'Hand-Pulled Noodles',
    category: 'Noodles',
    description: 'Fresh hand-pulled noodles in rich beef broth',
    price: '16.99',
    time: '20 min',
    spiciness: '4.9',
    image: handPulledNoodlesImage,
  },
  {
    id: 2,
    name: 'Dan Dan Noodles',
    category: 'Noodles',
    description: 'Sichuan noodles with spicy sesame sauce',
    price: '15.99',
    time: '18 min',
    spiciness: '🌶️ 4.7',
    image: danDanNoodlesImage,
  },
  {
    id: 3,
    name: 'Lo Mein',
    category: 'Noodles',
    description: 'Soft noodles stir-fried with vegetables and choice of protein',
    price: '13.99',
    time: '15 min',
    spiciness: '4.5',
    image: loMeinImage,
  },
  {
    id: 4,
    name: 'Pork Dumplings',
    category: 'Appetizers',
    description: 'Hand-folded dumplings with seasoned pork filling',
    price: '12.99',
    time: '15 min',
    spiciness: '🌶️ 4.8',
    image: porkDumplingsImage,
  },
  {
    id: 5,
    name: 'Spring Rolls',
    category: 'Appetizers',
    description: 'Crispy vegetable spring rolls with sweet & sour sauce',
    price: '8.99',
    time: '12 min',
    spiciness: '🌶️ 4.6',
    image: springRollsImage,
  },
  {
    id: 6,
    name: 'Wontons in Chili Oil',
    category: 'Noodles',
    description: 'Silky wontons in aromatic Sichuan chili oil',
    price: '14.99',
    time: '10 min',
    spiciness: '🌶️ 4.9',
    image: chiliOilWontonsImage,
  },
  {
    id: 7,
    name: 'Kung Pao Chicken',
    category: 'Meat & Poultry',
    description: 'Classic spicy chicken dish with peanuts',
    price: '17.99',
    time: '20 min',
    spiciness: '🌶️🌶️ 4.7',
    image: kungPaoChickenImage,
  },
  {
    id: 8,
    name: 'Sweet and Sour Chicken',
    category: 'Meat & Poultry',
    description: 'Crispy chicken with tangy sweet and sour sauce',
    price: '16.50',
    time: '25 min',
    spiciness: '4.6',
    image: sweetAndSourChickenImage,
  },
  {
    id: 9,
    name: 'Shrimp Fried Rice',
    category: 'Rice Dishes',
    description: 'Classic fried rice with succulent shrimp and vegetables',
    price: '15.99',
    time: '18 min',
    spiciness: '4.5',
    image: shirpfriedrice,
  },
  {
    id: 10,
    name: 'Kung Pao Shrimp',
    category: 'Seafood',
    description: 'Spicy stir-fried shrimp with peanuts and vegetables',
    price: '19.25',
    time: '22 min',
    spiciness: '🌶️🌶️ 4.8',
    image: kungpaoshrimp,
  },
  {
    id: 11,
    name: 'Mango Pudding',
    category: 'Desserts',
    description: 'Sweet and refreshing mango flavored pudding',
    price: '6.99',
    time: '5 min',
    spiciness: '4.9',
    image: mango,
  },  {
    id: 12,
    name: 'Ice Mochi',
    category: 'Desserts',
    description: 'Japanese rice cake with ice cream filling (assorted flavors)',
    price: '6.99',
    time: '5 min',
    spiciness: '4.9',
    image: mochi,
  },
];

const allCategories = ['All', ...new Set(menuItems.map(item => item.category))];

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Noodles':
      return <FaBowlFood size={18} className="mr-2" style={{ color: '#FF6347' }} />; 
    case 'Rice Dishes':
      return <FaBowlRice size={18} className="mr-2" style={{ color: '#DAA520' }} />; 
    case 'Meat & Poultry':
      return <FaDrumstickBite size={18} className="mr-2" style={{ color: '#8B4513' }} />; 
    case 'Seafood':
      return <FaShrimp size={18} className="mr-2" style={{ color: '#008080' }} />; 
    case 'Desserts':
      return <FaIceCream size={18} className="mr-2" style={{ color: '#FF69B4' }} />; 
    case 'Appetizers':
      return <FaUtensils size={18} className="mr-2" style={{ color: '#2E8B57' }} />; 
    case 'All':
      return <FaUtensils size={18} className="mr-2" style={{ color: '#6A5ACD' }} />; 
    default:
      return null;
  }
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [filteredItems, setFilteredItems] = useState(menuItems);

  const filterByCategory = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setFilteredItems(menuItems);
    } else {
      const newItems = menuItems.filter(item => item.category === category);
      setFilteredItems(newItems);
    }
  };

  return (
    <section className="bg-white py-16 px-4 md:px-20 text-center">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our <span className="text-[#911929]">Menu</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Discover authentic Chinese flavors crafted with traditional techniques and the
            finest ingredients.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => filterByCategory(category)}
              className={`
                ${activeCategory === category
                  ? 'bg-[#911929] text-white'
                  : 'bg-gray-100 text-gray-800'}
                font-semibold py-2 px-6 rounded-full shadow-md
                hover:bg-[#EC2642] hover:text-white transition-colors duration-300
                flex items-center whitespace-nowrap
              `}
            >
              {getCategoryIcon(category)}
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-88 object-cover"
                />
                <span className={`absolute top-4 right-4 text-white text-xs font-bold px-2 py-1 rounded-full ${item.spiciness.includes('🌶️') ? 'bg-red-900' : 'bg-[#EC2642]'}`}>
                  {item.spiciness}
                </span>
              </div>
              <div className="p-6 flex flex-col items-center">
                <div className="flex justify-between items-baseline w-full mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <span className="text-xl font-bold text-[#EC2642]">${item.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  {item.description}
                </p>
                <div className="flex items-center text-gray-500 text-sm">
                  <FaRegClock size={16} className="mr-2" /> 
                  <span>{item.time}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;