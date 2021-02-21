import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { useHistory, useLocation } from 'react-router-dom'

const NAV = {
    0: '/',
    1: '/profile'
}

const NAV2 = {
    '/': 0,
    '/profile': 1
}

export default function Footer() {
    const [value, setValue] = React.useState(0);
    const history = useHistory()
    const location = useLocation()

    React.useEffect(() => {
        setValue(NAV2[location.pathname])
    },[location.pathname])

    return (
        <BottomNavigation
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, borderTop: '1px solid gray' }}
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
                history.push(NAV[newValue])
            }}
            showLabels
        >
            <BottomNavigationAction label="Cars" icon={<DriveEtaIcon />} />
            <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
        </BottomNavigation>
    );
}
