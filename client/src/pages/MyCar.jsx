import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CarInfoTabs from '../components/CarInfoTabs'

const MyCar = ({ 
    id = 1234,
    year = '2020',
    make = 'Acura',
    model = 'NSX',
    photoUrl = 'https://pictures.dealer.com/a/acuraofpembrokepinesadw/0907/f2c981353d653c86e3261040ed598e7ax.jpg',
    schedule = new Date().toLocaleTimeString().slice(0, -6),
    isAvailable = false
 }) => {
    return (
        <Container maxWidth='sm' disableGutters style={{height: '100%'}}>
            <Box width='100%' height='50%' display='flex' flexDirection='column' alignItems='center'>
                <CardMedia
                    style={{ height: 200, width: '100%' }}
                    image={photoUrl}
                    title="Car Image"
                />
                <Box width='100%' p={2}>
                    <Typography >
                        {year} {make} {model}
                    </Typography>
                    <Typography variant="subtitle1" >
                        {isAvailable ?
                            <Box color="textSecondary.main">
                                Available until {schedule}
                            </Box> :
                            <Box color="textSecondary.inUse">
                                In Use until {schedule}
                            </Box>
                        }
                    </Typography>
                </Box>
            </Box>
            <CarInfoTabs />
        </Container>  
    )
}

export default MyCar