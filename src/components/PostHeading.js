import { Link } from "react-router-dom"
import { StyledPostHeading } from "../styles/StyledPostHeading";

const PostHeading = ({ id, title, summary }) => (
    <StyledPostHeading>
        <Link to={"/post/" + id}>
            <h2>{title}</h2>
            <h3>{summary}</h3>
        </Link>
    </StyledPostHeading>
);

export default PostHeading;