import * as React from "react"
import { createStyles, makeStyles, Theme, createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer"
import List from "@material-ui/core/List"
import Divider from "@material-ui/core/Divider"
import ListItem from "@material-ui/core/ListItem"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import ListItemText from "@material-ui/core/ListItemText"
import HomeIcon from "@material-ui/icons/Home"
import ForumIcon from "@material-ui/icons/Forum"
import PersonAddIcon from "@material-ui/icons/PersonAdd"
import InfoIcon from "@material-ui/icons/Info"

import * as styles from "./header.module.css"

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

const themeFontTitle = createMuiTheme({
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
    const handleDrawerOpen = () => {
        setOpen(true)
    }
    const handleDrawerClose = () => {
        setOpen(false)
    }
    return (
        <header className={classes.root}>
            <AppBar position="static" color="transparent">
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} onClick={handleDrawerOpen} aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <ThemeProvider theme={themeFontTitle}>
                        <Typography variant="h6" className={classes.title}>
                            <Link to="/" className={styles.link}>
                                PCCDiscord
                            </Link>
                        </Typography>
                    </ThemeProvider>
                </Toolbar>
            </AppBar>
            <SwipeableDrawer anchor="top" open={open} onOpen={handleDrawerOpen} onClose={handleDrawerClose} classes={{ paper: classes.paper }}>
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
