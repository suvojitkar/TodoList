import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Image from 'react-bootstrap/Image'
import { userLogout } from '../../redux-mgmt/actions';
import { Person, Gear, BoxArrowLeft } from 'react-bootstrap-icons';


class Navigationbar extends Component {
    render() {
        const profileIcon = () => {
            if (this.props.Profile) {
                return <Dropdown>
                    <Dropdown.Toggle variant="info" id="dropdown-basic">
                        <Image className="profilepic" src={this.props.Profile.img} roundedCircle />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item> <Link to="/profile" style={{ textDecoration: 'none' }}><Person />&nbsp;Profile</Link></Dropdown.Item>
                        <Dropdown.Item href="/action-2"><Gear /> &nbsp;Settings</Dropdown.Item>
                        <Dropdown.Item onClick={() => { this.props.handleGoogleLogout() }}><BoxArrowLeft /> &nbsp;Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            } else {
                return '';
            }
        }

        return (
            <React.Fragment>
                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><Link to="/" style={{ textDecoration: 'none' }}>Home</Link></Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Nav>
                        {profileIcon()}
                        <div className="offset">
                            offset
                        </div>
                    </Navbar.Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    Profile: state.Profile
})

const mapDispatchToProps = (dispatch) => {
    return {
        handleGoogleLogout: () => {
            dispatch(userLogout());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigationbar)
