import "../App.css";
import PropTypes from "prop-types";

const Card = ({ sorc, title, details, delet, colr1, colr2 }) => {
  return (
    <div className="container">
      <img className="Imeg" src={sorc} alt="an img" />
      <h4 className="Title" style={{ color: colr1 }}>
        {title}
      </h4>
      <p className="Price" style={{ color: colr2 }}>
        {details}
      </p>
      <button className="deleter" onClick={delet}>
        Delete
      </button>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  sorc: PropTypes.string.isRequired,
  details: PropTypes.string.isRequired,
  delet: PropTypes.func.isRequired,
  colr1: PropTypes.string,
  colr2: PropTypes.string,
};

export default Card;
