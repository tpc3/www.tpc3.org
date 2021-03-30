import { createMuiTheme, responsiveFontSizes } from "@material-ui/core"

let theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#000000",
    },
    background: {
      default: "#000000",
    },
  },
})
theme = responsiveFontSizes(theme)

export default theme
