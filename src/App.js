import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Home } from "./views/Home";
import { About } from "./views/About";
import { Description } from "./views/Description";
import { Post } from "./views/Post";
import { Profile } from "./views/Profile";
import { PostList } from "./views/PostList";
import './styles/styles.css';

function App() {
    return (
        <Router>
            <Header />
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8 col-xl-7">
                        <Switch>
                            <Route path="/" exact>
                                <Home />
                            </Route>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/description">
                                <Description />
                            </Route>
                            <Route path="/post/:id">
                                <Post />
                            </Route>
                            <Route path="/profile">
                                <Profile />
                            </Route>
                            <Route path="/postlist">
                                <PostList />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </div>
            <Footer />
        </Router>
  );
}

export default App;
