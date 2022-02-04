import React,{useContext} from 'react';
import Select from 'react-select'
import { iputContext } from '../context/Cotnext';


const options = [
    { value: 'enker', label: 'Enker' },
    { value: 'ngks', label: 'NGK' },
    { value: 'bosches', label: 'Bosch' },
    { value: 'champions', label: 'Champion' },
    { value: 'berus', label: 'Beru' },
    { value: 'brisks', label: 'Brisk' },
    { value: 'acdelcos', label: 'AC Delco' },
    { value: 'densos', label: 'Denso' },]

const Formcomponent = () => {

  const {oznaka,setOznaka,brand,setBrand,fetch,setFetch} = useContext(iputContext)

  function handleValues(values){
    setBrand(values)
  }

  function handleChange(e){
    e.preventDefault()
    setOznaka(e.target.value)
  }

  function handleKlik(){
    setFetch(!fetch)
  }

  console.log(brand);
  console.log(oznaka);

  return <div className='form-container'>
      <div className='form'>
        <input type="text" placeholder='Unesi oznaku' value = {oznaka} onChange={handleChange}/>
        <div className="react-select-container">
        <Select options = {options} placeholder = 'Odaberi brand' 
        onChange={values => handleValues(values.value)}
        />
        </div>     
        <button onClick={handleKlik}>Trazi</button>
      </div>
  </div>;
};

export default Formcomponent;
