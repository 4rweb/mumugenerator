import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Header } from 'semantic-ui-react'
import mu from '../images/icons/mu.jpg'

const Headerr = ({ siteTitle }) => (
  <header
    style={{
      background: `white`,
      marginBottom: `1rem`,
      borderBottom: '1px solid black'
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1rem 1rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        <Header as='h2' className="mu" image={mu} content="MuMuGenerator" />
        </Link>
      </h1>
    </div>
  </header>
)

Headerr.propTypes = {
  siteTitle: PropTypes.string,
}

Headerr.defaultProps = {
  siteTitle: ``,
}

export default Headerr
