import React, { Component } from "react"
import Slider from "react-slick"
import styled from "styled-components"
import Card from "./InforamtionCard"

const Container = styled.div`
  margin-bottom: 2rem;
  margin-top: 4rem;

  .test {
    border-bottom: 5px solid #1d9e4e;
    margin-right: 60rem;
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
      <Container>
        <div class="container">
          <div className="test">
            <h2 class="title is-3">Testimonials</h2>
          </div>
          <Slider {...settings}>
            <div>
              <div class="columns">
                <div class="column">
                  <Card />
                </div>
                <div class="column">
                  <Card />
                </div>
              </div>
            </div>
            <div>
              <div class="columns">
                <div class="column">
                  <Card />
                </div>
                <div class="column">
                  <Card />
                </div>
              </div>
            </div>
            <div>
              <div class="columns">
                <div class="column">
                  <Card />
                </div>
                <div class="column">
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
