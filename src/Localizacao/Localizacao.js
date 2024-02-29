import Header from '../Header/Header';
import './Localizacao.css';
import { MAP_URL } from '../utils';

function Localizacao() {
  return (
    <div>
      <Header />
      <div className="localizacao-container">
        <p className="title">Nosso Endereço</p>
        <p className="text">Rua Oscar Soares Mesquita, 96</p>
        <p className="text">Bairro Serra Azul</p>
        <p className="text">Lavras-MG</p>

        <div onClick={() => window.open(MAP_URL)} className="cButton">
          <label className="cText">Ver no mapa</label>
        </div>
      </div>
    </div>
  );
}

export default Localizacao;
