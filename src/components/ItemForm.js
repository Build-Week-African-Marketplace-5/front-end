import React from 'react';

export default function ItemForm(props) {

    const { submit, setFormValues, values, disabled, errors } = props

    const onChange = (evt) => {
        const { name, value } = evt.target
        setFormValues({ ...values, [name]: value })
    }

    return(
        <form onSubmit={submit}>
            <div>
                <h2>List an Item to Sell</h2>
            </div>

            <label>Select Location:
                    <select
                        value={values.location} 
                        onChange={onChange} 
                        name='location'
                    >
                        <option value=''>- Select a Location -</option>
                        <option value='1'>Lagos</option>
                        <option value='2'>Addis Ababa</option>
                        <option value='3'>Nairobi</option>
                        <option value='4'>Kinshasa</option>
                        <option value='5'>Cape Town</option>
                    </select>
                </label>
            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.price}</div>
                <div>{errors.description}</div>
            </div>
            <div className='new-item'>
                <label> Item Name:
                    <input
                        value= {values.name}
                        onChange={onChange}
                        name='name'
                        type='text'
                    />
                </label>
                <br/>
                <label> Price:
                    <input
                        value= {values.price}
                        onChange={onChange}
                        name='price'
                        type='number'
                    />
                </label>
                <br/>
                <label>Item Description:
                <input
                    value={values.description} 
                    onChange={onChange} 
                    name='description' 
                    type='textarea'
                />
                </label>
                <br/>
            </div>
            <button 
                id="submit-listing-button"
                disabled={disabled}> Save Listing
            </button>
        </form>
       
    )
}

