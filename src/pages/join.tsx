import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"
import { createStyles, makeStyles, Theme, createMuiTheme, ThemeProvider, responsiveFontSizes } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"

import Layout from "../components/layout"
import SEO from "../components/seo"

import * as styles from "./join.module.css"

type DataProps = {
    site: {
        buildTime: string
    }
}

let themeFontTitle = createMuiTheme({
    typography: {
        fontFamily: '"Press Start 2P"',
    },
})

themeFontTitle = responsiveFontSizes(themeFontTitle)

const themeFontBody = createMuiTheme({
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
            <ThemeProvider theme={themeFontTitle}>
                <Typography variant="h2" className={styles.text}>
                    You wanna join?
                </Typography>
            </ThemeProvider>
            <Typography className={styles.text}>
                PCCCommunityに参加したいですか？こちらは参加方法を記したページです。
                <br />
                パソコン部員以外の方の参加は基本的に招待制となっております。
            </Typography>
            <Typography variant="h3" className={styles.text}>
                おことわり
            </Typography>
            <Typography className={styles.text}>
                PCCCommunityでは、現在多摩科学技術高校生並びに卒業生、入学が確定している者以外の参加を基本的に受け付けておりません。
                <br />
                予めご了承ください。
            </Typography>
            <Typography variant="h4" className={styles.text}>
                現在部員の方
            </Typography>
            <Typography className={styles.text}>
                通常は入学時/進級時の部会の際に参加しています。
                <br />
                参加できていない方は参加済みの部員に招待を依頼してください。
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
