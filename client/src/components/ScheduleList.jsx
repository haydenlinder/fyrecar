import ScheduleListItem from "./ScheduleListItem"
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const ScheduleList = ({ type, cars }) => {
    return (
        <Box height='100%' pb={15} overflow='scroll' display='flex' flexDirection='column' alignItems='center' >
            <ScheduleListItem />
            <ScheduleListItem />
            <ScheduleListItem />
            <ScheduleListItem />
        </Box>
    )
}

export default ScheduleList