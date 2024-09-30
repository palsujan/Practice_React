import React, {useState} from 'react'

const SelectFrom = () => {
    const  countrtStateData = {
        India: ['Maharashtra', 'Gujarat', 'Karnataka', 'Tamil Nadu'],
        USA: ['California', 'Texas', 'Florida', 'New York'],
        Australia: ['New South Wales', 'Queensland', 'Victoria'],

    }
    const [selectCountry, setSelectCountry] = useState('');
    const [states, setStates] = useState([]);
    const [selectedState, setSelectedState] = useState('');

    const handleCountryChange = (e) =>{
        const selectedCounrty = e.target.value;
        setSelectCountry(selectedCounrty);
        setStates(countrtStateData[selectedCounrty] || []);
        setSelectedState('');
    }
    const handleStateChange = (e) =>{
        setSelectedState(e.target.value);
    }
  return (
    <div>
        <h2>Select Country and State</h2>
        <label htmlFor='country'>Select country</label>
        <br></br>
        <select id='country' value={selectCountry} onChange={handleCountryChange}>
            <option value="">--Select Country--</option>
            {console.log(Object.keys(countrtStateData))};
            {Object.keys(countrtStateData).map((country)=>(
                <option key={country} value={country}>
                    {country}
                </option>
            ))}
        </select>
        {/* State Dropdown (only show when a country is selected) */}
        {selectCountry && (
            <>
                <br/>
                <br/>
                <select id='state' value={selectedState} onChange={handleStateChange}>
                    <option value=''>--Select State--</option>
                    {
                        states.map((state)=>(
                            <option key={state} value={state}>
                                {state}
                            </option>
                        ))
                    }
                </select>
            </>
        )}
        {/* Display selected country and state */}
        {
            selectedState &&(
                <div>
                    <h3>
                        Selected Country: {selectCountry}, State: {selectedState}
                    </h3>
                </div>
            )
        }

    </div>

    
  )
}

export default SelectFrom;