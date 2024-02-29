import Slider from 'react-slick';
import Header from '../Header/Header';
import { produtos } from '../images';
import './About.css';

function About() {
  const text =
    'No nosso ateliê, somos especializados no aluguel de vestidos para festas e madrinhas, oferecendo uma ampla variedade de opções para você brilhar em ocasiões especiais. Nosso atendimento é personalizado, com horários agendados para compreender a proposta da ocasião e oferecer os melhores vestidos que se encaixam perfeitamente no seu estilo e no evento em questão. Conte conosco para tornar seu momento ainda mais especial e inesquecível!';
  var settings = {
    infinite: true,
    speed: 1,
    slidesToShow: 3,
    autoplay: false,
    autoplaySpeed: 1000,
    focusOnSelect: false,
    arrows: false,
    draggable: false,
  };

  return (
    <div>
      <Header />
      <div className="about-container">
        <p className="title">Sobre nós</p>
        <p className="text">{text}</p>
        <div className="slider-container">
          <Slider {...settings}>
            {produtos.map((produto, index) => (
              <img
                alt={`Vestido ${index}`}
                className="about-img"
                style={{ width: '100%' }}
                key={produto}
                src={produto}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default About;
