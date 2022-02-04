import React,{useContext} from 'react';
import { iputContext, mainContext } from '../context/Cotnext';


const Specscomponent = () => {

    const plug = useContext(mainContext)
    const {oznaka} = useContext(iputContext)

    console.log(plug);

  return <div className='specs-container'>
      {!plug.nesto &&
            <>
                        <div className="plug-label">
            {plug.oznaka}
            <span>
                Enker oznaka
            </span>
      </div>
      <div className="plug-specs">
          <ul>
              <li>
                  <span className='info-text'>
                    Navoj
                  </span>
                  <span className='info-info'>
                      {plug.navoj}
                  </span>
              </li>
              <li>
                  <span className='info-text'>
                    Otvor ključa
                  </span>
                  <span className='info-info'>
                      {plug.otvorkljuca}.00 mm
                  </span>
              </li>
              <li>
                  <span className='info-text'>
                    Dužina navoja
                  </span>
                  <span className='info-info'>
                      {plug.duzinanavoja}.00 mm
                  </span>
              </li>
              <li>
                  <span className='info-text'>
                    Sjedište
                  </span>
                  <span className='info-info'>
                      {plug.konicnosjediste ? 'Konusno sjedište' : 'Ravno sjedište'}
                  </span>
              </li>
              <li>
                  <span className='info-text'>
                    Toplotna vrijednost
                  </span>
                  <span className='info-info'>
                      {plug.toplotnavrijednost}
                  </span>
              </li>
              <li>
                  <span className='info-text'>
                    Centralna elektroda
                  </span>
                  <span className='info-info'>
                      {plug.elektroda}
                  </span>
              </li>
              <li>
                  <span className='info-text'>
                    Prostor iskre
                  </span>
                  <span className='info-info'>
                      {plug.prostoriskre}.00 mm
                  </span>
              </li>
              <li>
                  <span className='info-text'>
                    Broj bočnih elektroda
                  </span>
                  <span className='info-info'>
                      {plug.brojelektroda}
                  </span>
              </li>
              <li>
                  <span className='info-text'>
                    Rezistor
                  </span>
                  <span className='info-info'>
                      {plug.rezistor ? 'DA' : 'NE'}
                  </span>
              </li>
              <li>
                  <span className='info-text'>
                    Zazor svjećice
                  </span>
                  <span className='info-info'>
                      {plug.zazor<1 ? 'manje od 1.00mm' : `${plug.zazor}mm`}
                  </span>
              </li>
          </ul>
      </div>
            </>
      }
  </div>;
};

export default Specscomponent;