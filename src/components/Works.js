import React from "react"
import styled from "styled-components"

const StyledWork = styled.div`
  font-family: "Roboto", sans-serif;

  .my-heading {
    border-bottom: 5px solid #51be78;
    padding: 0.25rem 0rem;
    margin-bottom: 5rem;
    line-height: 4rem;
  }

  .ColumnEdit {
    margin-top: 1rem;
  }

  .mybutton {
    margin-top: 2rem;
  }

  .EditDiv {
    padding: 2.5rem 4rem;
  }

  .icon-wrapper {
    margin-top: -3rem;
  }

  .icon {
    color: white;
    font-size: 4rem;
    z-index: 1;
  }
  .hexagon {
    position: relative;
    width: 96px;
    height: 55.43px;
    background-color: #51be78;
    margin: 27.71px 0;
  }

  .hexagon:before,
  .hexagon:after {
    content: "";
    position: absolute;
    width: 0;
    border-left: 48px solid transparent;
    border-right: 48px solid transparent;
  }

  .hexagon:before {
    bottom: 100%;
    border-bottom: 27.71px solid #51be78;
  }

  .hexagon:after {
    top: 100%;
    width: 0;
    border-top: 27.71px solid #51be78;
  }

  .columns {
    margin-right: 0rem;
    margin-left: 0rem;
  }
`

const Work = () => (
  <StyledWork>
    <div className="container ">
      <div>
        <h1 className="title has-text-centered is-2 has-text-weight-semibold ">
          <span className="my-heading">Why Academics Works</span>
        </h1>

        <div className="columns has-text-centered ColumnEdit">
          <div className="column">
            <span className="icon hexagon">
              <i class="fas fa-graduation-cap"></i>
            </span>

            <div class="box icon-wrapper">
              <div className="EditDiv">
                <h1 className="title is-5 has-text-weight-semibold">
                  Personalize Learning
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi
                  hendrerit elit
                </p>
                <a className="button is-primary mybutton">Learn More</a>
              </div>
            </div>
          </div>
          <div className="column">
            <span className="icon hexagon">
              <i class="fas fa-pencil-ruler"></i>
            </span>
            <div class="box icon-wrapper">
              <div className="EditDiv">
                <h1 className="title is-5 has-text-weight-semibold">
                  Personalize Learning
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi
                  hendrerit elit
                </p>
                <a className="button is-primary mybutton">Learn More</a>
              </div>
            </div>
          </div>
          <div className="column">
            <span className="icon hexagon">
              <i class="fas fa-university"></i>
            </span>
            <div className="box icon-wrapper">
              <div className="EditDiv">
                <h1 className="title is-5 has-text-weight-semibold">
                  Personalize Learning
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit morbi
                  hendrerit elit
                </p>
                <a className="button is-primary mybutton">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </StyledWork>
)

export default Work
