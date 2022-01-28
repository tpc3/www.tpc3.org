/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { detect } from "detect-browser"
import Snackbar from "@mui/material/Snackbar"
import MuiAlert, { AlertProps } from '@mui/material/Alert'

import Header from "./header"
import "./layout.css"

let once = false

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)
    const browser = detect()
    const [open, setOpen] = React.useState(false)
    const handleClose = (event: React.SyntheticEvent | React.MouseEvent, reason?: string) => {
        if (reason === "clickaway") return
        setOpen(false)
    }

    if (browser && !once) {
        switch (browser.name) {
            case "chrome":
                if (parseFloat(browser.version) < 70) setOpen(true)
                break
            case "firefox":
                if (parseFloat(browser.version) < 67) setOpen(true)
                break
            default:
                setOpen(true)
        }
        once = true
    }

    return (
        <>
            <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
            <div
                style={{
                    margin: `0 auto`,
                    maxWidth: 960,
                    padding: `0 1.0875rem 1.45rem`,
                }}
            >
                <main>{children}</main>
            </div>
            <Snackbar
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
            >
                <MuiAlert elevation={6} variant="filled" onClose={handleClose} severity="warning">
                    It seems that you are using an old or unsupported browser. Please update or the site might not render correctly.
                </MuiAlert>
            </Snackbar>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
