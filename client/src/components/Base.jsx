import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Auth from '../modules/Auth';


const Base = ({ children }) => (
  <div>
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/">REACT APP</IndexLink>
      </div>

      { Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <Link to="/logout">LOG OUT</Link>
        </div>
      ) : (
      <div className="top-bar-right">
        <Link to="/login">LOG IN</Link>
        <Link to="/signup">SIGN UP</Link>
      </div>
      )}

    </div>

    { children }

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;