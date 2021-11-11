import { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import data from '../assets/games.json'
import { Link } from "react-router-dom";

const GameLoc = () => {
    const {id} = useParams();

    const [GameLocation, setGameLocation] = useState([]);

    useEffect(() => {
        const gameLocSep = data.game.september.filter(filter => filter.id === id);
        const gameLocOct = data.game.october.filter(filter => filter.id === id);
        const object = Object.assign({}, gameLocSep, gameLocOct);
        setGameLocation(object)
    }, [id])

    return (
        <div>
            {Object.keys(GameLocation).map(valor =>
                <div key = {GameLocation[valor].id}><br/>
                    <p>Match begins at: {GameLocation[valor].time} the {GameLocation[valor].date}</p><br/>
                    <p>The {GameLocation[valor].teams} teams are participating at: {GameLocation[valor].location} field</p> 
                    <br/><hr/>
                    <div>
                        <p>Map to get to the match;</p>
                        <iframe src={GameLocation[valor].url} width="100%" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe><hr/>
                    </div>
                </div>
            )}
            <div style={{textAlign:'center'}}>
                <Link to="/schedule" className="btn btn-primary">Go back to schedules</Link>
            </div>
        </div>
    );
};

export default GameLoc;