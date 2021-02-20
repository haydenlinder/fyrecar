import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import CarList from '../components/CarList'

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
                // <Container style={{ height: '100%' }} maxWidth='md'>
                    <CarList type={value}/>
                // </Container>
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


export default function AvailabilityTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{ height: '100%' }}>
            <AppBar position="static" color='secondary' style={{ width: '100vw' }}>
                <Container maxWidth='md'>
                    <Tabs value={value} indicatorColor='primary' variant='fullWidth' centered onChange={handleChange} aria-label="availability tabs">
                        <Tab label="All" {...a11yProps(0)} />
                        <Tab label="Available" {...a11yProps(1)} />
                        <Tab label="In Use" {...a11yProps(2)} />
                    </Tabs>
                </Container>
            </AppBar>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
        </div>
    );
}