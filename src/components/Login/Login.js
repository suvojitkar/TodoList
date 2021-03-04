import React, { Component } from 'react'
import { Authuser } from '../../redux-mgmt/actions'
import { connect } from 'react-redux'

export class Login extends Component {
    render() {
        return (
            <center>
                <div onClick={() => this.props.handleGoogleLogin()} className="google-btn">
                    <div className="google-icon-wrapper">
                        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="logo"/>
                    </div>
                    <p className="btn-text"><b>Sign in with google</b></p>
                </div>
            </center>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleGoogleLogin: () => {
            dispatch(Authuser());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
