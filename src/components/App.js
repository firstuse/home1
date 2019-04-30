import React, {Component} from 'react';
import '../resources/css/App.css';
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'

class App extends Component {
    constructor(){
        super();
        this.state = {
            progressStep: 0,
            toggleBar: 0,
            isXSView: 0,
        }
        this.handleNavigation = this.handleNavigation.bind(this);
        this.toggleNavigationBar = this.toggleNavigationBar.bind(this);
    }

    handleNavigation(currentProgressStep){
        this.setState(()=> {
            return {
                progressStep : currentProgressStep,
                toggleBar : this.state.isXSView && !this.state.toggleBar,
            }
        });

    }

    toggleNavigationBar(){
        this.setState(()=> {
            return {
                isXSView: !this.state.isXSView && true,
                toggleBar : !this.state.toggleBar,
            }
        });
    }

    render() {
        return (
            <div id="parentContainer">
                <LeftComponent
                    handleNavigation = {this.handleNavigation}
                    toggleNavigationBar = {this.toggleNavigationBar}
                    toggleBar = {this.state.toggleBar}
                />
                <RightComponent
                    progressStep = {this.state.progressStep}
                    handleNavigation = {this.handleNavigation}
                />
            </div>
        );
    }
}

export default App;
