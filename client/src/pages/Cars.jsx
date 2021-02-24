import { useQuery, gql } from "@apollo/client"
import CircularProgress from "@material-ui/core/CircularProgress"
import AvailabilityTabs from "../components/AvailabilityTabs"

const Cars = ({}) => {

    const GET_OWNED_CARS = gql`
        query {
            cars{
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

    const { loading, error, data } = useQuery(GET_OWNED_CARS)
    console.log({error}, {data})

    return (
        <>
            {loading && <CircularProgress />}
            {!loading && error && 'error'}
            {!loading && !error && <AvailabilityTabs cars={data.cars}/>}
        </>
    )
    
}

export default Cars