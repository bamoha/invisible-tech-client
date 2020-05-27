import React, { useState } from 'react';

const FormField = ({ handleAddLocation, listItem }) => {
    const [ location, setLocation ] = useState('')
    const [ isAdded, setIsAdded ] = useState(false)

    const handleClick = (e) => {
        if (location.length === 0) {
            return alert('Location cannot be blank')
        }
        handleAddLocation(e, location)
        setIsAdded(true)
    }


    return (
    <div className='w-100'>
        {isAdded ?  
        <span>
           {`${listItem}.) ${location}`}
        </span>

        :
        <form onSubmit={handleClick}>

            <input className="form-control" value={location} 
                onChange={(e) => setLocation(e.target.value)} 
                placeholder="add location..."
            />
        </form>
        }
        
    </div>
    )
}

export default FormField