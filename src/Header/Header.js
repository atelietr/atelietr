import { useNavigate } from 'react-router-dom';
import { arrowLeft } from '../icons';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="header">
      <img
        alt="Voltar"
        onClick={() => navigate(-1)}
        className="arrow"
        src={arrowLeft}
      ></img>
    </div>
  );
};

export default Header;
