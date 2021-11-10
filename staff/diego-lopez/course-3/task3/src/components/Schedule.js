import React, { useState } from 'react';
import data from '../assets/games.json'

const Schedule = () => {
    const [games, setGames] = useState(data)
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Teams</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {games.game.map((data) => (
                        <tr>
                            <th>{data.date}</th>
                            <th>{data.time}</th>
                            <th>{data.teams}</th>
                            <th>{data.location}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;