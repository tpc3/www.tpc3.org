import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"
import {
    Theme,
    createTheme,
    ThemeProvider,
    StyledEngineProvider,
    responsiveFontSizes,
} from "@mui/material/styles";
import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';
import Typography from "@mui/material/Typography"

import Layout from "../components/layout"
import SEO from "../components/seo"

import * as styles from "./join.module.css"


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

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => {
    return (
        <Layout>
            <SEO title="Join" lang="ja" />
            <StyledEngineProvider injectFirst>
                <ThemeProvider theme={themeFontTitle}>
                    <Typography variant="h2" className={styles.text}>
                        You wanna join?
                    </Typography>
                </ThemeProvider>
            </StyledEngineProvider>
            <Typography className={styles.text}>
                TPC3に参加したいですか？こちらは参加方法を記したページです。
                <br />
                参加は基本的に招待制となっております。
            </Typography>
            <Typography variant="h3" className={styles.text}>
                おことわり
            </Typography>
            <Typography className={styles.text}>
                TPC3では、現在多摩科学技術高校生並びに卒業生、入学が確定している者以外の参加を基本的に受け付けておりません。
                <br />
                予めご了承ください。
            </Typography>
            <Typography variant="h4" className={styles.text}>
                現在部員の方
            </Typography>
            <Typography className={styles.text}>
                参加済みの部員や役員に招待を依頼してください。
            </Typography>
            <Typography variant="h4" className={styles.text}>
                現在部員でない在校生の方
            </Typography>
            <Typography className={styles.text}>知人の部員の方、或いは役員（部室でお問い合わせください）に招待を依頼してください。</Typography>
            <Typography variant="h4" className={styles.text}>
                OBの方/上記以外で参加資格があるとお考えの方
            </Typography>
            <Typography className={styles.text}>
                参加済みの方に招待を依頼するか、サーバー管理者まで
                <Link to="/infos" className={styles.link}>
                    お問い合わせ
                </Link>
                ください。
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
