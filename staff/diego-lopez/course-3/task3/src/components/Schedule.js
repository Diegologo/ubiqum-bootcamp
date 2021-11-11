import React, { useState } from 'react';
import data from '../assets/games.json';
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
                    {games.game.september.map((data) => (
                        <tr key = {data.id}>
                            <th><Link to={`/schedule/${data.id}`} className = 'links'>{data.date}</Link></th>
                            <th><Link to={`/schedule/${data.id}`} className = 'links'>{data.time}</Link></th>
                            <th><Link to={`/schedule/${data.id}`} className = 'links'>{data.teams}</Link></th>
                            <th><Link to={`/schedule/${data.id}`} className = 'links'>{data.location}</Link></th>
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
                    {games.game.october.map((data) => (
                        <tr key = {data.id}>
                            <th><Link to={`/schedule/${data.id}`} className = 'links'>{data.date}</Link></th>
                            <th><Link to={`/schedule/${data.id}`} className = 'links'>{data.time}</Link></th>
                            <th><Link to={`/schedule/${data.id}`} className = 'links'>{data.teams}</Link></th>
                            <th><Link to={`/schedule/${data.id}`} className = 'links'>{data.location}</Link></th>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Schedule;