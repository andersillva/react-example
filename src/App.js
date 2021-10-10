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

function App() {
    return (
        <div>
            <Router>
                <Header />
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
                <Footer />
            </Router>
        </div>
  );
}

export default App;
