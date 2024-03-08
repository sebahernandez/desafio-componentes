import Alert from "react-bootstrap/Alert";
import PropTypes from "prop-types";
export function MensajeAlerta({ variant, children }) {
  return (
    <>
      <Alert variant={variant}>{children}</Alert>
    </>
  );
}

MensajeAlerta.propTypes = {
  variant: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
