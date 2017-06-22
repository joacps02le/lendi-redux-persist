import React from 'react';
import PropTypes from 'prop-types';

const Base = ({children}) => (
  <div>
        {children}
  </div>
);

Base.propTypes = {
    children: PropTypes.object.isRequired,
};

export default Base;
