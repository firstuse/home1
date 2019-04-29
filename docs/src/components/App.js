import React, {Component} from 'react';
import '../resources/css/App.css';
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'

class App extends Component {
    constructor(){
        super();
        this.state = {
            progressStep: 0
        }
        this.handleNavigation = this.handleNavigation.bind(this);
    }

    handleNavigation(currentProgressStep){
        this.setState(previousState=> {
            return {
                progressStep : currentProgressStep,
            }
        });

    }

    render() {
        return (
            <div id="parentContainer">
                <LeftComponent handleNavigation = {this.handleNavigation} />
                <RightComponent progressStep = {this.state.progressStep} handleNavigation = {this.handleNavigation} />
            </div>
        );
    }
}

export default App;
