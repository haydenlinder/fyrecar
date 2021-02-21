import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function CarListItem({ 
    year='2020',
    make='Acura',
    model='NSX',
    photoUrl='https://pictures.dealer.com/a/acuraofpembrokepinesadw/0907/f2c981353d653c86e3261040ed598e7ax.jpg',
    schedule=new Date().toLocaleTimeString().slice(0,-6),
    isAvailable=false
}) {
    return (
        <Box mt={2} mr={1} ml={1}>
            <Card>
                <Box display='flex'>
                    <CardMedia
                        style={{ height: 100, width: 130 }}
                        image={photoUrl}
                        title="Live from space album cover"
                    />
                    <CardContent >
                        <Typography >
                            {year} {make} {model} 
                        </Typography>
                        <Typography variant="subtitle1" >
                            {isAvailable?
                            <Box color="textSecondary.main">
                                Available until {schedule}
                            </Box> :
                            <Box color="textSecondary.inUse">
                                In Use until {schedule}
                            </Box>
                            }
                        </Typography>
                    </CardContent>
                </Box>
            </Card>            
        </Box>
    );
}
