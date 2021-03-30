import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"
import {
  createStyles,
  makeStyles,
  Theme,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import FluidAnimation from "react-fluid-animation"
import Tilt from "react-parallax-tilt"

import Layout from "../components/layout"
import SEO from "../components/seo"

import * as styles from "./index.module.css"
import Video from "../images/index.mp4"

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

const themeFontTitle = createMuiTheme({
  typography: {
    fontFamily: '"Press Start 2P"',
    h2: {
      "@media (max-width:800px)": {
        fontSize: "1.5rem",
      },
    },
  },
})

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => {
  return (
    <Layout>
      <SEO title="Home" lang="ja" />
      <div className={styles.container}>
        <video src={Video} autoPlay loop muted className={styles.video} />
      </div>
      <div className={styles.title}>
        <Tilt gyroscope={true} trackOnWindow={true}>
          <ThemeProvider theme={themeFontTitle}>
            <Typography variant="h2" onClick={addRandomSplats}>
              We are the "PCCDiscord"
            </Typography>
          </ThemeProvider>
        </Tilt>
      </div>
      <FluidAnimation className={styles.fluid} animationRef={animationRef} />
    </Layout>
  )
}

export default UsingTypescript

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
