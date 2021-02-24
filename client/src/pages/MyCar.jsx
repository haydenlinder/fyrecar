import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CarInfoTabs from '../components/CarInfoTabs'
import { useQuery, gql } from '@apollo/client'
import { useParams } from 'react-router-dom'
import CarListItem from '../components/CarListItem'
import CircularProgress from '@material-ui/core/CircularProgress'


const MyCar = (car={ 
    id: 1234,
    year: '2020',
    make: 'Acura',
    model: 'NSX',
    photoUrl: 'https://pictures.dealer.com/a/acuraofpembrokepinesadw/0907/f2c981353d653c86e3261040ed598e7ax.jpg',
    schedule: new Date().toLocaleTimeString().slice(0, -6),
    isAvailable: false
 }) => {

    const { id } = useParams()

    const GET_OWNED_CAR = gql`
        query {
            cars(id:${id}){
                id
                make
                model
                year
                vin
                photoUrl
                isAvailable
                schedule
            }
        }
    `

    const { loading, error, data } = useQuery(GET_OWNED_CAR)

    console.log({error}, {data})

    if (loading) return (
        <CircularProgress />
    )
    if (error) return (
        <div>error</div>
    )

    const { make, model, year, vin, photoUrl, isAvailable} = data.cars[0]

    const parsed = Date.parse('2021-02-24T06:50:45.749Z')
    const formattedDate = new Date(parsed).toLocaleTimeString().slice(0, -6)

    return (
        <Container maxWidth='sm' disableGutters style={{height: '100%'}}>
            <Box display='flex' flexDirection='column' alignItems='center' minWidth='100%' height='100%'>
                <CarListItem car={data.cars[0]} fullSize/>
                <CarInfoTabs car={data.cars[0]}/>
            </Box>
        </Container>  
    )
}

export default MyCar