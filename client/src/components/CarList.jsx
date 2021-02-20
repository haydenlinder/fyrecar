import CarListItem from "./CarListItem"
import Box from '@material-ui/core/Box'

const CarList = ({ type, cars }) => {
    return (
        <Box height='100%' pb={15} overflow='scroll' display='flex' flexDirection='column' alignItems='center'>
            <CarListItem />
            <CarListItem />
            <CarListItem />
            <CarListItem />
            <CarListItem />
        </Box>
    )
}

export default CarList