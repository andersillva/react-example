import { Link } from "react-router-dom"
import "../styles/styles.css";

const PostInfo = ({ author_name, created_date }) => (
    <p className="post-meta">
        Postado por&nbsp;
        <Link to="/profile">{author_name}</Link>
        &nbsp;em&nbsp;{created_date}
    </p>
);

export default PostInfo;