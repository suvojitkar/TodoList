import React from 'react'

// use props.childern to get custom props
// by passing within start and closing tag from parent component

const Footer = (props) => <div className="footer">
                            <p>Developed by: {props.developer}</p>
                          </div>

export default Footer;
