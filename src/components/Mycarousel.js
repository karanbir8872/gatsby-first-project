import React, { Component } from "react"
import ReactDOM from "react-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import styled from "styled-components"

import Card from "./Cards"

const MyCacrousel = styled.div`
  margin-bottom: 5rem;
  .carousel.carousel-slider {
    height: 30rem;
  }

  .first {
    height: 30rem;
    background-color: red;
    background-image: url("https://images.theconversation.com/files/231302/original/file-20180809-30458-ok9iv.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=496&fit=clip");
    background-repeat: no-repeat;
    background-size: cover;
  }

  .own {
    padding-top: 15rem;
    font-size: 4rem;
  }
`

export default class DemoCarousel extends Component {
  render() {
    return (
      <MyCacrousel className="is-hidden-mobile">
        <Carousel
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
          stopOnHover={false}
          interval={3000}
          showThumbs={false}
          dynamicHeight={true}
          transitionTime={400}
        >
          <div className="first">
            <h1 className=" has-text-weight-bold has-text-white-bis is-family-sans-serif own">
              Acadmics University
            </h1>
          </div>
          <div className="first">
            <h1 className=" has-text-weight-bold has-text-white-bis is-family-sans-serif own">
              You can Learn Anything
            </h1>
          </div>
        </Carousel>
      </MyCacrousel>
    )
  }
}
