import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="quienes-somos">
      <footer id="contacto"></footer>
      <div className="footer">
        <p>&copy; 2024 FBI. Todos los derechos reservados.</p>
        <p>
          <a href="#">Política de Privacidad</a> |{" "}
          <a href="#">Términos de Servicio</a> | <a href="#">Accesibilidad</a>
        </p>
        <p>Contacto: (555) 123-4567 | luis.yanez36@inacapmail.cl</p>
        <div className="redes-sociales" id="redes-sociales">
          <a href="#">Twitter</a> | <a href="#">Facebook</a> |{" "}
          <a href="#">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
