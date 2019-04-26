import React, { Component } from  'react'
import { Link } from 'react-router-dom'
import './Mission.css'

class Mission extends Component {
    render() {
        return (
            <div className="mission__main-container">

            <div className="mission__mission-container">
                    <div className="mission__description">
                        <h1 className="mission__description--title">Mission</h1>
                        <div class="mission__description--break"></div>
                        <p className="mission__description--info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut impedit exercitationem accusantium perferendis necessitatibus praesentium illum nulla iure nemo sapiente.</p>
                        {/* <button className="mission__button-getstarted"><Link to='/about' className="test">Learn More</Link></button> */}
                    </div>
                </div>


                <div className="mission__overlay">
                    <div className="mission__image-container">
                    </div>
                </div>

            </div>
        )
    }
}

export default Mission