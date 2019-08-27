import React, { Component } from "react"
import Slider from "react-slick"
import styled from "styled-components"
import Card from "./InforamtionCard"

const Container = styled.div`
  margin-bottom: 2rem;
  margin-top: 4rem;
  margin-right: 0rem;

  .my-heading {
    border-bottom: 5px solid #1d9e4e;
  }

  .columns {
    margin-right: 0rem;
    margin-left: 0rem;
  }
`

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      speed: 250,
      autoplaySpeed: 2000,
      cssEase: "linear",
      initialSlide: 0,
    }
    return (
      <Container className="is-hidden-mobile">
        <div className="container">
          <div>
            <h2 className="title  is-2 has-text-weight-semibold">
              <span className="my-heading">Testimonials</span>
            </h2>
          </div>
          <Slider {...settings}>
            <div>
              <div className="columns">
                <div className="column">
                  <Card />
                </div>
                <div className="column">
                  <Card />
                </div>
              </div>
            </div>
            <div>
              <div className="columns">
                <div className="column">
                  <Card />
                </div>
                <div className="column">
                  <Card />
                </div>
              </div>
            </div>
            <div>
              <div className="columns">
                <div className="column">
                  <Card />
                </div>
                <div className="column">
                  <Card />
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </Container>
    )
  }
}
