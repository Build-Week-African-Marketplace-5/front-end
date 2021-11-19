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

