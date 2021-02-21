import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import HomeIcon from '@material-ui/icons/Home';
import Typography from '@material-ui/core/Typography'
import { Link, useLocation } from 'react-router-dom'

const Header = ({ }) => {
    const location = useLocation()
    const title = location.pathname === '/profile' ? 'Profile' : 'Your Cars'
    return (
        <AppBar position="fixed">
            <Container maxWidth='md'>
                <Box display='flex' py={1} alignItems='center' justifyContent='space-between' height={80}>
                    <Link to='/'>
                        <IconButton edge="start" color="secondary" aria-label="menu">
                            <HomeIcon />
                        </IconButton>
                    </Link>
                    <Typography variant='h4'>
                        {title}
                    </Typography>
                    <IconButton style={{ border: '2px solid white' }} edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Container>
        </AppBar>
    )
}

export default Header