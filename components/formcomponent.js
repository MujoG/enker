import React,{useContext,useState} from 'react';
import Select from 'react-select'
import { iputContext } from '../context/Cotnext';


const options = [
    { value: 'enkers', label: 'Enker' },
    { value: 'ngks', label: 'NGK' },
    { value: 'bosches', label: 'Bosch' },
    { value: 'champions', label: 'Champion' },
    { value: 'berus', label: 'Beru' },
    { value: 'brisks', label: 'Brisk' },
    { value: 'acdelcos', label: 'AC Delco' },
    { value: 'densos', label: 'Denso' },]

const Formcomponent = () => {

  const {oznaka,setOznaka,brand,setBrand,fetch,setFetch,labelar} = useContext(iputContext)
  const [suggestion, setSuggestion] = useState([]);
  const [brandlabel, setBrandLabel] = useState('Enker')

  // console.log(labelarray)

  function handleValues(values){
    setBrand(values.value)
    console.log(brand)
    setBrandLabel(values.label)
  }

  function handleChange(oznaka){
    let matches = []
    if(oznaka.length > 0){
      matches = labelar.filter(lbl => {
        const regex = new RegExp(`${oznaka}`,"gi");
        console.log(lbl.match(regex))
        return lbl.match(regex)
      })
    }
    setSuggestion(matches)
    console.log(suggestion)
    setOznaka(oznaka)
  }

  function handleKlik(){
    setFetch(!fetch)
    // console.log(brand)
  }

  function handleSuggestions(item){
    setOznaka(item)
    setFetch(!fetch)
    setSuggestion([])
  }

  // console.log(brand);
  // console.log(oznaka);

  return <div className='form-container'>
      <div className='form'>
        <div className="input">
        <input type="text" placeholder={`Unesi ${brandlabel} oznaku`}
         onChange={e => handleChange(e.target.value)}
         value = {oznaka}
         />
          {suggestion.length >0 && 
            <div className="list-container">
              <ol>
                {suggestion.map(item => (
                <li name = {item} onClick={() => handleSuggestions(item)}>{item}</li>
                ))}
              </ol>
            </div>
          }
        </div>
        <span className='justnumber'>{labelar.length}</span>
        <div className="react-select-container">
        <Select options = {options} placeholder = {`${brandlabel}`} 
        onChange={values => handleValues(values)}
        />
        </div>     
        <button onClick={handleKlik}>Trazi</button>
      </div>
  </div>;
};

export default Formcomponent;
