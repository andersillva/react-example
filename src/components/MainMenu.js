import { Component } from "react";
import { Link } from "react-router-dom"

class MainMenu extends Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">Sobre</Link></li>
                    <li><Link to="/description">Descrição</Link></li>
                </ul>
            </nav>
        )
    }
}

export default MainMenu;