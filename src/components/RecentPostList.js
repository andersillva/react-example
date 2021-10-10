import { Component } from "react";
import { Link } from "react-router-dom"
import PostItem from "./PostItem";

class RecentPostList extends Component {
    render() {
        return (
            <section>
                <div>
                    <h2>Últimas do blog</h2>
                </div>
                {this.props.posts.map(p => <PostItem post={p} />)}
                <div>
                    <Link to="/postlist">Ver tudo →</Link>
                </div>
            </section>
        )
    }
}

export default RecentPostList;