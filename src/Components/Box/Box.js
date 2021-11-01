import './Box.css';

function Box({ type = 'small', classNames = '' }) {
  return <div className={`box box-${type} ${classNames}`}>Box</div>;
}

export default Box;
