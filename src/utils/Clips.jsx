import PropTypes from "prop-types";

function Clips({ imgsrc }) {
  return (
    <div className="clips">
      <img src={imgsrc} alt="" />
      <i className="fa-solid fa-play"></i>
    </div>
  );
}

export default Clips;
Clips.propTypes = {
  imgsrc: PropTypes.string.isRequired, // Define the prop type for imgsrc
  clip: PropTypes.string.isRequired, // Define the prop type for clip
};
