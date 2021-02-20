import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export default function Footer() {
    const [value, setValue] = React.useState('Cars');

    return (
        <BottomNavigation
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, borderTop: '1px solid gray' }}
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
        >
            <BottomNavigationAction label="Cars" icon={<DriveEtaIcon />} />
            <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
        </BottomNavigation>
    );
}
