import React, { Component } from "react";
import { Link } from "react-router-dom"

class PostInfo extends Component {
    render() {
        return (
            <p>
                Postado por&nbsp;
                <Link to="/profile">{this.props.author_name}</Link>
                &nbsp;em&nbsp;{this.props.created_date}
            </p>
        )
    }
}

export default PostInfo;