import { Component } from "react";
import MainMenu from "./MainMenu";
import AuthorBio from "./AuthorBio";

class Header extends Component {
    render() {
        return (
            <header>
                <MainMenu />
                <AuthorBio />
            </header>
        )
    }
}

export default Header;