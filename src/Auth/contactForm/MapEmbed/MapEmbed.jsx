import React from 'react';

function MapEmbed() {
  return (
    <div style={{ width: '100%', height: '450px', overflow: 'hidden' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14919.339133347139!2d73.3972097!3d20.7979709!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be09d98e8885c8f%3A0x1d815f84cbd72943!2sYash%20Campus!5e0!3m2!1sen!2sin!4v1731651437458!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
}   

export default MapEmbed;
