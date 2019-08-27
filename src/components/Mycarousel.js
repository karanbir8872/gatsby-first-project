import React, { Component } from "react"
import ReactDOM from "react-dom"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from "react-responsive-carousel"
import styled from "styled-components"

const MyCacrousel = styled.div`
  margin-bottom: 5rem;

  .carousel.carousel-slider {
    height: 30rem;
  }

  .first {
    height: 30rem;
  }

  .own {
    padding-top: 15rem;
    font-size: 4rem;
  }

  img {
    position: absolute;
    left: 0px;
    top: 0px;
    opacity: 0.4;
  }


  @media only screen and (max-width: 600px) {
    .carousel.carousel-slider {
      height: 18rem;
    }
    .own {
      padding-top: 1rem;
      font-size: 3rem;
    }



`

export default class DemoCarousel extends Component {
  render() {
    return (
      <MyCacrousel className="">
        <Carousel
          showStatus={false}
          autoPlay={false}
          infiniteLoop={true}
          stopOnHover={false}
          interval={3000}
          showThumbs={false}
          dynamicHeight={true}
          transitionTime={400}
        >
          <div className="first">
            <img
              src="https://colorlib.com/preview/theme/academics/images/hero_1.jpg"
              width="100%"
              height="auto"
            />
            <h1 className=" has-text-weight-bold has-text-white-bis is-family-sans-serif own">
              Acadmics University
            </h1>
          </div>
          <div className="first">
            <img
              src="https://colorlib.com/preview/theme/academics/images/hero_1.jpg"
              width="100%"
              height="auto"
            />
            <h1 className=" has-text-weight-bold has-text-white-bis is-family-sans-serif own">
              You can Learn Anything
            </h1>
          </div>
        </Carousel>
      </MyCacrousel>
    )
  }
}
