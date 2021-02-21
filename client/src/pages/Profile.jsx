import Avatar from '@material-ui/core/Avatar'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const Profile = ({ 
    photoUrl='https://i.redd.it/eie042qd3h651.png',
    firstName='Doug',
    lastName='DeMuro'
}) => {
    return (
        <Box display='flex' mt={2}>
            <Box mr={2}>
                <Avatar src={photoUrl} style={{ height: 150, width: 150}}/>
            </Box>
            <Typography variant='h4'>
                {firstName} {lastName}
            </Typography>
        </Box>
    )
}

export default Profile