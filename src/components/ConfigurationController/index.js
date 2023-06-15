import {Component} from 'react'
import ConfigurationContext from '../../context/ConfigurationContext'
import Layout from '../Layout'
import './index.css'

class ConfigurationController extends Component {
  state = {showContent: true, showLeftNavbar: true, showRightNavbar: true}

  onToggleShowContent = () => {
    this.setState(preState => ({showContent: !preState.showContent}))
  }

  onToggleShowLeftNavbar = () => {
    this.setState(preState => ({showLeftNavbar: !preState.showLeftNavbar}))
  }

  onToggleShowRightNavbar = () => {
    this.setState(preState => ({showRightNavbar: !preState.showRightNavbar}))
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    console.log(showContent, showLeftNavbar, showRightNavbar)

    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.onToggleShowContent,
          onToggleShowLeftNavbar: this.onToggleShowLeftNavbar,
          onToggleShowRightNavbar: this.onToggleShowRightNavbar,
        }}
      >
        <div className="config-container">
          <h1 className="config-heading">Layout</h1>
          <div className="checkbox-container">
            <input
              checked={showContent}
              onChange={this.onToggleShowContent}
              className="input"
              type="checkbox"
              id="content"
            />
            <label className="label" htmlFor="content">
              Content
            </label>
          </div>
          <div className="checkbox-container">
            <input
              checked={showLeftNavbar}
              onChange={this.onToggleShowLeftNavbar}
              className="input"
              type="checkbox"
              id="leftNavbar"
            />
            <label className="label" htmlFor="leftNavbar">
              Left Navbar
            </label>
          </div>
          <div className="checkbox-container">
            <input
              checked={showRightNavbar}
              onChange={this.onToggleShowRightNavbar}
              className="input"
              type="checkbox"
              id="rightNavbar"
            />
            <label className="label" htmlFor="rightNavbar">
              Right Navbar
            </label>
          </div>
        </div>
        <Layout />
      </ConfigurationContext.Provider>
    )
  }
}

export default ConfigurationController
