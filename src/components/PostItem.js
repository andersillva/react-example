import React, { Component } from "react";
import PostInfo from "./PostInfo";
import PostHeading from "./PostHeading";

class PostPreview extends Component {
    render() {
        return (
            <div>
                <div>
                    <PostHeading id={this.props.post.id}
                                 title={this.props.post.title}
                                 summary={this.props.post.summary} />
                    <PostInfo author_name={this.props.post.author_name}
                              created_date={this.props.post.created_date} />
                </div>
                <hr/>
            </div>
        )
    }
}

export default PostPreview;