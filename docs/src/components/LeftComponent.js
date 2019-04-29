import React, {Component} from 'react';
import '../resources/css/LeftView.css';

class LeftComponent extends Component {
    render() {
        return (
            <div>
                <a href="#"
                   className="js-xsNavBar xsNavBar">
                    <i></i>
                </a>
                <aside
                    role="complementary"
                    className="leftPanel text-center"
                >
                    <h2
                        id="myIcon">
                        <a href="#" onClick={()=> this.props.handleNavigation(0)}>
                            Deepak Middha
                        </a>
                    </h2>
                    <nav
                        className="menu"
                        role="navigation">
                        <ul>
                            <li className="active">
                                <a href="#" onClick={()=> this.props.handleNavigation(0)}>Home</a>
                            </li>
                            <li>
                                <a href="#" onClick={()=>this.props.handleNavigation(1)} >Work Ex</a>
                            </li>
                            <li>
                                <a href="#" onClick={()=>this.props.handleNavigation(2)}>Projects</a>
                            </li>
                            <li>
                                <a href="#" onClick={()=>this.props.handleNavigation(3)}>Skills</a>
                            </li>
                            <li>
                                <a href="#" onClick={()=>this.props.handleNavigation(4)}>About</a>
                            </li>
                            <li>
                                <a href="#" onClick={()=>this.props.handleNavigation(5)}>Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="footer">
                        <ul>
                            <li>
                                <a href="https://www.facebook.com/Middha09" target={"_blank"}> Facebook</a>
                            </li>
                            <li>
                                <a href="https://twitter.com/DeepakMiddha1" target={"_blank"}>Twitter</a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/_deepakmiddha/?hl=en" target={"_blank"}>Instagram</a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/deepak-middha-b02b9457/"  target={"_blank"}>LinkedIn</a>
                            </li>
                            <li>
                                <a href="https://www.c-sharpcorner.com/members/deepak-middha" target={"_blank"}>C# Corner</a>
                            </li>
                        </ul>
                    </div>
                </aside>

            </div>
        );
    }
}

export default LeftComponent;
