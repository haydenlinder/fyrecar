import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

const Header = ({  }) => {

    return (
        <AppBar position="fixed">
            <Container>
                <Box mx={2} display='flex' alignItems='center' justifyContent='space-between'>
                    <Box display='flex' alignItems='center'>
                        <Link to='/'>
                            <Button color='inherit'>
                                <Box py={2}>
                                    <Typography variant='h5' color='secondary'>
                                        FyreCar
                                    </Typography>
                                </Box>
                            </Button>
                        </Link>
                    </Box>
                    <Box>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Box>
            </Container>
        </AppBar>
    )
}

export default Header