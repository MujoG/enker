import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return <nav>
      <div className="container">
          <div className="row">
              <div className="logo">
                  <Image width={35} height = {35} src = '/red.png'/>
                  ENKER CROSS REFERENCE
              </div>
              <div className="othernavitems">
                  {/* <ul>
                      <li>Trazi po specifikacijama</li>
                      <li>Liste</li>
                      <li>Login</li>
                  </ul> */}
                  <Link href='http://localhost:1337/admin/'>
                  <button>LOGIN</button>
                  </Link>
              </div>
          </div>
      </div>
  </nav>;
};

export default Navbar;
