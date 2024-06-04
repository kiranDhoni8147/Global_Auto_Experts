import React from 'react';
import './spinner.css'; // import CSS for styling

const Spinner = ({ loading }) => {
  return (
    <div className={`spinner-overlay ${loading ? 'visible' : ''}`}>
      <div className="spinner"></div>
    </div>
  );
};

export default Spinner;
