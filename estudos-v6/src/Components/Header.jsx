import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <h4><Link to="/">Home</Link></h4>
            <h4><Link to="/pagina1">Pagina 1</Link></h4>
            <h4><Link to="pagina2">Pagina 2</Link></h4>
        </>
    );
}

export default Header;
