import React, { Component } from 'react'
import logo from '../../assets/logo.gif';

class Project extends Component {
    render() {
        return (
            <React.Fragment>
                <center>
                    <h1 className="title projectHeader"> {this.props.title}</h1>
                    <img src={logo} alt="logo" width="80" height="80"></img>
                </center>
            </React.Fragment>
        )
    }
}

export default Project;
