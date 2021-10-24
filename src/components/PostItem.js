import PostInfo from "./PostInfo";
import PostHeading from "./PostHeading";
import { StyledPostItem } from "../styles/StyledPostItem";

const PostItem = ({ post }) => (
    <StyledPostItem>
        <PostHeading id={post.id}
                     title={post.title}
                     summary={post.summary} />
        <PostInfo author_name={post.author_name}
                  created_date={post.created_date} />
        <hr/>
    </StyledPostItem>
);

export default PostItem;