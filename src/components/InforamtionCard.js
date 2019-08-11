import React from "react"
import styled from "styled-components"

const Container = styled.div`
  padding: 1rem;

  .photo {
    border-radius: 2rem;
  }

  .text {
    line-height: 1.7;
  }
`

const Card = () => (
  <Container>
    <div className="card is-shadowless">
      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img
                className="photo"
                src="https://pbs.twimg.com/profile_images/596084202556260353/YO9zjacn.jpg"
                alt="Placeholder image"
              />
            </figure>
          </div>
          <div className="media-content">
            <p className="title is-4">John Smith</p>
            <p className="subtitle is-6">@johnsmith</p>
          </div>
        </div>
        <div className="content text">
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
          nesciunt quaerat ad reiciendis perferendis voluptate fugiat sunt fuga
          error totam. Lorem ipsum dolor sit amet consectetur adipisicing elit."
        </div>
      </div>
    </div>
  </Container>
)

export default Card
