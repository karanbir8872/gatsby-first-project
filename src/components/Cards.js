import React from "react"
import styled from "styled-components"

const CardStyled = styled.div`
  padding: 1rem 2rem 1rem 2rem;
`

const Card = props => (
  <CardStyled>
    <div className="card is-shadow">
      <div className="card-image">
        <figure className="image is-4by3">
          <img src={props.img} alt="Placeholder image" />
        </figure>
      </div>
      <div className="card-content">
        <div className="content has-text-centered">
          <h4 class="title is-4">{props.Title}</h4>
          <span class="icon">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </span>
          <h5 class="subtitle is-5">{props.Subtitle}</h5>
          <a class="button is-primary">Enroll this Course</a>
        </div>
      </div>
    </div>
  </CardStyled>
)

export default Card
