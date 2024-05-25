import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"
import { Theme, createTheme, ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Typography from "@mui/material/Typography"
import FluidAnimation from "react-fluid-animation"
import Tilt from "react-parallax-tilt"

import Layout from "../components/layout"
import SEO from "../components/seo"

import * as styles from "./index.module.css"
import Video from "../images/TPC3.webm"


declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}


type DataProps = {
    site: {
        buildTime: string
    }
}

let animation
const animationRef = ref => {
    animation = ref
    IntervalSplats()
}
const addRandomSplats = () => {
    if (animation) animation.addRandomSplats(screen.width / 100)
}
const IntervalSplats = () => {
    if (document.hasFocus()) animation.addRandomSplats(1)
    setTimeout(IntervalSplats, Math.floor(Math.random() * Math.floor(1000)))
}
const config = {
    textureDownsample: 2,
    densityDissipation: 0.98,
    velocityDissipation: 0.99,
    pressureDissipation: 0.8,
    pressureIterations: 25,
    curl: 30,
    splatRadius: 0.005,
}

const themeFontTitle = createTheme({
    typography: {
        fontFamily: '"Press Start 2P"',
        h2: {
            "@media (max-width:800px)": {
                fontSize: "1.5rem",
            },
        },
    },
})

class Index extends React.Component {
    render() {
        return (
            <Layout>
                <SEO title="Home" lang="ja" />
                <div className={styles.container}>
                    <video src={Video} autoPlay loop muted className={styles.video} />
                </div>
                <div className={styles.title}>
                    <Tilt gyroscope={true} trackOnWindow={true}>
                        <StyledEngineProvider injectFirst>
                            <ThemeProvider theme={themeFontTitle}>
                                <Typography variant="h2" onClick={addRandomSplats}>
                                    We are the "TPC3"
                                </Typography>
                            </ThemeProvider>
                        </StyledEngineProvider>
                    </Tilt>
                </div>
                <FluidAnimation className={styles.fluid} animationRef={animationRef} config={config} />
            </Layout>
        );
    }
}

export default Index

export const query = graphql`
    {
        site {
            buildTime(formatString: "YYYY-MM-DD hh:mm a z")
        }
    }
`
