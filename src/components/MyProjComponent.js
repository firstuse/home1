import React, { Component } from 'react';
import '../resources/css/RightView.css';
import data from '../resources/content/project.json';

class MyProjComponent extends Component {
  render() {
    return (

        <div className="home">
            <div className="homeContainer"
                 data-stellar-background-ratio="0.5">
                <div className="flex justifyCenter alignCenter" >
                    <div className="col-md-8 text align-left mt-5">
                        {data.map((projData) => {
                            return <div className="desc">
                                <p className="subheading">
                                    {projData.name}
                                </p>
                                <p>
                                    {projData.skillUsed}
                                </p>
                                <p>
                                    {projData.roleDescription}
                                </p>
                                <p className="bottomMargin">
                                    {projData.projectDetails}
                                </p>
                                <div className={"bottomBorder"}></div>
                            </div>
                        })}
                    </div>
                </div>
            </div>

        </div>
    );
  }
}

export default MyProjComponent;
