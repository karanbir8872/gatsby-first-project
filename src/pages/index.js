import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import DemoCarousel from "../components/Mycarousel"
import Work from "../components/Works"
import SimpleSlider from "../components/Slider"

const IndexPage = () => (
  <div>
    <Layout>
      <DemoCarousel />
      <Work />
      <SimpleSlider />
    </Layout>
    <h1> hello world</h1>
  </div>
)

export default IndexPage
