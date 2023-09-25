import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme={`${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.about}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.contact}</a>
              </li>
            </ul>
            <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
              <input className="form-check-input" onClick={props.darkModeBtn} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode === 'dark'?'light':'dark'} mode</label>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

// propTypes used to define the type of properties assigned.
Navbar.propTypes = {
  title: PropTypes.string,
  about: PropTypes.string,
  contact: PropTypes.string.isRequired // isReuired marked as reuried value  & its not working when the value is defined in defaultProps
}

// defaultProps used to give the defination about properties
Navbar.defaultProps = {
  title: 'set title here',
  about: 'set about us here',
  contact: 'set contact us here'
}