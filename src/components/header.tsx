import * as React from "react"
import { Theme, createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles"
import createStyles from "@mui/styles/createStyles"
import makeStyles from "@mui/styles/makeStyles"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import SwipeableDrawer from "@mui/material/SwipeableDrawer"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import ListItem from "@mui/material/ListItem"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import HomeIcon from "@mui/icons-material/Home"
import ForumIcon from "@mui/icons-material/Forum"
import PersonAddIcon from "@mui/icons-material/PersonAdd"
import InfoIcon from "@mui/icons-material/Info"
import Icon from "@mdi/react"
import { FaDiscord } from "react-icons/fa6"

import * as styles from "./header.module.css"
import { GitHub, Twitter, YouTube } from "@mui/icons-material"
import { StaticImage } from "gatsby-plugin-image"

declare module "@mui/styles/defaultTheme" {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DefaultTheme extends Theme {}
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(5),
        },
        title: {
            flexGrow: 1,
        },
        listIcon: {
            marginLeft: "50px",
        },
        paper: {
            background: "black",
        },
    })
)

const themeFontTitle = createTheme({
    typography: {
        fontFamily: '"Audiowide"',
        h6: {
            fontWeight: 400,
        },
    },
})

const Header = ({ siteTitle }) => {
    const [open, setOpen] = React.useState(false)
    const classes = useStyles()
    return (
        <header className={classes.root}>
            <AppBar position="static" color="transparent">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} onClick={() => setOpen(true)} aria-label="menu" size="large">
                        <MenuIcon />
                    </IconButton>
                    <StyledEngineProvider injectFirst>
                        <ThemeProvider theme={themeFontTitle}>
                            <Typography variant="h6" className={classes.title} component="div">
                                <Link to="/" className={styles.link}>
                                    TPC3
                                </Link>
                            </Typography>
                        </ThemeProvider>
                    </StyledEngineProvider>
                    <div className={styles.icons}>
                        <IconButton
                            size="medium"
                            aria-label="GitHub"
                            aria-controls="menu-appbar"
                            onClick={() => {
                                window.open("https://github.com/tpc3", "_blank")
                            }}
                            color="inherit"
                        >
                            <GitHub />
                        </IconButton>
                        <IconButton
                            size="medium"
                            aria-label="YouTube"
                            aria-controls="menu-appbar"
                            onClick={() => {
                                window.open("https://www.youtube.com/channel/UCLadr5FRNvIqtgyNk3-whLg", "_blank")
                            }}
                            color="inherit"
                        >
                            <YouTube />
                        </IconButton>
                        <IconButton
                            size="medium"
                            aria-label="Twitter"
                            aria-controls="menu-appbar"
                            onClick={() => {
                                window.open("https://twitter.com/tpc3_org", "_blank")
                            }}
                            color="inherit"
                        >
                            <Twitter />
                        </IconButton>
                        <IconButton
                            size="medium"
                            aria-label="Discord"
                            aria-controls="menu-appbar"
                            onClick={() => {
                                window.open("join", "_blank")
                            }}
                            color="inherit"
                        >
                            <FaDiscord />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer anchor="top" open={open} onOpen={() => setOpen(true)} onClose={() => setOpen(false)} classes={{ paper: classes.paper }}>
                <List role="presentation">
                    <Link to="/" className={styles.link}>
                        <ListItem button key="top">
                            <ListItemIcon className={classes.listIcon}>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary="Top" />
                        </ListItem>
                    </Link>
                    <Link to="/about" className={styles.link}>
                        <ListItem button key="about">
                            <ListItemIcon className={classes.listIcon}>
                                <ForumIcon />
                            </ListItemIcon>
                            <ListItemText primary="About" />
                        </ListItem>
                    </Link>
                    <Link to="/join" className={styles.link}>
                        <ListItem button key="join">
                            <ListItemIcon className={classes.listIcon}>
                                <PersonAddIcon />
                            </ListItemIcon>
                            <ListItemText primary="Join" />
                        </ListItem>
                    </Link>
                    <Link to="/infos" className={styles.link}>
                        <ListItem button key="infos">
                            <ListItemIcon className={classes.listIcon}>
                                <InfoIcon />
                            </ListItemIcon>
                            <ListItemText primary="Infos" />
                        </ListItem>
                    </Link>
                </List>
            </SwipeableDrawer>
        </header>
    )
}

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
