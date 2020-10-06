import React from 'react';
import { Link } from 'react-router-dom';

const ThemedLink = (props) => {
  return <Link to={props.to} style={{color: '#3f3f5b'}}>{props.children}</Link>
};

export default ThemedLink;