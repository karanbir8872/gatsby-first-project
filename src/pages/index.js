import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import DemoCarousel from "../components/Mycarousel"
import Work from "../components/Works"
import SimpleSlider from "../components/Slider"
import HeroInfo from "../components/Hero"
import Subscribe from "../components/Subscribe"
import Card from "../components/InforamtionCard"
import ContactForm from "../components/Contact"

export const indexQuery = graphql`
  query indexQuery {
    contentfulSlider {
      title
      sutitle
      heroimage {
        file {
          url
        }
      }
    }
  }
`

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <StaticQuery
          query={indexQuery}
          render={data => {
            const { contentfulSlider: home } = data
            return (
              <React.Fragment>
                <DemoCarousel home={home} s />
                <Work />
                <ContactForm/>
                <SimpleSlider />
                <HeroInfo />
                <Card />
                <Subscribe />
              </React.Fragment>
            )
          }}
        />
      </Layout>
    )
  }
}
