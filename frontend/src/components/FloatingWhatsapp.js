import React from "react";
import { NavLink } from "react-router-dom";

const FloatingWhatsapp = () => {
  const phoneNumber = "918828889962";
  const message = "Hi!";
  return (
    <div>
      <NavLink
        to={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreffer"
        className="whatsapp-icon"
      >
        <i class="fa-brands fa-whatsapp"></i>
      </NavLink>
    </div>
  );
};

export default FloatingWhatsapp;
