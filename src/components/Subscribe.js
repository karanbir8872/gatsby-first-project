import React from "react"
import styled from "styled-components"

const Container = styled.div`
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url("https://colorlib.com/preview/theme/square/images/about.jpg");
  margin-top: 5rem;
  background-repeat: no-repeat;
  background-size: cover;

  .user-input {
    width: 70%;
  }

  .Send-button {
    padding: 0.25rem 1rem 1.25rem 1rem;
    margin-left: 1rem;
    margin-top: 0.25rem;
  }

  .my-columns {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
`

const Subscribe = () => (
  <Container id="Contacts">
    <div className="container">
      {" "}
      <div className="columns my-columns">
        <div className="column">
          <p className="title is-3 has-text-white">Subscribe to us!</p>
          <p className="subtitle is-5 has-text-white">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia,
          </p>
        </div>
        <div className="column">
          <div className="field">
            <div className="control">
              <input
                className="input is-medium user-input"
                type="text"
                placeholder="Enter your Email"
              />
              <button className="button is-primary Send-button">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
)

export default Subscribe
