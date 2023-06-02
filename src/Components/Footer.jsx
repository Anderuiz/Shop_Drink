import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div>
        <p>
          ¡Gracias por visitar nuestra tienda en línea de licores
          internacionales!
        </p>
        <p>
          © {new Date().getFullYear()} Drink-Shop. Todos los derechos
          reservados.
        </p>
        <div className="social-icons">
          <a href="https://www.facebook.com/">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
