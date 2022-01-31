import React from 'react';

const Navbar = () => {
  return <nav>
      <div className="container">
          <div className="row">
              <div className="logo">
                  ENKER
              </div>
              <div className="othernavitems">
                  <ul>
                      <li>Trazi po specifikacijama</li>
                      <li>Liste</li>
                      <li>Login</li>
                  </ul>
              </div>
          </div>
      </div>
  </nav>;
};

export default Navbar;
