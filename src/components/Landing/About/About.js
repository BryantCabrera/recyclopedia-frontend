import React, { Component } from 'react'
import './About.css'
import { Link } from 'react-router-dom'

class About extends Component {
    render() {
        return (
            <div className="about__main-container">
                <div className="about__overlay">
                    <div className="about__image-container">
                    </div>
                </div>
                <div className="about__about-container">
                    <div className="about__description">
                        <h1 className="about__description--title">Who We Are</h1>
                        <div class="about__description--break"></div>
                        <p className="about__description--info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut impedit exercitationem accusantium perferendis necessitatibus praesentium illum nulla iure nemo sapiente.</p>
                        <button className="about__button-getstarted"><Link to='/about' className="test">Learn More</Link></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default About