import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <>
        <div >
            <h1>"Reach out to us"</h1>
        </div>
        <div className='main'>
            <div className='map'>
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29331.07498195989!2d72.64234022691048!3d23.229095957861915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c2b6e73ebf611%3A0x7ea1967dda72131f!2sVan%20Chetna%20Kendra%2C%20Forest%20Department%2C%20Govt%20of%20Gujarat!5e0!3m2!1sen!2sin!4v1718043924514!5m2!1sen!2sin"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>          
            </div>
            <div className='form'>
              <form>
                <label>Your Name </label>
                <input type='text' placeholder='enter your name'/>
                <label>Email </label>
                <input type='emial' placeholder='enter your email'/>
                <label>Phone No </label>
                <input type='tel' placeholder='enter your phone number'/>
                <label>Comment </label>
                <textarea className='hello'/>
                <button type='submit'>Submit</button>
              </form>

            </div>
            
        </div>
        <div className='info'>
                 <p>Got questions?</p>
                <p>Need advice?</p> 
                <p>We’d love to hear from you! Reach out to us via email at info@lifegiving.com or call us at +91 9265441657. You can also visit us at our store located at 123 Green Way, Plant City, PC 12345.</p>
    
            </div>
    </>
  );
};

export default Contact;