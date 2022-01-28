export const siteMetadata = {
    title: `PCCCommunity`,
    description: `PCCCommunity official website`,
    author: `@gatsbyjs`,
    siteUrl: `https://www.tpc3.org`,
}
export const plugins = [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `images`,
            path: `${__dirname}/src/images`,
        },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: `gatsby-starter-default`,
            short_name: `starter`,
            start_url: `/`,
            background_color: `#663399`,
            theme_color: `#663399`,
            display: `minimal-ui`,
            icon: `src/images/konbuparrot.gif`, // This path is relative to the root of the site.
        },
    },
    `gatsby-plugin-gatsby-cloud`,
    {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: `PCCCommunity`,
            short_name: `PCCCommunity`,
            start_url: `/`,
            background_color: `#000000`,
            theme_color: `#000000`,
            display: `standalone`,
            icon: `src/images/konbuparrot.gif`,
        },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
        resolve: `gatsby-theme-material-ui`,
        options: {
            webFontsConfig: {
                fonts: {
                    google: [
                        {
                            family: `Audiowide`,
                            variants: [`400`],
                        },
                        {
                            family: `Press Start 2P`,
                            variants: [`400`],
                        },
                    ],
                },
            },
        },
    },
    {
        resolve: "gatsby-plugin-robots-txt",
        options: {
            host: "https://www.tpc3.org",
            sitemap: "https://www.tpc3.org/sitemap.xml",
            policy: [{ userAgent: "*", allow: "/" }],
        },
    },
    `gatsby-plugin-sitemap`,
    {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
            trackingIds: ["G-YXCKGKXG93"],
            pluginConfig: {
                head: true,
            },
        },
    },
    `gatsby-plugin-pnpm`,
]
