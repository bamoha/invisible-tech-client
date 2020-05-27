import React, { useState } from 'react';

import FormField from './FormField'

const WeatherForm = ({ submitLocations }) => {
    const [locationArr, setLocationArr] = useState([])
    const [form, setForm] = useState(['field'])


    const handleAddLocation = (e, location) => {
        e.preventDefault()
        setLocationArr([...locationArr, location])
    }

    const addAnotherFormField = (e) => {
        e.preventDefault()
        setForm([...form, 'field'])
    }

    const handleSubmit = e => {
        submitLocations(e, locationArr)
    }

    return (
        <div className="form-body d-flex justify-content-center align-items-center flex-column">
            <div className='form-input m-3'>
                {form.map((input, index) => (
                    <FormField key={index}
                        handleAddLocation={handleAddLocation}
                        listItem={index + 1}
                    />
                ))}
                <a onClick={addAnotherFormField}>+Add Field</a>
            </div>
            <div className="mt-2 mb-5 d-flex justify-content-center align-items-center">
                <button type="button" class="btn btn-primary" onClick={handleSubmit}>Search Locations!</button>
            </div>
        </div>
    )
}

export default WeatherForm;