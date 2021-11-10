import { Link } from "react-router-dom";

const NavBar = ()=>{
   return(
       <nav class="navbar navbar-light bg-light">
            <div className="container-fluid d-flex justify-content-around nav-height">
                <Link className="navbar-brand" to="/">Home</Link>
                <Link className="navbar-brand" to="/schedule">Game Information</Link>
            </div>
        </nav>
   )
};


export default NavBar;