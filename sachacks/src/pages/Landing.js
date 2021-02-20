import React from "react";
import landing  from '../assets/landing-icon.svg';
import logo from '../assets//logo-icon.svg';
const Landing = (props) =>{

return (
    <React.Fragment>
      <nav style={{borderBottom:"2px solid black"}}class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1">
      <img style={{paddingTop:"0px"}} src = {logo}/>
  </span>
</nav>
    <div class="row">
    <div className="col-sm-5">
            <h1 style={{paddingTop:"40%"}}> Connecting you to the resources you need, with none of the fluff.</h1>
            <button style={{marginTop:"10%"}} className="btn mx-2 btn-outline-secondary">Find Resources</button>
        </div>
        <div className="col-sm-7">
            <img style={{paddingTop:"10%"}} src= {landing} width="500" height="450" />
        </div>
        </div>
        </React.Fragment>
)

};

export default Landing