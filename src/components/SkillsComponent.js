import React, { Component } from 'react';
import '../resources/css/RightView.css';
import data from '../resources/content/skill.json';


class SkillsComponent extends Component {
  render() {
    return (

        <div className="home">
            <div className="homeContainer"
                 data-stellar-background-ratio="0.5">
                <div className="flex justifyCenter alignCenter" >
                    <div className="col-md-8 text align-left mt-5">
                        {data.map((skill) => {
                            return <div className="desc">
                                <p>
                                    {skill}
                                </p>

                            </div>
                        })}
                        <div className={"bottomBorder"}></div>
                    </div>
                </div>
            </div>

        </div>
    );
  }
}

export default SkillsComponent;
