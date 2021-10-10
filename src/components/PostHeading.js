import React, { Component } from "react";
import { Link } from "react-router-dom"

class PostTitle extends Component {
    render() {
        return (
            <Link to={"/post/" + this.props.id}>
                <h3>{this.props.title}</h3>
                <h4>{this.props.summary}</h4>
            </Link>
        )
    }
}

export default PostTitle;