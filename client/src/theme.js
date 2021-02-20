import { createMuiTheme } from '@material-ui/core/styles';
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
            default: '#fff',
        },
        textPrimary: {
            main: '#fffff'
        }

    },
});

export default theme;