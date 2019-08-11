import React from "react"
import styled from "styled-components"

const Container = styled.div`
  font-family: "Roboto", sans-serif;

  margin-top: 7rem;
  background-color: #2f4a71;
  padding-bottom: 3rem;
  margin-bottom: 2rem;

  .test {
    margin-top: 4rem;
  }

  .tes {
    border-bottom: 5px solid #51be78;
    margin-right: 4rem;
  }
`

const HeroInfo = () => (
  <Container className="has-text-white">
    <div className="container">
      <div className="columns">
        <div className="column test">
          <div className="tes">
            <h1 className="subtitle is-3 has-text-white text ">
              About this University
            </h1>
          </div>
        </div>
        <div className="column test is-two-thirds">
          <p className="subtitle is-5 has-text-grey-light">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
            nesciunt quaerat ad reiciendis perferendis voluptate fugiat sunt
            fuga error totam.
          </p>
          <p className="subtitle is-5 has-text-grey-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus assumenda omnis tempora ullam alias amet eveniet
            voluptas, incidunt quasi aut officiis porro ad, expedita saepe
            necessitatibus rem debitis architecto dolore? Nam omnis sapiente
            placeat blanditiis voluptas dignissimos, itaque fugit a laudantium
            adipisci dolorem enim ipsum cum molestias? Quod quae molestias modi
            fugiat quisquam. Eligendi recusandae officiis debitis quas beatae
            aliquam?
          </p>
          <a href="#" class="has-text-success">
            Read more
          </a>
        </div>
      </div>
    </div>
  </Container>
)

export default HeroInfo
