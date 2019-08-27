import React from "react"
import Helmet from "react-helmet"
import "./layout.css"
import Header from "./header"
import Footer from "./Footer"

const Layout = ({ children }) => (
  <div>
    <Helmet>
      <title>Home-Academics</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css"
      />
      <link rel="stylesheet" type="text/css" href="layout.css" />
      <link
        rel="stylesheet"
        href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        charset="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <script
        defer
        src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"
      ></script>
      <link
        href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
