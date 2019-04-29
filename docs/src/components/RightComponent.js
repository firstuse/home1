import React, { Component } from 'react';
import '../resources/css/RightView.css';
import HomeComp from './HomeComponent'
import MyProjComp from './MyProjComponent'
import ContactComp from './ContactComponent'
import AboutMeComp from './AboutMeComponent'
import SkillComp from './SkillsComponent'
import WorkExComp from './WorkExComponent'


class RightComponent extends Component {
  render() {
      var component = <HomeComp handleNavigation = {this.props.handleNavigation} />;
      if(this.props.progressStep === 0){
          component = <HomeComp handleNavigation = {this.props.handleNavigation} />
      }else if(this.props.progressStep === 1){
          component = <WorkExComp handleNavigation = {this.props.handleNavigation} />
      }else if(this.props.progressStep === 2){
          component = <MyProjComp handleNavigation = {this.props.handleNavigation}  />
      }else if(this.props.progressStep === 3){
          component = <SkillComp handleNavigation = {this.props.handleNavigation}  />
      }else if(this.props.progressStep === 4){
          component = <AboutMeComp handleNavigation = {this.props.handleNavigation}  />
      }else if(this.props.progressStep === 5){
          component = <ContactComp handleNavigation = {this.props.handleNavigation}  />
      }
    return (
        <div>{component}</div>

    );
  }
}

export default RightComponent;
