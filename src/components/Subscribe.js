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
  <Container>
    <div class="container">
      <div class="columns my-columns">
        <div class="column">
          <p class="title is-3 has-text-white">Subscribe to us!</p>
          <p class="subtitle is-5 has-text-white">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia,
          </p>
        </div>
        <div class="column">
          <div class="field">
            <div class="control">
              <input
                class="input is-medium user-input"
                type="text"
                placeholder="Normal input"
              />
              <button class="button is-primary Send-button">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Container>
)

export default Subscribe
