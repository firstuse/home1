import React, { Component } from 'react';
import '../resources/css/RightView.css';
import data from '../resources/content/workEx.json';

class WorkExComponent extends Component {
  render() {
    return (

        <div className="home">
            <div className="homeContainer"
                 data-stellar-background-ratio="0.5">
                <div className="flex justifyCenter alignCenter" >
                    <div className="col-md-8 text align-left mt-5">
                        {data.map((workEx) => {
                            return <div className="desc workDesc">
                                <p className="subheading">
                                    {workEx.role}
                                    </p>
                                <p>
                                    {workEx.companyName}
                                    </p>
                                <p>
                                    {workEx.duration}
                                    </p>
                                     <p className="bottomMargin">
                                         {workEx.location}
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

export default WorkExComponent;
