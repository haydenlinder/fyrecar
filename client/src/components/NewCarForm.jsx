import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import { useState } from 'react'

const years = []
for(let i = 2022; i >= 1950; i--) {
    years.push(i)
}

const NewCarForm = ({ handleClose = () => null }) => {

    const [body, setBody] = useState('')
    const [selectedYear, setSelectedYear] = useState(2021)

    const handleSubmit = async e => {
        e.preventDefault()
    }

    const handleChange = e => {
        setBody(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} style={{ minWidth: 300 }}>
            <Typography gutterBottom variant='h5'>
                Add a car
            </Typography>
            <br />
            <FormControl variant="outlined">
                <InputLabel id="demo-simple-select-outlined-label">Year</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={selectedYear}
                    onChange={e => setSelectedYear(e.target.value)}
                    label="Year"
                >
                    {years.map(year => <MenuItem value={year} key={year}>{year}</MenuItem>)}
                </Select>
            </FormControl>
            <br />
            <TextField
                label="Make"
                aria-label="textfield"
                variant='outlined'
                placeholder="What do you want to say"
                onChange={handleChange}
                required
                fullWidth
            />
            <br />
            <TextField
                label="Model"
                aria-label="textfield"
                variant='outlined'
                placeholder="What do you want to say"
                onChange={handleChange}
                required
                fullWidth
            />
            <br />
            <TextField
                label="VIN"
                aria-label="textfield"
                variant='outlined'
                placeholder="Type the vehicle's VIN"
                onChange={handleChange}
                required
                fullWidth
            />
            <br />
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