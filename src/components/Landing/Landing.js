import React, { Component } from 'react'
import './Landing.css'
import logo from '../../assets/main-logo.png'

class Landing extends Component {
    render(){
        return(
            <div className="landing__maincontainer" id="landing">
                <div className="landing__header">
                    <img src={logo}></img>
                </div>
                <div className="landing__features">
                    <div className="landing__features--demo">
                        <h1>Demo</h1>
                    </div>
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