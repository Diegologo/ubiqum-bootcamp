import { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import data from '../assets/games.json';
import { Link } from "react-router-dom";
import { useUserState } from "../utilities/firebase";


const GameLoc = () => {
    const {id} = useParams();
    const [user] = useUserState();
    const [GameLocation, setGameLocation] = useState([]);

    //game filter by id and month and asigning them to object
    useEffect(() => {
        const gameLocSep = data.game.september.filter(filter => filter.id === id);
        const gameLocOct = data.game.october.filter(filter => filter.id === id);
        const object = Object.assign({}, gameLocSep, gameLocOct);
        setGameLocation(object)
    }, [id])

    //body of game location details, which change according to the game selected.
    return (
        <div>
            {Object.keys(GameLocation).map(valor =>
                <div key = {GameLocation[valor].id}><br/>
                    <h2>Game Details</h2>
                    <hr/>
                    
                    <p>Match begins at: {GameLocation[valor].time} the {GameLocation[valor].date}</p><br/>
                    <p>The {GameLocation[valor].teams} teams are participating at {GameLocation[valor].location} field</p> 
                    <br/><hr/>
                    <div style={{textAlign:'center'}}><br/>
                        {user ? <ChatButton/> : 'You must be logged in to acces the game chatroom'}
                    </div><br/><hr/>
                    <div>
                        <p>Field of the match:</p>
                        <iframe title={GameLocation[valor].location} src={GameLocation[valor].url} width="100%" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe><hr/>
                    </div>
                </div>
            )}
            <div style={{textAlign:'center'}}>
                <Link to="/schedule" className="btn btn-primary">Go back to schedules</Link>
            </div>
            <hr/>
        </div>
    )
};

//button for chat section
const ChatButton = () => {
    const {id} = useParams();
    return (
        <div>
            <Link to={`/schedule/${id}/game${id}`}><button className="btn btn-primary">Game Chatroom</button></Link>
        </div>
    )
  };
  
export default GameLoc;