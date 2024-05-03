import "./miniSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import banner1 from "./sliderImg/baner1.png"

const MiniSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000, // Velocidad de transición en milisegundos
    slidesToShow: 1, // Cantidad de imágenes a mostrar a la vez
    slidesToScroll: 1, // Cantidad de imágenes a desplazar en cada cambio
    autoplay: true, // Reproducción automática
    autoplaySpeed: 10000, // Intervalo de cambio en milisegundos (10 segundos)
    arrows: false,
  };

  return (
    <section className="slider-container">
      <Slider {...settings}>
        <img src={banner1} alt="" />
        <img src={banner1} alt="" />
        <img src={banner1} alt="" />
        <img src={banner1} alt="" />
      </Slider>
    </section>
  );
};

export default MiniSlider;
