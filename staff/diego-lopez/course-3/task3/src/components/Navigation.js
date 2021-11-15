import { Link } from "react-router-dom";
import { SignInButton, SignOutButton, useUserState } from "../utilities/firebase";

const NavBar = ()=>{
        const [user] = useUserState();
    return(
       <nav className="navbar navbar-light bg-light">
            <div className="container-fluid d-flex justify-content-around nav-height">
                <Link className="navbar-brand" to="/">Home</Link>
                <Link className="navbar-brand" to="/schedule">Game Information</Link>
                { user ? <SignOutButton /> : <SignInButton /> }
                { user ? <ChatButton/> : null}
            </div>
        </nav>
    )
};

const ChatButton = () => (
    <Link className="navbar-brand" to="/Chat">Chatroom</Link>
);

export default NavBar;