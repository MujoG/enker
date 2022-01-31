import React from 'react';
import Select from 'react-select'

const options = [
    { value: 'ENKER', label: 'Enker' },
    { value: 'NGK', label: 'NGK' },
    { value: 'BOSCH', label: 'Bosch' },
    { value: 'CHAMPION', label: 'Champion' },
    { value: 'BERU', label: 'Beru' },
    { value: 'BRISK', label: 'Brisk' },
    { value: 'ACDELCO', label: 'AC Delco' },
    { value: 'DENSO', label: 'Denso' },]

const Formcomponent = () => {
  return <div className='form-container'>
      <form action="submit">
        <input type="text" placeholder='Unesi oznaku' />
        <div className="react-select-container">
        <Select options = {options} placeholder = 'Odaberi brand' />
        </div>     
        <button type='submit'>Trazi</button>
      </form>
  </div>;
};

export default Formcomponent;
