import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import useNewCarValidation from '../hooks/useNewCarValidation'
import React from 'react'
import { gql, useMutation } from '@apollo/client'

const years = []
for(let i = 2022; i >= 1950; i--) {
    years.push(i)
}

const options = years.map(year => <MenuItem name="year" value={year.toString()} key={year}>{year}</MenuItem>)

const NewCarForm = ({ handleClose = () => null }) => {

    const { values, handleChange, validate } = useNewCarValidation()

    const ADD_CAR = gql`
        mutation NewCar (
            $ownerId: ID!, 
            $year: String!, 
            $make: String!, 
            $model: String!, 
            $vin: String!,
            $photoUrl: String!,
        ) {
            car(
                ownerId: $ownerId, 
                year: $year,
                make: $make,
                model: $model,
                vin: $vin,
                photoUrl: $photoUrl
            ) {
                id
                make
                model
                year
                vin
                photoUrl
                isAvailable
                schedule
                isIdle
            }
        }
    `

    const [addCar, { data, error }] = useMutation(ADD_CAR)

    const handleSubmit = async e => {
        e.preventDefault()

        const { isValid, errors } = validate()

        if (!isValid) return

        try {
           await addCar({ variables: { ownerId: 1, ...values } })
           handleClose()
        } catch (error) {
            console.log({error})
        }

    }
    
    const onChange = e => {
        handleChange(e)
    }

    return (
        <form onSubmit={handleSubmit} style={{ minWidth: 250 }}>
            <Typography gutterBottom variant='h5'>
                Add a car
            </Typography>
            <Box m={1}></Box>
            <FormControl variant="outlined" required>
                <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={values.year}
                    name="year"
                    onChange={onChange}
                    label="Year"
                >
                    {options}
                </Select>
            </FormControl>
            <Box m={1}></Box>
            <TextField
                label="Make"
                aria-label="textfield"
                variant='outlined'
                placeholder="Make"
                name="make"
                value={values.make}
                onChange={onChange}
                required
                fullWidth
            />
            <Box m={1}></Box>
            <TextField
                label="Model"
                aria-label="textfield"
                variant='outlined'
                placeholder="Model"
                name="model"
                value={values.model}
                onChange={onChange}
                required
                fullWidth
            />
            <Box m={1}></Box>
            <TextField
                label="VIN"
                aria-label="textfield"
                variant='outlined'
                placeholder="Type the vehicle's VIN"
                name="vin"
                value={values.vin}
                onChange={onChange}
                required
                fullWidth
            />
            <Box m={1}></Box>
            <TextField
                label="Photo URL"
                aria-label="textfield"
                variant='outlined'
                placeholder="Type the vehicle's photo URL"
                name="photoUrl"
                value={values.photoUrl}
                onChange={onChange}
                required
                fullWidth
            />
            <Box m={1}></Box>
            <Box display='flex' justifyContent='flex-end'>
                <CardActions>
                    <Button
                        color='primary'
                        onClick={handleClose}
                    >Cancel</Button>
                    <Button
                        variant='contained'
                        color='primary'
                        type='submit'
                    >Add</Button>
                </CardActions>
            </Box>
        </form>
    )
}

export default NewCarForm