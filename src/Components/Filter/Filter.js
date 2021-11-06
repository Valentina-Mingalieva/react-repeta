import React, { Component } from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <label>
      Filter on name
      <input type="text" value={value} onChange={onChange} />
    </label>
  );
};

export default Filter;
