import CarListItem from "./CarListItem"
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const CarList = ({ type, cars }) => {
    return (
        <Box height='100%' pb={15} overflow='scroll' display='flex' flexDirection='column' alignItems='center'>
            <CarListItem />
            <CarListItem />
            <CarListItem />
            <CarListItem />
            <CarListItem />
            <IconButton style={{ border: '2px solid white', boxShadow: '3px 3px 5px grey', background: '#2196f3', position: 'absolute', bottom: 30, right: 15 }}  edge="start" aria-label="menu">
                <AddRoundedIcon fontSize='large' color='secondary' />
            </IconButton>
        </Box>
    )
}

export default CarList