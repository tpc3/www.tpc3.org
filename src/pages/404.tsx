import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => {
    if (typeof window !== "undefined") {
        window.location.href = "/"
    }
    return null
}

export default NotFoundPage
