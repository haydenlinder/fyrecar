import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ScheduleList from '../components/ScheduleList'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            style={{ background: '#EFEFEF', height: '100%' }}
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Container disableGutters style={{ height: '100%', position: 'relative' }} maxWidth='md'>
                    {children}
                </Container>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


export default function CarInfoTabs({ car }) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const { year, make, model, vin } = car

    return (
        <div style={{ height: '50%', width: '100%' }}>
            <AppBar position="static" color='secondary' >
                <Tabs value={value} indicatorColor='primary' variant='fullWidth' centered onChange={handleChange} aria-label="availability tabs">
                    <Tab label="Info" {...a11yProps(0)} />
                    <Tab label="Schedule" {...a11yProps(1)} style={{ color: '#1b5e20' }} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0} >
                <Box p={2}>
                    <div>Year: {year}</div>
                    <div>Make: {make}</div>
                    <div>Model: {model}</div>
                    <div>VIN: {vin}</div>
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1} >
                <ScheduleList type={value} />
            </TabPanel>
        </div>
    );
}