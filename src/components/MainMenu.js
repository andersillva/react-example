import { Link } from "react-router-dom"
import { StyledMainMenu } from "../styles/StyledMainMenu";

const MainMenu = () => (
    <StyledMainMenu>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">Sobre</Link></li>
                <li><Link to="/description">Descrição</Link></li>
            </ul>
        </div>
    </StyledMainMenu>
);

export default MainMenu;