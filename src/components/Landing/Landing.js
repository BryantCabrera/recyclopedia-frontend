import React, { Component } from 'react'
import './Landing.css'
import logo from '../../assets/main-logo.png'
import TrashScan from '../TrashScan/TrashScan'
import About from '../Landing/About/About'
import Mission from './Mission/Mission';
import HowYouCanHelp from './HowYouCanHelp/HowYouCanHelp';

class Landing extends Component {
    render() {
        return (
            <div className="landing__maincontainer">
                <div className="landing__div">
                    <div className="landing__header">
                        <h1>Recyclopedia</h1>
                        <div className="landing__header--content">
                            <p>Empowering communities to drive local
                                <br></br><br></br>
                                environmental change with lasting global impact</p>
                            <a href="#features" alt="features" title="demo"><button className="landing__button-getstarted">
                                Get Started
                                 </button>
                            </a>
                        </div>
                    </div>
                    <div className="top-panel"></div>
                </div>
                <div>
                    <About/>
                    <Mission/>
                    <HowYouCanHelp />
                </div>
            </div>
        )
    }
}

export default Landing