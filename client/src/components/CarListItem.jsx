import React from 'react';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom'
export default function CarListItem({
// car={ 
//     id: 1234,
//     year: '2020',
//     make: 'Acura',
//     model: 'NSX',
//     photoUrl: 'https://pictures.dealer.com/a/acuraofpembrokepinesadw/0907/f2c981353d653c86e3261040ed598e7ax.jpg',
//     schedule: new Date(),
//     isAvailable: false
// }
    car,
    fullSize=false
}) {
    const { id, year, make, model, photoUrl, schedule, isAvailable } = car
    
    const history = useHistory()
    const parsed = Date.parse('2021-02-24T06:50:45.749Z')
    const formattedDate = new Date(parsed).toLocaleTimeString().slice(0, -6)

    return (
        <Box mt={2} mr={1} ml={1} style={{cursor: 'pointer', width: fullSize?'100%':300, height:fullSize?'50%':''}} onClick={e => history.push(`/mycars/${id}`)}>
            <Card style={{height: '100%'}}>
                <Box display='flex' flexDirection={fullSize?'column':'row'} height={fullSize? '100%':'100px'} >
                    <CardMedia
                        style={{ height: '100%', minWidth: 130 }}
                        image={photoUrl}
                        title="Live from space album cover"
                    />
                    <CardContent >
                        <Typography variant="subtitle2">
                            {`${year} ${make} ${model}`.slice(0,40)}
                        </Typography>
                        <Typography variant="caption" >
                            {isAvailable?
                            <Box color="textSecondary.main">
                                Available until {formattedDate}
                            </Box> :
                            <Box color="textSecondary.inUse">
                                In Use until {formattedDate}
                            </Box>
                            }
                        </Typography>
                    </CardContent>
                </Box>
            </Card>            
        </Box>
    );
}
