import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import DemoCarousel from "../components/Mycarousel"
import Work from "../components/Works"
import SimpleSlider from "../components/Slider"
import HeroInfo from "../components/Hero"
import SectionSlider from "../components/SectionSlider"
import Subscribe from "../components/Subscribe"

const IndexPage = () => (
  <div>
    <Layout>
      <DemoCarousel />
      <Work />
      <SimpleSlider />
      <HeroInfo />
      <SectionSlider />
      <Subscribe />
    </Layout>
  </div>
)

export default IndexPage
