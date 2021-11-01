import PropTypes from 'prop-types';
import s from './Alert.module.css';

export default function Alert({ text, type }) {
  /* const typeClass = type ? `Alert--${type}` : ''; */

  return (
    <p role="alert" className={s[type]}>
      {text}
    </p>
  );
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['', 'success', 'warning', 'error']).isRequired,
};
