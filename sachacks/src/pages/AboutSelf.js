import React from "react";
import aboutyou from '../assets/about-you.svg';
import { Link } from 'react-router-dom';
import { ButtonGroup, Button, Dropdown } from "react-bootstrap";
const AboutSelf = (props) => {
    return (
        <div class="container">
            <div class="row mx-auto my-auto">
                <div className="col-sm-7 mt-5">
                    <h1 style={{}}> Tell us a little bit about yourself.</h1>
                    <h6 style={{}}> (Dont worry, it's completely anonymous)</h6>
                    <h5 style={{marginTop:"5%"}}> Which Gender Do You Most Identify With?</h5>

                    <div class="btn-group">
                        <button>Male</button>
                        <button>Female</button>
                        <button>Non Binary</button>
                    </div>

                    <h5 style={{marginTop:"5%"}}>What is your age?</h5>

                    <div class="dropdown">
                        <button class="dropbtn"> 18-25 years</button>
                        <div class="dropdown-content">
                            <a href="#" style={{textDecoration:"none"}}>25 - 65 years</a>
                            <a href="#"style={{textDecoration:"none"}}>65+</a>
                        </div>
                    </div>

                    <h5 style={{marginTop:"5%"}}>What is your annual household income?</h5>

                    <div class="dropdown">
                        <button class="dropbtn">under $24,000</button>
                        <div class="dropdown-content">
                            <a href="#" style={{textDecoration:"none"}}>$24,000 - $50,000</a>
                            <a href="#" style={{textDecoration:"none"}}>$50,000+</a>
                        </div>
                    </div>

                </div>
                <div className="col-sm-5 mt-5">
                    <img style={{}} src={aboutyou} width="250" height="275" />
                </div>
            </div>
        </div>)
};

export default AboutSelf