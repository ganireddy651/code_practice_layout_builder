import {Component} from 'react'
import './index.css'

class ConfigurationController extends Component {
  render() {
    return (
      <div className="config-container">
        <h1 className="config-heading">Layout</h1>
        <div className="checkbox-container">
          <input className="input" type="checkbox" id="content" />
          <label className="label" htmlFor="content">
            Content
          </label>
        </div>
        <div className="checkbox-container">
          <input className="input" type="checkbox" id="leftNavbar" />
          <label className="label" htmlFor="leftNavbar">
            Left Navbar
          </label>
        </div>
        <div className="checkbox-container">
          <input className="input" type="checkbox" id="rightNavbar" />
          <label className="label" htmlFor="rightNavbar">
            Right Navbar
          </label>
        </div>
      </div>
    )
  }
}

export default ConfigurationController
