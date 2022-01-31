import React, {useState} from 'react';

const Brandbutton = () => {

    const [visibleContainer, setVisibleContainer] = useState(false);

  return <>
  <div className="brand-button-header">
    <div className="brand-label">
        BRAND LABEL
    </div>
    <div className="numberofitems">
        Number
    </div>
    <button onClick={() => setVisibleContainer(!visibleContainer)}>
        Click
    </button>
  </div>
    {visibleContainer && 
      <div className="brand-specs-container">
      <ol>
          <li>
                list item
          </li>     
      </ol>
  </div>
    }
  </>
  ;
};

export default Brandbutton;
