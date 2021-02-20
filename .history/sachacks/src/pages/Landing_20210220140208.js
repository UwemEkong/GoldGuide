import React from "react";
import landing  from '../assets/landing-icon.svg';


const Landing = () =>{
return (
    <>
    <div class="row mx-auto my-auto">
        <div className="col-sm-5 mt-5">
            <h1 style={{paddingTop:"40%"}}> Connecting you to the resources you need, with none of the fluff.</h1>
            <button style={{marginTop:"10%"}} className="btn mx-2 btn-outline-primary">Find Resources Now</button>
        </div>
        <div className="col-sm-7 mt-5">
            <img style={{paddingTop:"10%", marginTop: "15%"}} src={landing} width="500" height="450"/>
        </div>
        </div>
    </>
)

};

export default Landing