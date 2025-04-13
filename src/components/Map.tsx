import React from "react";

const Map: React.FC = () => {
  return (
    <div className="rounded-lg overflow-hidden mb-4">
      <iframe
        title="Delivery Route Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.0870844735314!2d77.31856917429073!3d28.567147587049035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce521218557b5%3A0x45051fcfc696f085!2sDLF%20Mall%20of%20India!5e0!3m2!1sen!2sin!4v1744480007304!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>


    </div>
  );
};

export default Map;
