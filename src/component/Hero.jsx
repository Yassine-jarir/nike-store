import PropTypes from "prop-types";
import Clips from "../utils/Clips";

function Hero({ heroapi }) {
  return (
    <div className="hero">
      <div className="container">
        <div className="hero__container">
          <div className="hero__Content">
            <h1>{heroapi.title}</h1>
            <h1>{heroapi.subtitle}</h1>
            <button>{heroapi.btntext}</button>
            <div className="hero__video">
              {heroapi.videos.map((item, i) => {
                return <Clips key={i} imgsrc={item.imgsrc} clip={item.clip} />;
              })}
            </div>
          </div>
          <div className="hero__img">
            <img src={heroapi.img} alt="hero__img" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

Hero.propTypes = {
  heroapi: PropTypes.object.isRequired,
};
