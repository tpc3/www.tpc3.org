import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"
import {
    Theme,
    createTheme,
    ThemeProvider,
    StyledEngineProvider,
    responsiveFontSizes
} from "@mui/material/styles";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Typography from "@mui/material/Typography"
import Dialog from "@mui/material/Dialog"
import Button from "@mui/material/Button"
import Slide from "@mui/material/Slide"
import { TransitionProps } from "@mui/material/transitions"
import CloseIcon from "@mui/icons-material/Close"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Layout from "../components/layout"
import SEO from "../components/seo"
import FeedbackIcon from "@mui/icons-material/Feedback"

import * as styles from "./infos.module.css"


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


type DataProps = {
    site: {
        buildTime: string
    }
}

let themeFontTitle = createTheme({
    typography: {
        fontFamily: '"Press Start 2P"',
    },
})

themeFontTitle = responsiveFontSizes(themeFontTitle)

const themeFontBody = createTheme({
    typography: {
        body1: {
            fontSize: "1.5rem",
            "@media (max-width:600px)": {
                fontSize: "1rem",
            },
        },
    },
})

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            position: "relative",
        },
        title: {
            marginLeft: theme.spacing(2),
            flex: 1,
        },
    })
)

const Transition = React.forwardRef(function Transition(props: TransitionProps & { children?: React.ReactElement }, ref: React.Ref<unknown>) {
    return <Slide direction="up" ref={ref} {...props} />
})

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false)
    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <Layout>
            <SEO title="Infos" lang="ja" />
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themeFontTitle}>
                    <Typography variant="h1" className={styles.text}>
                        Infos
                    </Typography>
                </ThemeProvider>
            </StyledEngineProvider>
            <Typography className={styles.text}>
                このサイトはGatsby.jsとMaterial-ui、その他のコンポーネントを利用してReactに全く触れたことがないオーナーが凡そ半日で仕上げたものになります。
                <br />
                見る人が見れば非常に汚い設計やデザインになっていることかと思いますが、どうかご容赦頂ければと思います。
            </Typography>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themeFontTitle}>
                    <Typography variant="h2" className={styles.text}>
                        Contact
                    </Typography>
                </ThemeProvider>
            </StyledEngineProvider>
            <Typography className={styles.text}>
                This site is developed by owner of the TPC3.
                <br />
                If you have any questions, contact me from this form.
                <br />
                質問等、連絡事項はこちらのフォームにて承っております。
            </Typography>
            <Button variant="outlined" onClick={handleClickOpen} startIcon={<FeedbackIcon />}>
                <Typography>Open feedback form</Typography>
            </Button>
            <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                            size="large">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Feedback
                        </Typography>
                    </Toolbar>
                </AppBar>
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSexcOXnYwyOw0qYzJAvLtPQXbDqpQzpA_PyO34Cmcb78pmGfA/viewform?embedded=true"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                >
                    Now loading...
                </iframe>
            </Dialog>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themeFontTitle}>
                    <Typography variant="h3" className={styles.text}>
                        Tech backends
                    </Typography>
                    <Typography variant="h4" className={styles.text}>
                        Frameworks
                    </Typography>
                </ThemeProvider>
            </StyledEngineProvider>
            <Typography className={styles.text}>
                This site is built with{" "}
                <a href="https://www.gatsbyjs.com" className={styles.linkNoColor}>
                    gatsby.js
                </a>{" "}
                and{" "}
                <a href="https://material-ui.com" className={styles.linkNoColor}>
                    material-ui
                </a>
                .<br />
            </Typography>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themeFontTitle}>
                    <Typography variant="h4" className={styles.text}>
                        Hosters
                    </Typography>
                </ThemeProvider>
            </StyledEngineProvider>
            <Typography className={styles.text}>
                This site is hosted on the{" "}
                <a href="https://pages.cloudflare.com" className={styles.linkNoColor}>
                    Cloudflare pages
                </a>
                .
            </Typography>
            <Typography className={styles.text}>
                <a href="https://www.google.com/intl/ja_jp/forms/about" className={styles.linkNoColor}>
                    Google form
                </a>{" "}
                is used for contact page.
            </Typography>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themeFontTitle}>
                    <Typography variant="h4" className={styles.text}>
                        Fonts
                    </Typography>
                </ThemeProvider>
            </StyledEngineProvider>
            <Typography className={styles.text}>
                Fonts other then the default material-ui font (Roboto) are loaded from{" "}
                <a href="https://fonts.google.com" className={styles.linkNoColor}>
                    Google fonts
                </a>
                .
            </Typography>
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themeFontTitle}>
                    <Typography variant="h4" className={styles.text}>
                        Other packages
                    </Typography>
                </ThemeProvider>
            </StyledEngineProvider>
            <Typography className={styles.text}>
                <a href="https://www.npmjs.com/package/react-fluid-animation" className={styles.linkNoColor}>
                    react-fluid-animation
                </a>
                <br />
                <a href="https://www.npmjs.com/package/react-awesome-slider" className={styles.linkNoColor}>
                    react-awesome-slider
                </a>
                <br />
                <a href="https://www.npmjs.com/package/react-parallax-tilt" className={styles.linkNoColor}>
                    react-parallax-tilt
                </a>
                <br />
                <a href="https://www.npmjs.com/package/body-scroll-lock" className={styles.linkNoColor}>
                    body-scroll-lock
                </a>
                <br />
                <a href="https://www.npmjs.com/package/@mdi/react" className={styles.linkNoColor}>
                    Material Design Icons
                </a>
                <br />
                ...and more...
            </Typography>
        </Layout>
    );
}

export default UsingTypescript

export const query = graphql`
    {
        site {
            buildTime(formatString: "YYYY-MM-DD hh:mm a z")
        }
    }
`
