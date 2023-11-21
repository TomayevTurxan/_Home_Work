// eslint-disable-next-line no-unused-vars
import React from 'react';

const Index = () => {
  const iframeStyle = {
    border: '0',
    width: '100%',
    height: '650px',
  };

  return (
    <>
      <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d82849.40379748742!2d49.92864801381607!3d40.48040627467749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40308bc96eeb890d%3A0x8e50f400b061633b!2sYanar%20da%C4%9F!5e0!3m2!1sen!2saz!4v1700597836380!5m2!1sen!2saz"
        style={iframeStyle}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Index;
