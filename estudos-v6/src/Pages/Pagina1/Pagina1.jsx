import { Link } from "react-router-dom";


function Pagina1() {

    return (

        <>
        <h1>Create Page 1</h1>
        <p>Wellcome for Title Page 1</p>
        
        <div>
            <button><Link to="/explorando">Explorando</Link></button>
        </div>

        </>
    )
    
}

export default Pagina1;