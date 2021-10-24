import { Link } from "react-router-dom"
import { StyledPostInfo } from "../styles/StyledPostInfo";

const PostInfo = ({ author_name, created_date }) => (
    <StyledPostInfo>
        Postado por&nbsp;
        <Link to="/profile">{author_name}</Link>
        &nbsp;em&nbsp;{created_date}
    </StyledPostInfo>
);

export default PostInfo;