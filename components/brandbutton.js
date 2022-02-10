import React, {useState} from 'react';

const Brandbutton = ({data,name}) => {

  const [visibleContainer, setVisibleContainer] = useState(false);
//   console.log(visibleContainer);
      console.log(data);
  return <>
  <div className="brand-button-header">
    <div className="brand-label">
        {name}
    </div>
    <div className="numberofitems">
        {data.length}
    </div>
    <button onClick={() => setVisibleContainer(!visibleContainer)}>
        Pregled
    </button>
  </div>
    {visibleContainer && 
      <div className="brand-specs-container">
      <ol>
            {data.map( item => 
                            <li key = {item.attributes.oznaka}>
                            {item.attributes.oznaka}
                      </li>
                  )}      
      </ol>
  </div>
    }
  </>
  ;
};

export default Brandbutton;
