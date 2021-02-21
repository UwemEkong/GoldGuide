import React from "react";
import aboutyou from '../assets/about-you.svg';
import info from '../assets/info-icon.svg';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

const MoreAboutSelf = (props) => {
    return (
        <div class="container">
            <div class="row mx-auto my-auto">
                <div className="col-sm-7 mt-5">
                    <h3 style={{}}> Just a few more questions!</h3>
                    <h6 style={{}}> (Dont worry, it's completely anonymous)</h6>

                    <h5 style={{ marginTop: "5%" }}> Do you have veteran status?</h5>

                    <form>
                        <label style={{ marginRight: "20%" }} class="radio-inline">
                            <input type="radio" name="optradio" />Yes
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="optradio" />No
                        </label>
                    </form>

                    <h5 style={{ marginTop: "5%" }}> Do you have a disability?
                    <img data-tip="A disability is any condition of the body or mind (impairment) that makes it more difficult for the person with the condition to do certain activities (activity limitation) and interact with the world around them (participation restrictions)." 
                        style={{ margin: "2%" }} src={info}>
                    </img></h5>
                    <ReactTooltip className="tooltip" place="top" type="dark" effect="float" multiline={true}/>
                   
                    <form>
                        <label style={{ marginRight: "20%" }} class="radio-inline">
                            <input type="radio" name="optradio" />Yes
                        </label>
                        <label class="radio-inline">
                            <input type="radio" name="optradio" />No
                        </label>
                    </form>

                </div>
                <div className="col-sm-5 mt-5">
                    <img style={{}} src={aboutyou} width="250" height="275" />
                </div>
            </div>
        </div>)

};

export default MoreAboutSelf