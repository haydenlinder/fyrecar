import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import CardActions from '@material-ui/core/CardActions'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import { useState } from 'react'

const NewCarForm = ({ handleClose = () => null }) => {

    const [body, setBody] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
    }

    const handleChange = e => {
        setBody(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit} style={{ minWidth: 300 }}>
            <Typography color="textSecondary" gutterBottom>
                Add a car
            </Typography>
            <Typography variant="h5" component="h2">
                {body.slice(0, 18)} ...
            </Typography>
            <br />
            <TextField
                rowsMax={16}
                aria-label="textarea"
                variant='outlined'
                placeholder="What do you want to say"
                onChange={handleChange}
                multiline
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