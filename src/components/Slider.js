import React, { Component } from "react"
import Slider from "react-slick"
import Card from "./Cards"

import styled from "styled-components"

const Test = styled.div`
  margin-top: 2rem;
  padding-left: 5rem;
  padding-right: 5rem;
`

function SampleNextArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        borderRadius: "10px",
      }}
      onClick={onClick}
    />
  )
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "grey",
        borderRadius: "10px",
      }}
      onClick={onClick}
    />
  )
}

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 250,
      autoplaySpeed: 6000,
      cssEase: "linear",
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
            autoplay: false,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: false,
          },
        },
      ],
    }
    return (
      <Test>
        <Slider {...settings}>
          <div>
            <Card
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg55f5ZQMzrnRRozjJl9TUZgPj8sgiN7cjuPtm4XUDRswPY51g"
              Title="WEB Development "
              Subtitle="your text "
            />
          </div>
          <div>
            <Card
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWNgH4KSVgac1tvU04IUBljT_peJC6DBgycSV2npX6bPhRkGjU"
              Title="APP Development "
              Subtitle="your text "
            />
          </div>
          <div>
            <Card
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_VHK6uG5diWQVBQnZlV74to0Uyq0rmghnh_PDgm3IzNw2xXGppQ "
              Title="Airthmatics"
              Subtitle="your text "
            />
          </div>
          <div>
            <Card
              img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIsoyV66dxk_Om-VPmIMwkXfnjRq7C8ObQ3HIPlVA3ykzRcLqm9Q"
              Title="Web Designs"
              Subtitle="your text "
            />
          </div>
        </Slider>
      </Test>
    )
  }
}
