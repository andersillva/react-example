import MainMenu from "./MainMenu";
import AuthorBio from "./AuthorBio";
import { StyledHeader } from "../styles/StyledHeader";

const Header = () => (
    <StyledHeader>
        <MainMenu />
        <AuthorBio />
    </StyledHeader>
);

export default Header;