import React, { useState } from "react";
import aboutyou from '../assets/about-you.svg';
import IconCard from '../components/IconCard';


const AboutSelf = ({ onSelect, value }) => {

    const [isSelected, setIsSelected] = useState(false)


    const handleClick = () => {
        console.log(isSelected)
        isSelected ? setIsSelected(false) : setIsSelected(true);
    }

    return (
        <div className="container">
            <div className="row mx-auto my-auto">
                <div className="col-sm-7 mt-5">
                    <h1 style={{}}> Tell us a little bit about yourself.</h1>
                    <h6 style={{}}> (Dont worry, it's completely anonymous)</h6>
                    <h5 style={{marginTop:"5%"}}> Which Gender Do You Most Identify With?</h5>

                    <div className="btn-group">
                        <IconCard name="Male" value="male" onSelect={handleClick}/>
                        <IconCard name="Female" value="female" onSelect={handleClick}/>
                        <IconCard name="Non-Binary" value="nonBinary" onSelect={handleClick}/>
                    </div>



                    <h5 style={{marginTop:"5%"}}>What is your age?</h5>

                    <div className="dropdown">
                        <button className="dropbtn"> 18-25 years</button>
                        <div className="dropdown-content">
                            <a href="#" style={{textDecoration:"none"}}>25 - 65 years</a>
                            <a href="#"style={{textDecoration:"none"}}>65+</a>
                        </div>
                    </div>

                    <h5 style={{marginTop:"5%"}}>What is your annual household income?</h5>

                    <div className="dropdown">
                        <button className="dropbtn">under $24,000</button>
                        <div className="dropdown-content">
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