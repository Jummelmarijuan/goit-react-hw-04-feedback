import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <p className="text-red-500 text-lg">{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;