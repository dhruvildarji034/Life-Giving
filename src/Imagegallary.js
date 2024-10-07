import React, { useState, useEffect } from 'react';
import rose from './images/rose.jpg';
import alovera from './images/alovera.jpg';
import cactus from './images/cactus.jpg';
import guava from './images/guava.jpg';
import moneyvale from './images/moneyvale.jpg';
import tulsi from './images/tulsi.jpg';
import sunflower from './images/sunflower.jpg';
import polyalthia from './images/polyalthia.jpg';
import './Imagegallary.css';

function Imagegallary() {
  const initialImages = [
    {
      name: "Alovera",
      image: alovera,
      category: "Nonflowering",
      Price:"145",
      desc: "Aloe vera is a succulent plant species of the genus Aloe. It is widely distributed, and is considered an invasive species in many world regions."
    },
    {
      name: "Cactus",
      image: cactus,
      category: "Nonflowering",
      Price:"120",
      desc: "Cacti are succulent plants that thrive in arid regions and are known for their unique appearance and resilience."
    },
    {
      name: "Bonsai",
      image: rose,
      category: "Nonflowering",
      Price:"155",
      desc: "Bonsai is a Japanese art form using cultivation techniques to produce small trees in containers that mimic the shape and scale of full-size trees."
    },
    {
      name: "Guava",
      image: guava,
      category: "flowering",
      Price:"135",
      desc: "Guava is a tropical fruit native to Mexico, Central America, and northern South America."
    },
    {
      name: "Moneyvale",
      image: moneyvale,
      category: "Nonflowering",
      Price:"160",
      desc: "Moneyvale is known for its lush, green foliage and is often kept as an indoor plant."
    },
    {
      name: "Tulsi",
      image: tulsi,
      category: "flowering",
      Price:"110",
      desc: "Tulsi, also known as Holy Basil, is a revered plant in India known for its medicinal properties."
    },
    {
      name: "Polyalthia",
      image: polyalthia,
      category: "flowering",
      Price:"100",
      desc: "Polyalthia is a genus of flowering plants, known for their diverse forms and uses in traditional medicine."
    },
    {
      name: "Sunflower",
      image: sunflower,
      category: "flowering",
            Price:"135",
      desc: "Sunflowers are large, bright flowers known for their beauty and for producing sunflower seeds and oil."
    }
  ];

  const [images, setImages] = useState(initialImages);
  const [cart, setCart] = useState(() => {
    const initialCart = {};
    initialImages.forEach(image => {
      initialCart[image.name] = 0;
    });
    return initialCart;
  });

  const addToCart = (name) => {
    setCart(prevCart => ({
      ...prevCart,
      [name]: prevCart[name] + 1
    }));
  };

  const removeFromCart = (name) => {
    setCart(prevCart => ({  
      ...prevCart,
      [name]: prevCart[name] > 0 ? prevCart[name] - 1 : 0
    }));
  };

  const renderGallery = (filteredImages) => {
    return filteredImages.map((value) => (
      <div className="dd" key={value.name}>
        <img src={value.image} height="250px" width="200px" alt={value.name} />
        <h3>{value.name}</h3>
        <p>{value.desc}</p>
        <p>Category: {value.category}</p>
        <p>Price: {value.Price}Rs</p>
        <div className="cart-buttons">
          <button onClick={() => addToCart(value.name)}>+</button>
          <button onClick={() => removeFromCart(value.name)}>-</button>
        </div>
        <div className='qcart'><p>Quantity in Cart: {cart[value.name]}</p></div>
        
      </div>
    ));
  };

  const all = () => setImages(initialImages);

  const flowering = () => setImages(initialImages.filter(image => image.category === "flowering"));
  
  const Nonflowering = () => setImages(initialImages.filter(image => image.category === "Nonflowering"));

  useEffect(() => {
    renderGallery(images);
  }, [images, cart]);

  return (
    <div className='theother'>
      <div className='imagess'>
        <button onClick={all}>All</button>
        <button onClick={flowering }>flowering </button>
        <button onClick={Nonflowering }>Nonflowering </button>
      </div>
      <div className='cc' id="gallery">
        {renderGallery(images)}
      </div>
    </div>
  );
}

export default Imagegallary;
