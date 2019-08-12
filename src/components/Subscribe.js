import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin-top: 5rem;
`

const Subscribe = () => (
  <Container>
    <div class="container">
      <div class="columns">
        <div class="column">
          <p class="title is-3">Subscribe to us!</p>
          <p class="subtitle is-5">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia,
          </p>
        </div>
        <div class="column">
          <div class="field">
            <div class="control">
              <input
                class="input is-medium"
                type="text"
                placeholder="Normal input"
              />
            </div>
          </div>
          <a class="button is-primary">Primary</a>
        </div>
      </div>
    </div>
  </Container>
)

export default Subscribe
