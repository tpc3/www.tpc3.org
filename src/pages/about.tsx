import * as React from "react"
import { PageProps, Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
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
import Fab from "@mui/material/Fab"
import SendIcon from "@mui/icons-material/Send"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"

import Layout from "../components/layout"
import SEO from "../components/seo"

import * as styles from "./about.module.css"
import konbuParrot from "../images/konbuparrot.gif"
import logoVideo from "../images/logo.mp4"
import konfesSlide from "../images/konbufest.png"


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

let themeFontBody = createTheme()
themeFontBody = responsiveFontSizes(themeFontBody)

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        margin: {
            margin: theme.spacing(1),
        },
    })
)

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => {
    const classes = useStyles()
    return (
        <Layout>
            <SEO title="About" lang="ja" />
            <AwesomeSlider className={styles.slider} infinite={false}>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <StyledEngineProvider injectFirst>
                            <ThemeProvider theme={themeFontTitle}>
                                <Typography variant="h4">We are the "TPC3"!</Typography>
                            </ThemeProvider>
                        </StyledEngineProvider>
                        <div className={styles.body}>
                            <StyledEngineProvider injectFirst>
                                <ThemeProvider theme={themeFontBody}>
                                    <Typography variant="body1" className={styles.body}>
                                        私達TPC3は、多摩科学技術高校パソコン部に所属する有志部員・OBによって構成されているコミュニティです。
                                        <br />
                                        現在8期生から15期生に至るまで凡そ150名程度が在籍しています。
                                        <br />
                                        Discordサーバーを活動拠点としています。
                                    </Typography>
                                </ThemeProvider>
                            </StyledEngineProvider>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <img src={konbuParrot} alt="konbuParrot" className={styles.konbu} />
                        <Typography variant="body1">
                            パソコン部にはこんぶくんというオリジナルキャラクターが存在します。
                            <br />
                            文化祭等でお目にかかれるかもしれません - 保証はできませんが。
                        </Typography>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <StyledEngineProvider injectFirst>
                            <ThemeProvider theme={themeFontTitle}>
                                <Typography variant="h4">From dev to games.</Typography>
                            </ThemeProvider>
                        </StyledEngineProvider>
                        <div className={styles.body}>
                            <StyledEngineProvider injectFirst>
                                <ThemeProvider theme={themeFontBody}>
                                    <Typography variant="body1" className={styles.body}>
                                        TPC3では、IT技術から学習、ゲーム等の趣味、ニュースまで様々な情報を共有することができます。
                                        <br />
                                        勿論様々な進路へ進んだOBや在校生の先輩へ相談することも可能です。
                                    </Typography>
                                </ThemeProvider>
                            </StyledEngineProvider>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <StaticImage src="../images/minecraft.png" alt="gamingMinecraft" className={styles.minecraft} />
                        <Typography variant="body1">
                            TPC3ではゲーム談義も盛んです。
                            <br />- 少なくともTPC3内でMinecraftサーバーが4年以上続いているぐらいには。
                        </Typography>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <StyledEngineProvider injectFirst>
                            <ThemeProvider theme={themeFontTitle}>
                                <Typography variant="h4">The power of resources.</Typography>
                            </ThemeProvider>
                        </StyledEngineProvider>
                        <div className={styles.body}>
                            <StyledEngineProvider injectFirst>
                                <ThemeProvider theme={themeFontBody}>
                                    <Typography variant="body1" className={styles.body}>
                                        私達は、初心者でも会話に馴染めるようTPC3内のみで使われる用語やイベントの概要等を専用のWikiにまとめています。
                                        <br />
                                        他にもVC内でのテキスト読み上げや自動返答ボットを始め、メンバーによって開発された様々なシステム達が会話を彩ります。
                                    </Typography>
                                </ThemeProvider>
                            </StyledEngineProvider>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <video className={styles.minecraft} loop muted preload="auto" autoPlay src={logoVideo} />
                        <Typography variant="body1">
                            事実、このサイトの画像の殆どはそのWikiシステムより引用されています。
                            <br />
                            また、このサイト自体もメンバーの一人によって開発されたものです。
                        </Typography>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <StyledEngineProvider injectFirst>
                            <ThemeProvider theme={themeFontTitle}>
                                <Typography variant="h4">We have events for you!</Typography>
                            </ThemeProvider>
                        </StyledEngineProvider>
                        <div className={styles.body}>
                            <StyledEngineProvider injectFirst>
                                <ThemeProvider theme={themeFontBody}>
                                    <Typography variant="body1" className={styles.body}>
                                        TPC3ではゲーム、オリエンテーション、ITワークショップからお便り等を紹介するラジオ番組、カラオケ会、食事会まで幅広いイベントが頻繁に開催されています。
                                        <br />
                                        勿論これらへの参加は自由です。気が向いたら是非ご参加ください。
                                        <br />
                                    </Typography>
                                </ThemeProvider>
                            </StyledEngineProvider>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <img src={konfesSlide} alt="konfesSlide" className={styles.minecraft} />
                        <Typography variant="body1">クリスマスに開催したイベントで理想の自室をアンケートし、その結果要望を分類別にまとめたスライドの一つです。</Typography>
                    </div>
                </div>
                <div className={styles.container}>
                    <div className={styles.title}>
                        <StyledEngineProvider injectFirst>
                            <ThemeProvider theme={themeFontTitle}>
                                <Typography variant="h4">Sounds good? Join us!</Typography>
                            </ThemeProvider>
                        </StyledEngineProvider>
                        <div className={styles.body}>
                            <StyledEngineProvider injectFirst>
                                <ThemeProvider theme={themeFontBody}>
                                    <Typography variant="body1" className={styles.body}>
                                        興味が湧きましたか？
                                        <br />
                                        参加にはいくつか条件があります - 気になった方は是非ご確認ください！
                                        <br />
                                    </Typography>
                                </ThemeProvider>
                            </StyledEngineProvider>
                        </div>
                    </div>
                    <div className={styles.content}>
                        <Link to="/join" className={styles.link}>
                            <Fab aria-label="join">
                                <SendIcon />
                            </Fab>
                        </Link>
                    </div>
                </div>
            </AwesomeSlider>
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
