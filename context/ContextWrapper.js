import { mainContext,iputContext } from "./Cotnext";
import { useState, useEffect } from "react";
import axios from 'axios';
const qs = require('qs');

//query for all enkerplugs => for array of objects
const query = qs.stringify({
  populate: '*', 
  pagination: {
    page: 1,
    pageSize: 1500,
  },
}, {
  encodeValuesOnly: true,
});


function ContextWrapper({children}){
    const [state, setState] = useState({'nesto':'nesto'});
    const [oznaka, setOznaka] = useState('');
    const [brand, setBrand] = useState('enker')
    const [fetch,setFetch] = useState(false)

    const queryoneplug = qs.stringify({ 
      populate:'*',
      filters:{
        oznaka:{
          ['$eq']:oznaka,
        }
      }
    }, {
      encodeValuesOnly: true,
    });

    const querychampion = qs.stringify({
      populate: '*', 
      filters: {
        champions: {
          oznaka: {
              ['$eq']: oznaka,
            },
        }
      },
    }, {
      encodeValuesOnly: true,
    });

    var myquery = `populate=%2A&filters[oznaka][$eq]=${oznaka}`
    if(brand != 'enker'){
      var myquery = `populate=%2A&filters[${brand}][oznaka][$eq]=${oznaka}`
      console.log(myquery);
    }

    const THEURL = `http://localhost:1337/api/enkers?${myquery}`;


    async function getDataStrapi(){
        try {
        var response = await axios.get(THEURL);
        console.log(response.data.data[0].attributes);
        setState(response.data.data[0].attributes)
        }
        catch(err){
          console.log(err.message);
          if(err.status === undefined){
            console.log(err);
          }
        }
      };

    useEffect(() => {
      getDataStrapi()
      console.log(fetch +'mujo');
      console.log(oznaka);
      console.log(brand);
    }, [fetch]);
    
    console.log(oznaka);

    return(
        <mainContext.Provider value = {state}>
            <iputContext.Provider value = {{oznaka, setOznaka,setBrand,brand,fetch,setFetch}}>
            {children}
            </iputContext.Provider>
        </mainContext.Provider>
    )
}

export default ContextWrapper