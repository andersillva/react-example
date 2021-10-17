import { Link } from "react-router-dom"
import "../styles/styles.css";

const PostHeading = ({ id, title, summary }) => (
    <Link to={"/post/" + id}>
        <h3 className="post-title">{title}</h3>
        <h4 className="post-subtitle">{summary}</h4>
    </Link>
);

export default PostHeading;