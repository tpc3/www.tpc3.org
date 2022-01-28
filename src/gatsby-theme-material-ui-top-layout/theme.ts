import { createTheme, responsiveFontSizes } from "@mui/material";
// import { white } from '@mui/material/colors';

let theme = createTheme({
    palette: {
        mode: "dark",
        // primary: white,
        // secondary: white,
        // background: white,
    },
})
theme = responsiveFontSizes(theme)

export default theme
