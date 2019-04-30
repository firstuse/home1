import React, { Component } from 'react';
import '../resources/css/RightView.css';
import data from '../resources/content/home.json';

class HomeComponent extends Component {
  render() {
    return (
        <div className="home">
            <div>
                {this.props.progressStep}
                </div>
            <div
                className="homeContainer"
                data-stellar-background-ratio="0.5">
                <div className="flex justifyCenter alignCenter" >
                    <div className="col-md-8 text text-center">
                        <div  className="img bottomMargin"></div >
                        <div className="desc">
                            <h2 className="subheading">
                                {data.greeting}
                                </h2>
                            <h1 className="bottomMargin text-center">
                                {data.name}
                                </h1>
                            <p className="bottomMargin">
                                {data.intro}
                                </p>
                            <p className={"d-none d-lg-block"}><a href="#" className="btn-custom" onClick={()=> this.props.handleNavigation(4)}>More About Me > <span class="ion-ios-arrow-forward"></span></a></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
  }
}

export default HomeComponent;
