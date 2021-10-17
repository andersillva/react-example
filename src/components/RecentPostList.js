import { Link } from "react-router-dom"
import PostItem from "./PostItem";
import "../styles/styles.css";

const RecentPostList = ({ posts }) => (
    <section>
        <div>
            <h2 className="page-title">Últimas do blog</h2>
        </div>
        {posts.map(p => <PostItem post={p} key={p.id} />)}
        <div className="d-flex justify-content-end mb-4">
            <Link className="btn btn-primary text-uppercase" to="/postlist">Ver tudo →</Link>
        </div>
    </section>
);

export default RecentPostList;