import { createTheme } from '@mui/material';

const theme = createTheme({
    palette: {
        primary: {
            main: "#EDC229",
            contrastText: "#534225"
        },
        white: {
            main: "#FFFFFF"
        }
    },
    typography: {
        allVariants: {
            color: "#FFFFFF"
        }
    }
});

export default theme;