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
                    <h2>Game Location</h2>
                    <hr/>
                    <p>Match begins at: {GameLocation[valor].time} the {GameLocation[valor].date}</p><br/>
                    <p>The {GameLocation[valor].teams} teams are participating at: {GameLocation[valor].location} field</p> 
                    <br/><hr/>
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
    );
};

const ChatLoc = () => {
    const {id} = useParams();

    const [ChatLocation, setChatLocation] = useState([]);

    useEffect(() => {
        const gameLocSep = data.game.september.filter(filter => filter.id === id);
        const gameLocOct = data.game.october.filter(filter => filter.id === id);
        const object = Object.assign({}, gameLocSep, gameLocOct);
        setChatLocation(object)
    }, [id])

    return (
        <div>
            {Object.keys(setChatLocation).map(valor =>
                <div key = {setChatLocation[valor].id}><br/>
                    <h2>Game Location</h2>
                    <hr/>
                    <p>Match begins at: {setChatLocation[valor].time} the {setChatLocation[valor].date}</p><br/>
                    <p>The {setChatLocation[valor].teams} teams are participating at: {setChatLocation[valor].location} field</p> 
                    <br/><hr/>
                    <div>
                        <p>Field of the match:</p>
                        <iframe title={ChatLocation[valor].location} src={ChatLocation[valor].url} width="100%" height="450" frameBorder="0" style={{border:0}} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe><hr/>
                    </div>
                </div>
            )}
            <div style={{textAlign:'center'}}>
                <Link to="/schedule" className="btn btn-primary">Go back to schedules</Link>
            </div>
            <hr/>
        </div>
    );
};

export default GameLoc;