import { Link } from "react-router-dom"
import PostItem from "./PostItem";
import { StyledRecentPostList } from "../styles/StyledRecentPostList";

const RecentPostList = ({ posts }) => (
    <StyledRecentPostList>
        <div>
            <div>
                <h1>Últimas do blog</h1>
                {posts.map(p => <PostItem post={p} key={p.id} />)}
                <div>
                    <Link to="/postlist">Ver tudo →</Link>
                </div>
            </div>
        </div>
    </StyledRecentPostList>
);

export default RecentPostList;