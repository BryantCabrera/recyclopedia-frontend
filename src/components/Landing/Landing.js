import React, { Component } from 'react'
import './Landing.css'
import logo from '../../assets/main-logo.png'
import TrashScan from '../TrashScan/TrashScan'

class Landing extends Component {
  render() {
    return (
      <div className="landing__maincontainer">
        <div className="landing__div">
          <div className="landing__header">
            <h1>Recylopedia</h1>
            <div className="landing__header--content">
              <p>Empowering communities to drive local
            <br></br><br></br>
                environmental change with lasting global impact</p>
              <button className="landing__button-getstarted">
                Get Started
            </button>
            </div>
            {/* <img src={logo}></img> */}
          </div>

        </div>
        <div className="landing__features">
          <div className="landing__features--demo">
            <h1>Demo</h1>
            <TrashScan />
          </div>
        </div>
        <div className="landing_features-both">
          <div className="landing__features--incentives">
            <h1>Incentives</h1>
          </div>
          <div className="landing__features--impact">
            <h1>Impact</h1>
          </div>
        </div>
        <div className="landing__demo--description">
          <div className="landing__demo--panel">
            <div className="landing__demo--description--text">
              <h2>Demo Description</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt id tenetur beatae dolores corporis eaque.</p>
            </div>
          </div>
        </div>
        <div className="landing__incentives--description">
          <div className="landing__incentives--panel">
            <div className="landing__incentives--description--text">
              <h2>Incentives</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt id tenetur beatae dolores corporis eaque.</p>
            </div>
          </div>
        </div>
        <div className="landing__impact--description">
          <div className="landing__impact--panel">
            <div className="landing__impact--description--text">
              <h2>Impact</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt id tenetur beatae dolores corporis eaque.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Landing