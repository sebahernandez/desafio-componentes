import PropTypes from "prop-types";

export const SocialButtons = ({ redesSociales }) => {
  return (
    <div className="social">
      {redesSociales.map((red) => (
        <a href={red.url} key={red.nombre} target="_blank" rel="noreferrer">
          <img src={red.icon} alt={red.nombre} />
        </a>
      ))}
    </div>
  );
};

SocialButtons.propTypes = {
  redesSociales: PropTypes.arrayOf(
    PropTypes.shape({
      nombre: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    })
  ).isRequired,
};
