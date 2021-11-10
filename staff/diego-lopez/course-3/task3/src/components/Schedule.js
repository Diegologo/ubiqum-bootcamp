import React, { useState } from 'react';
import data from '../assets/games.json'
import { Link } from "react-router-dom";

const Schedule = () => {
    const [games] = useState(data)
    return (
        <div>
            <h3>September</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Teams</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {games.game.september.map((data, i) => (
                        <tr key = {i}>
                            <th>{data.date}</th>
                            <th>{data.time}</th>
                            <th>{data.teams}</th>
                            <th><Link to='/Games${data.date}'>{data.location}</Link></th>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3>October</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Teams</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {games.game.october.map((data, i) => (
                        <tr key = {i}>
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