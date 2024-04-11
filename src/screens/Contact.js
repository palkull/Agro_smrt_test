import React from 'react';
import './Contact.module.css';
import logo from '../assets/logo.png'; // Importa la imagen
import facebookIcon from '../assets/facebook-icon.png';
import twitterIcon from '../assets/twitter-icon.png';
import instagramIcon from '../assets/Instagram-Icon.png';

const Footer = () => {
  return (
    <footer className="Soporte" style={{ backgroundColor: 'black', color: 'white' }}>
      <div className="container">
     <div className="footer-content" style={{ display: 'flex', justifyContent: 'space-between', margin: '0 80px' }}>

          <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
            <img src={logo} alt="Logo" style={{ width: '130px', height: '130px' }} />
            <p style={{ marginLeft: '50px' }}><b>Agro / Smart Tech</b></p>
          </div>
          {/* Sección 2 */}
          <div className="footer-section">
            <h3>Contacto</h3>
            <ul>
              <li>
                Universidad Tecnológica de Durango
              </li>
              <li>
                Durango - Mezquital
              </li>
              <li>
                34308 Gabino Santillán, Dgo.
              </li>
              <li>
                <b>Teléfono: </b>+52 618-137-30-50
              </li>
            </ul>
          </div>

          {/* Sección 3 */}
          <div className="footer-section">
            <div className="social-media">
              <h3>Síguenos</h3>
              <ul>
                <li>
                  <a href="https://www.facebook.com/">
                    <img src={facebookIcon} alt="Facebook" style={{ width: '30px', height: '30px' }} />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/">
                    <img src={twitterIcon} alt="Twitter" style={{ width: '30px', height: '30px' }} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com">
                    <img src={instagramIcon} alt="Instagram" style={{ width: '30px', height: '30px' }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="copyright" style={{ textAlign: 'center', marginTop: '20px' }}>
        COPYRIGHT 2024 Agro | Smart Tech &bull; POLÍTICAS DE PRIVACIDAD
      </div>
    </footer>
  );
};

export default Footer;






