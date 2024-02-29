import { useNavigate } from 'react-router-dom';
import './Home.css';
import { WHATSAPP_URL_MENSAGEM } from '../utils';
import { profile } from '../images';
import RainBG from '../RainBG/RainBG';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <RainBG>
        <div className="Home">
          <div className="home-container">
            <div className="profile">
              <img className="photo" src={profile} alt="Foto de perfil"></img>
              <label className="name">
                <b>Ateliê Taisa Ribeiro</b>
              </label>
            </div>
            <div className="home-buttons-container">
              <div className="cButton" onClick={() => navigate('sobre')}>
                <label className="cText">Conheça nosso trabalho</label>
              </div>
              <div
                className="cButton"
                onClick={() => window.open(WHATSAPP_URL_MENSAGEM)}
              >
                <label className="cText">WhatsApp</label>
              </div>
              <div
                className="cButton"
                onClick={() => window.open(WHATSAPP_URL_MENSAGEM)}
              >
                <label className="cText">Agende um horário</label>
              </div>
              <div className="cButton" onClick={() => navigate('localizacao')}>
                <label className="cText">Localização</label>
              </div>
            </div>
          </div>
        </div>
      </RainBG>
    </>
  );
}

export default Home;
