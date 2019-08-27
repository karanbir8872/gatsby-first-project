import React from "react"
import styled from "styled-components"

const Container = styled.div`
  padding-top: 4rem;
  background: #183661 !important;

  .heading {
    margin-bottom: 1rem;
  }

  .underline {
    border-bottom: 3px solid white;
  }

  .text {
    margin-bottom: 1rem;
    margin-top: 1rem;
    line-height: 2;
  }

  .link {
    display: block;
    transition: color 0.2s, text-decoraton 0.2s;
    :hover {
      color: white !important;
      text-decoration: underline;
    }
  }

  .my-footer {
    background: #183661;
  }

  .columns {
    margin-right: 0rem;
  }
`

const Footer = () => (
  <Container>
    <div className="container ">
      <div className="columns ">
        <div className="column">
          <img src="https://colorlib.com/preview/theme/academics/images/logo.png " />
          <p className="has-text-white text" href="#">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nemo
            minima qui dolor, iusto iure.
          </p>
          <a className="has-text-primary link">Learn More</a>
        </div>
        <div className="column">
          <h2 className="has-text-weight-semibold has-text-white-ter title is-6 heading">
            <span className="underline">Our Campus</span>
          </h2>
          <a className="has-text-primary link">Acedemic</a>
          <a className="has-text-primary link">News</a>
          <a className="has-text-primary link">Our Interns</a>
          <a className="has-text-primary link">Our Leadership</a>
          <a className="has-text-primary link">careers</a>
          <a className="has-text-primary link">Human Resources</a>
        </div>
        <div className="column">
          <h2 className="has-text-weight-semibold has-text-white-ter title is-6 heading">
            <span className="underline">Our Courses</span>
          </h2>
          <a className="has-text-primary link">Math</a>
          <a className="has-text-primary link">Science & Engineering</a>
          <a className="has-text-primary link">Art and Humanities</a>
          <a className="has-text-primary link">Economics & Finance</a>
          <a className="has-text-primary link">Business Administration</a>
          <a className="has-text-primary link">Computer Science</a>
        </div>
        <div className="column">
          <h2 className="has-text-weight-semibold has-text-white-ter title is-6 heading">
            <span className="underline">Contact</span>
          </h2>
          <a className="has-text-primary link">Help Center</a>
          <a className="has-text-primary link">Support Community</a>
          <a className="has-text-primary link">Press</a>
          <a className="has-text-primary link">Share Your Story</a>
          <a className="has-text-primary link">Our Supporters</a>
        </div>
      </div>
    </div>
    <footer className="footer my-footer has-text-white-ter">
      <div className="content has-text-centered">
        <p>
          <strong className="has-text-white-ter">Bulma</strong> by{" "}
          <a href="https://jgthms.com">Jeremy Thomas</a>. The source code is
          licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The
          website content is licensed{" "}
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
            CC BY NC SA 4.0
          </a>
          .
        </p>
      </div>
    </footer>
  </Container>
)

export default Footer
