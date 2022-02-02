import { mainContext } from "./Cotnext";
import { useState, useEffect } from "react";
import axios from 'axios';
const qs = require('qs');

// const queryEnker = qs.stringify({
//     populate: '*', 
//     filters: {
//       oznaka: {
//         ['$eq']: '',
//       },
//     },
//   }, {
//     encodeValuesOnly: true,
//   });

const query = qs.stringify({
    sort: ['title:asc'],
  pagination: {
    page: 1,
    pageSize: 1500,
  },
}, {
  encodeValuesOnly: true,
});

console.log(query);


const enkerURL = `http://localhost:1337/api/enkers?${query}`;


function ContextWrapper({children}){
    const [state, setState] = useState(query);

    const enkerArray=[];

    async function getDataStrapi(){
        try {
        var response = await axios.get(enkerURL);
        enkerArray = response.data.data;
        }
        catch(err){
          console.log(err.message);
          if(err.status === undefined){
            setPlugData(['undefined'],)
          }
        }
      };

    useEffect(() => {
      getDataStrapi()
      console.log(enkerArray);
    }, []);
    
    return(
        <mainContext.Provider value = {state}>
            {children}
        </mainContext.Provider>
    )
}

export default ContextWrapper