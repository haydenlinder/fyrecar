import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core';
import { red, green, blue } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
    palette: {
        primary: {
            main: blue[500],
        },
        secondary: {
            main: '#ffffff',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#EFEFEF',
        },
        textPrimary: {
            main: green[400]
        },
        textSecondary: {
            main: green[900],
            inUse: '#5800B0'
        },
        textGreen: {
            main: '#fffff'
        }
    },
});

export default theme;