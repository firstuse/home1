import React, { Component } from 'react';
import '../resources/css/RightView.css';

class AboutMeComponent extends Component {
  render() {
    return (
        <div className="home">
            <div> {this.props.progressStep}</div>
            <div className="homeContainer"
                 data-stellar-background-ratio="0.5">
                <div className="flex justifyCenter alignCenter" >
                    <div className="col-md-8 text text-center">
                       {/* <div  className="img bottomMargin"></div >*/}
                        <div className="desc">
                            <h2 className="subheading">Hello I'm</h2>
                            <h1 className="bottomMargin text-center">Deepak Middha</h1>
                            <p className="bottomMargin">
                               This page is in progress</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
  }
}

export default AboutMeComponent;
