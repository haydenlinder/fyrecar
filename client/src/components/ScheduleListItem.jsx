import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function ScheduleListItem({
    id = 1234,
    firstName = 'Jay',
    lastName = 'Leno',
    photoUrl = 'https://s3files.core77.com/blog/images/1055431_81_99738_GN0V_TxST.jpg',
    schedule = [new Date().toLocaleTimeString().slice(0, -6), new Date().toLocaleTimeString().slice(0, -6)],
}) {

    return (
        <Box mt={2} mx={1} style={{ cursor: 'pointer' }} width='100%'>
            <Card>
                <Box display='flex'>
                    <CardMedia
                        style={{ height: 100, width: 100 }}
                        image={photoUrl}
                        title="Renter photo"
                    />
                    <CardContent >
                        <Typography >
                            {firstName} {lastName}
                        </Typography>
                        <Typography variant="subtitle1" >
                            <Box color="textSecondary.inUse">
                                {schedule[0]} - {schedule[1]}
                            </Box> 
                        </Typography>
                    </CardContent>
                </Box>
            </Card>
        </Box>
    );
}
