import React from 'react';
import './About.css';

const About = () => {
  return (
    <>
    <div class="about-us">
  <div class="welcome-section">
    <h1>Welcome to Life-giving!</h1>
    <p>At Life-giving, our passion for plants goes beyond mere cultivation; it’s about nurturing a lifestyle, creating green sanctuaries, and promoting well-being through nature. We believe that plants are not just decorations—they are life-giving companions that enhance our surroundings, purify our air, and uplift our spirits.</p>
  </div>
  
  <div class="story-section">
        <div className='story'>
        <h1>Our Story</h1>
        <p>Life-giving was born out of a deep love for nature and a desire to share that love with the world. What started as a small garden project has blossomed into a thriving business dedicated to bringing the beauty of plants to homes and offices. We are proud to offer a diverse range of high-quality plants, from hardy succulents to exotic tropicals, all carefully selected to thrive in your space.</p>
        </div>
        <div className='ourstoryimage'></div>
  </div>
  
  <div class="mission-section">
        <div className="ourmissionimage"></div>
        <div className='mission'>
        <h1>Our Mission</h1>
        <p>Our mission is to make the world greener, one plant at a time. We aim to provide our customers with the best selection of healthy, vibrant plants, along with the knowledge and support needed to care for them. We are committed to sustainability and environmental responsibility, ensuring that our practices are eco-friendly and our plants are ethically sourced.</p>
        </div>
        
  </div>

  <div class="team-section">
    <div className='team'>
    <h1>Our Team</h1>
    <p>Behind Life-giving is a dedicated team of horticulturists, designers, and customer service professionals who share a common love for plants. Our diverse expertise ensures that we can provide you with the best plants and the most accurate information. We are here to inspire and support you on your plant journey.</p>
    </div>
    <div className='ourteamimage'></div>

    </div>
</div>
    </>
    
  );
};

export default About;
