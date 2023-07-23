import React from 'react';

const FacetCheckbox = ({ name, values, onChange }) => {
  return (
    <div className="facet-checkbox">
      <h3>{name}</h3>
      {values.map(({ value, label }) => (
        <label key={value}>
          <input
            type="checkbox"
            value={value}
            onChange={(e) => onChange(name, e.target.value, e.target.checked)}
          />
          {label}
        </label>
      ))}
    </div>
  );
};

export default FacetCheckbox;
