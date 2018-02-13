import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Services extends Component {
  render() {
    return (
      <div > Services
        <ul>
          <li><Link to="/services/studying">Studying abroad</Link></li>
          <li><Link to="/services/immigration">Immigration</Link></li>
          <li><Link to="/services/others">Others</Link></li>
        </ul>
      </div>
    );
  }
}

export default Services;
