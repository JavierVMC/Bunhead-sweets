import { FaInstagramSquare,FaWhatsappSquare } from 'react-icons/fa';


export const Footer = () => {
  return (
    <footer>
      <div className="container text-center">
        <div>
          <div className="col-sm-12 col-md-3">
            <h4>Horarios</h4>
            <p>8:00 - 17:00</p>
          </div>
          <div className="col-sm-12 col-md-3">
            <h4>Teléfonos</h4>
            <p>00994512154</p>
          </div>
          <div className="col-sm-12 col-md-3">
            <h4>Dirección</h4>
            <p>villa club</p>
          </div>
          <div className="col-sm-12 col-md-3">
            <h4>Redes sociales</h4>
            <p id="redes-footer">
              <a href="https://www.instagram.com/bunheadsweets/" target="blank"><FaInstagramSquare></FaInstagramSquare></a>
              {' '}
              <a href="#s"><FaWhatsappSquare></FaWhatsappSquare></a>
            </p>
          </div>
        </div>
      </div>
      <div className="container text-center copyright">
          <p>
            &copy; 2021{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              Bunheads' Sweets
            </a>
          </p>
        </div>
    </footer>
  );
};
