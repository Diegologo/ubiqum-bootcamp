import { useState, useEffect } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import data from '../assets/games.json'

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
                <div key = {GameLocation[valor].id}>
                <p>Match begins at: {GameLocation[valor].time} the day {GameLocation[valor].date}</p>
                <p>The {GameLocation[valor].teams} teams are participating at: {GameLocation[valor].location} field</p>
                </div>
            )}
        </div>
    );
};

export default GameLoc;