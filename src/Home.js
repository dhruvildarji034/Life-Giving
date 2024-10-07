import React from 'react';
import  { useState, useEffect } from 'react';
import './Imagegallary.css';
import './Home.css';


import alovera from './images/alovera.jpg';
import cactus from './images/cactus.jpg';
import guava from './images/guava.jpg';
import moneyvale from './images/moneyvale.jpg';
import tulsi from './images/tulsi.jpg';
import sunflower from './images/sunflower.jpg';
import polyalthia from './images/polyalthia.jpg';
import rose from './images/rose.jpg';


const Home = () => {
  const facts = [
    "Trees are the longest living organisms on Earth.",
    "A mature leafy tree produces as much oxygen in a season as 10 people inhale in a year.",
    "Trees can communicate with each other through underground networks of fungi.",
    "Over 60,000 different tree species exist in the world.",
    "Many plants have medicinal properties.",
    "The world's smallest flowering plant is the watermeal (Wolffia spp.), which is about the size of a grain of rice.",
    "The world's tallest tree is a coast redwood in California, measuring over 379 feet tall.",
    "Orchids have the largest variety of flowers, with over 25,000 documented species.",
    "Aloe vera plants contain a gel that is commonly used to soothe burns and skin irritations.",
    "Tropical forests alone produce over 40% of the oxygen we breathe.",
    "Recent research has found that plant roots can respond to environmental sounds.",
    "Baobab trees can store thousands of liters of water in their trunks."
  ];

  const [currentFact, setCurrentFact] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFact((prevFact) => (prevFact + 1) % facts.length);
    }, 5000); // 15000 milliseconds = 15 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [facts.length]); 

  const menu = [
    {
      name: "Alovera",
      image: alovera,
      category: "Nonflowering",
      Price: "145",
      desc: "Aloe vera is a succulent plant species of the genus Aloe. It is widely distributed, and is considered an invasive species in many world regions."
    },
    {
      name: "Cactus",
      image: cactus,
      category: "Nonflowering",
      Price: "120",
      desc: "Cacti are succulent plants that thrive in arid regions and are known for their unique appearance and resilience."
    },
    {
      name: "Bonsai",
      image: rose,
      category: "Nonflowering",
      Price: "155",
      desc: "Bonsai is a Japanese art form using cultivation techniques to produce small trees in containers that mimic the shape and scale of full-size trees."
    },
    {
      name: "Guava",
      image: guava,
      category: "flowering",
      Price: "135",
      desc: "Guava is a tropical fruit native to Mexico, Central America, and northern South America."
    },
    {
      name: "Moneyvale",
      image: moneyvale,
      category: "Nonflowering",
      Price: "160",
      desc: "Moneyvale is known for its lush, green foliage and is often kept as an indoor plant."
    },
    {
      name: "Tulsi",
      image: tulsi,
      category: "flowering",
      Price: "110",
      desc: "Tulsi, also known as Holy Basil, is a revered plant in India known for its medicinal properties."
    },
    {
      name: "Polyalthia",
      image: polyalthia,
      category: "flowering",
      Price: "100",
      desc: "Polyalthia is a genus of flowering plants, known for their diverse forms and uses in traditional medicine."
    },
    {
      name: "Sunflower",
      image: sunflower,
      category: "flowering",
      Price: "135",
      desc: "Sunflowers are large, bright flowers known for their beauty and for producing sunflower seeds and oil."
    }
  ];

  const [currentMenu, setCurrentMenu] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMenu((prevMenu) => (prevMenu + 1) % menu.length);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [menu.length]);


  return (
    <>
      <div className='facts'>
            <h1>Did you know?</h1>
            <p>"{facts[currentFact]}"</p>
      </div>
      <div className='menu'>
        <div className='photo'>
        <img src={menu[currentMenu].image} height="250px" width="200px" alt={menu[currentMenu].name} />
        </div>
        <div className='details'>
        <p>Name: {menu[currentMenu].name} </p>
        <p>{menu[currentMenu].desc}</p>
        <p>Category: {menu[currentMenu].category}</p>
        <p>Price: {menu[currentMenu].Price} Rs</p>
        </div>

        

      </div>
      
      <div className='theother'>
        <div className='bgimage' ></div>
        <div className='commain'>
          <div className='community'></div>
          <div class="community-section">
          <h1>Join Our Community</h1>
          <p>We believe in the power of community and the joy of sharing knowledge and experiences. Join us on social media to stay updated on the latest plant trends, care tips, and special offers. Whether you’re a seasoned gardener or a plant novice, you’ll find a welcoming community ready to help you grow.</p>
          </div>
      </div>
      <div className='whyusmain'>
        <div className='whyus'></div>
          <div class="whyus-section">
          <h1>Why Choose Us?</h1>
        </div>    <div className='cardmain'>
                  <div class="card">
                    <div class="container">
                    <h4><b>Quality Assurance</b></h4>
                    <p> Every plant we sell is handpicked and thoroughly inspected to ensure it meets our high standards of health and beauty.</p>
                    </div>          
                  </div>
                  <div class="card">
                    <div class="container">
                    <h4><b>Expert Guidance</b></h4>
                    <p>Our team of plant enthusiasts is always ready to offer advice and tips to help you select the perfect plant and care for it properly.</p>
                    </div>          
                  </div>
                  <div class="card">
                    <div class="container">
                    <h4><b>Sustainability</b></h4>
                    <p>We are committed to environmentally friendly practices, using sustainable packaging and promoting green living.</p>
                    </div>          
                  </div>
                  <div class="card">
                    <div class="container">
                    <h4><b>Customer Satisfaction</b></h4>
                    <p>Your satisfaction is our priority. We provide excellent customer service and a guarantee on all our plants.</p>
                    </div>          
                  </div> 
                  </div> 
                  
        
      </div>     
    </div>
    
        
    </>
  );
};

export default Home;