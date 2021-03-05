import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';

class Profile extends Component {
    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                <center>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={this.props.userInfo.img} />
                        <Card.Body>
                            <Card.Title> {this.props.userInfo.name} </Card.Title>
                            <Card.Text>
                                <b>Email:</b> {this.props.userInfo.email}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </center>
            </React.Fragment>
        )
    }
}

export default Profile;
