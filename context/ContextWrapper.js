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
    const [brand, setBrand] = useState('enkers')
    // const [brandValue, setBrandValue] = useState('enkers')
    const [fetch,setFetch] = useState(false);
    const [labelar,setLabelar] = useState([]);

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

    const labelarray = [];

    var myquery = `populate=%2A&filters[oznaka][$eq]=${oznaka}`;
    var ALLPLUGS = `http://164.92.236.184:1337/api/${brand}?${query}`;

    console.log(ALLPLUGS)
    
    if(brand != 'enkers'){
      var myquery = `populate=%2A&filters[${brand}][oznaka][$eq]=${oznaka}`
      var ALLPLUGS = `http://164.92.236.184:1337/api/${brand}?${query}`;
      console.log(myquery);
    console.log(ALLPLUGS)

    }

    const THEURL = `http://164.92.236.184:1337/api/enkers?${myquery}`;


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

      async function getAllPlugs(){
        try {
        var response = await axios.get(ALLPLUGS);
        console.log(response.data.data);
        const responsearray = response.data.data
        let labelarray1 = []
        if(responsearray.length > 0){
              responsearray.forEach(element => {
              labelarray1.push(element.attributes.oznaka)
          });
          setLabelar(labelarray1)
        }
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
    }, [fetch]);
    
    useEffect(()=> {
      getAllPlugs()
      setOznaka('')
    },[brand])

    // console.log(labelar)
    

    return(
        <mainContext.Provider value = {state}>
            <iputContext.Provider value = {{oznaka, setOznaka,setBrand,brand,fetch,setFetch,labelar}}>
            {children}
            </iputContext.Provider>
        </mainContext.Provider>
    )
}

export default ContextWrapper