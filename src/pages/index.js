import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import DemoCarousel from "../components/Mycarousel"
import Work from "../components/Works"
import SimpleSlider from "../components/Slider"
import HeroInfo from "../components/Hero"
import Subscribe from "../components/Subscribe"
import Card from "../components/InforamtionCard"

const IndexPage = () => (
  <div>
    <Layout>
      <DemoCarousel />
      <Work />
      <SimpleSlider />
      <HeroInfo />
      <Card />
      <Subscribe />
    </Layout>
  </div>
)

export default IndexPage
