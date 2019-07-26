import React from 'react'
import { withFormik, Form, Field } from 'formik';

function AddSmurfForm() {
    return(
        <Form>
            <Field 
                type='text'
                name='name' 
                placeholder='Smurf Name' 
            />
            <Field 
                type='number'
                name='age' 
                placeholder='Smurf Age' 
            />
            <Field 
                type='text'
                name='height' 
                placeholder='Smurf Height' 
            />
            <button type='submit'>Add Smurf!</button>
        </Form>
    )
}

const FormikAddSmurfForm = withFormik({
    mapPropsToValues() {
        return {
            name: '',
            age: '',
            height: ''
        }
    },

    handleSubmit(values) {
        console.log('formik', values)
    }
})(AddSmurfForm)

export default FormikAddSmurfForm