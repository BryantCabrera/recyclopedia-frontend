import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HowYouCanHelp.css'

class HowYouCanHelp extends Component {
    render(){
        return(
            <div className="howyoucanhelp__main-container">
                <div className="howyoucanhelp__overlay">
                    <div className="howyoucanhelp__image-container">
                    </div>
                </div>
                <div className="howyoucanhelp__howyoucanhelp-container">
                    <div className="howyoucanhelp__description">
                        <h1 className="howyoucanhelp__description--title">How You Can Help</h1>
                        <div class="howyoucanhelp__description--break"></div>
                        <p className="howyoucanhelp__description--info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut impedit exercitationem accusantium perferendis necessitatibus praesentium illum nulla iure nemo sapiente.</p>
                        <button className="howyoucanhelp__button-getstarted"><Link to='/howyoucanhelp' className="test">Learn More</Link></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default HowYouCanHelp