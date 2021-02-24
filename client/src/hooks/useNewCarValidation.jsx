import React from 'react'

const useNewCarValidation = (defaultOpts={
    year: '2021',
    make: '',
    model: '',
    vin: '',
    photoUrl: ''
}) => {

    const [values, setValues] = React.useState(defaultOpts)

    const handleChange = (e) => {
        const { name, value } = e.target
        
        setValues({
            ...values,
            [name]: value
        })
    }

    const validate = values => {
        const isValid = true
        const errors = {} 

        for(const key in values) {
            switch (key) {
                case 'vin':
                    if (!values[key]) errors[key] = 'Please provide a vin.'
                    isValid = false
                    break;
                default:
                    if (!values[key]) errors[key] = `Please provide a ${key}.`
                    isValid = false
                    break;
            }
        }

        return { isValid, errors }

    }

    return { values, handleChange, validate }

}

export default useNewCarValidation
