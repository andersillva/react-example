import { Link } from "react-router-dom"
import "../styles/styles.css";

const MainMenu = () => (
    <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
        <div className="container px-4 px-lg-5">
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ms-auto py-4 py-lg-0">
                    <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4" to="/">Home</Link></li>
                    <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4" to="/about">Sobre</Link></li>
                    <li className="nav-item"><Link className="nav-link px-lg-3 py-3 py-lg-4" to="/description">Descrição</Link></li>
                </ul>
            </div>
        </div>
    </nav>
);

export default MainMenu;