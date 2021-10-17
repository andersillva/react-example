import { Fragment } from "react";
import PostInfo from "./PostInfo";
import PostHeading from "./PostHeading";
import "../styles/styles.css";

const PostItem = ({ post }) => (
    <Fragment>
        <div className="post-preview">
            <PostHeading id={post.id}
                            title={post.title}
                            summary={post.summary} />
            <PostInfo author_name={post.author_name}
                      created_date={post.created_date} />
        </div>
        <hr className="my-4"/>
    </Fragment>
);

export default PostItem;