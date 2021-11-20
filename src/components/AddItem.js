import React, { useState, useEffect } from "react";
import schema from "../validation/listingSchema";
import axios from 'axios';
import * as yup from 'yup';
import { useHistory } from "react-router-dom";
import ItemForm from "./ItemForm";

const initialFormValues = {
    name: '',
    price: '',
    description: '',
    location: ''
}
const initialFormErrors = {
    name: '',
    price: '',
    description: '',
}

const initialListing = []
const initialDisabled = true

export default function AddItem() {
  const [listing, setListing] = useState(initialListing)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  const { push } = useHistory()



  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors(
          {...formErrors,[name]: '',}
        );
      })
      .catch((err) => {
        setFormErrors(
          { ...formErrors,[name]: err.errors[0]}
        );
        console.log(formErrors);
      });
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  };


  const formSubmit = (e) => {
    e.preventDefault();
      const newItemListing = {
        item_name: formValues.name.trim(),
        item_price: Number(formValues.price.trim()),
        item_description: formValues.description.trim(),
      }

      console.log(formValues.location);
        axios
          .post(`https://african-marketplace-buildweek.herokuapp.com/api/locations/${formValues.location}/item`, newItemListing)
          .then((res) => {
            setListing([...listing, res.data,])
            push('/items')
            setFormValues(initialFormValues);
            console.log(newItemListing)

          }).catch((err) => {
            console.error(err);
            console.log(newItemListing);
            setFormValues(initialFormValues)
          })
  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid)
    });
  }, [formValues])

  return(
    <div className="additem">
    <ItemForm
    values={formValues}
    change={inputChange}
    submit={formSubmit}
    disabled={disabled}
    errors={formErrors}
    setFormValues={setFormValues}
    />
    </div>

  )
  }


 