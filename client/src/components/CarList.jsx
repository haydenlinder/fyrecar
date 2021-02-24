import CarListItem from "./CarListItem"
import Box from '@material-ui/core/Box'
import IconButton from '@material-ui/core/IconButton'
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import React from 'react'
import MyModal from "./MyModal";
import NewCarForm from "./NewCarForm";

const CarList = ({ cars }) => {

    const [isModalOpen, setIsModalOpen] = React.useState(false)

    const closeModal = (e) => {
        setIsModalOpen(false)
    }

    const openModal = (e) => {
        setIsModalOpen(true)
    }

    return (
        <Box height='100%' pb={15} overflow='scroll' display='flex' justifyContent='center' alignItems='flex-start' flexWrap='wrap'>
            {cars.map(car => <CarListItem car={car} key={car.id}/>)}
            <IconButton onClick={openModal} style={{ border: '2px solid white', boxShadow: '3px 3px 5px grey', background: '#2196f3', position: 'absolute', bottom: 30, right: 15 }}  edge="start" aria-label="menu">
                <AddRoundedIcon fontSize='large' color='secondary' />
            </IconButton>
            <MyModal isOpen={isModalOpen} handleClose={closeModal}>
                <NewCarForm />
            </MyModal>
        </Box>
    )
}

export default CarList