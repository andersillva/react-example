import MainMenu from "./MainMenu";
import AuthorBio from "./AuthorBio";
import "../styles/styles.css";

const Header = () => (
    <header className="masthead">
        <MainMenu />
        <AuthorBio />
    </header>
);

export default Header;