import React from 'react';
import Image from 'next/image'

const Navbar = () => {
  return <nav>
      <div className="container">
          <div className="row">
              <div className="logo">
                  <Image width={35} height = {35} src = '/red.png'/>
              </div>
              <div className="othernavitems">
                  {/* <ul>
                      <li>Trazi po specifikacijama</li>
                      <li>Liste</li>
                      <li>Login</li>
                  </ul> */}
                  ENKER CROSS REFERENCE
              </div>
          </div>
      </div>
  </nav>;
};

export default Navbar;
