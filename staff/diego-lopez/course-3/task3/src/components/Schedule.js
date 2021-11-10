import React, { useState } from 'react';
import data from '../assets/games.json'

const Schedule = () => {
    const [games] = useState(data)
    return (
        <div>
            <h3>September</h3>
            <table class="table table-striped">
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
                        <tr>
                            <th>{data.date}</th>
                            <th>{data.time}</th>
                            <th>{data.teams}</th>
                            <th>{data.location}</th>
                        </tr>
                    ))}
                </tbody>
            </table>
            <h3>October</h3>
            <table class="table table-striped">
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

const Maps = () => {
    return (
        <div>
            <h3>Maps</h3>
            <hr />
                <table>
                    <tr>
                        <th id="game_location"><strong>Game Locations:</strong></th>
                        <th></th>
                    </tr>
                    <tr>
                        <strong><td>AJ Katzenmaier Elementary</td></strong>
                        <td>24 W. Walton St., Chicago, IL 60610</td>
                        <td><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.65424611099!2d-87.63123908469323!3d41.90029237922035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34e07f6bac3%3A0x68a82e5d59952c86!2s24%20W%20Walton%20St%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1632329906334!5m2!1ses!2ses"></iframe></td>
                    </tr>
                    <tr>
                        <strong><td>Greenbay Elementary</td></strong>
                        <td>1734 N. Orleans St., Chicago, IL 60614</td>
                        <td><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.02588436886!2d-87.6400279846928!3d41.91380227921931!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd34073f306a3%3A0x9e1726bbf8f23f0e!2s1734%20N%20Orleans%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1632330902856!5m2!1ses!2ses"></iframe></td>
                    </tr>
                    <tr>
                        <strong><td>Howard A Yeager Elementary</td></strong>
                        <td>2245 N. Southport Ave., Chicago, IL 60614</td>
                        <td><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.5905171189393!2d-87.66532728469244!3d41.92316067921865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd2e37f9b8d2d%3A0x62ad8b907dd755d6!2s2245%20N%20Southport%20Ave%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1632330954333!5m2!1ses!2ses"></iframe></td>
                    </tr>
                    <tr>
                        <strong><td>Marjorie P Hart Elementary</td></strong>
                        <td>2625 N. Orchard St., Chicago, IL 60614</td>
                        <td><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.291914658432!2d-87.64808628469225!3d41.92957827921814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd30f2630e551%3A0x3e719e44a5cef714!2s2625%20N%20Orchard%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1632330992892!5m2!1ses!2ses"></iframe></td>
                    </tr>
                    <tr>
                        <strong><td>North Elementary</td></strong>
                        <td>1409 N. Ogden Ave., Chicago, IL 60610</td>
                        <td><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2969.356469392328!2d-87.64765898469304!3d41.906695079219865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd33a674ca85d%3A0x9940c7163c4950c5!2s1409%20N%20Ogden%20Ave%2C%20Chicago%2C%20IL%2060610%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1632331035018!5m2!1ses!2ses"></iframe></td>
                    </tr>
                    <tr>
                        <strong><td>South Elementary</td></strong>
                        <td>2101 N. Fremont St., Chicago, IL 60614</td>
                        <td><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2968.747950525069!2d-87.65355538469258!3d41.919776779218864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880fd3196fb41dc7%3A0x970be7f7d6336df5!2s2101%20N%20Fremont%20St%2C%20Chicago%2C%20IL%2060614%2C%20EE.%20UU.!5e0!3m2!1ses!2ses!4v1632331076796!5m2!1ses!2ses"></iframe></td>
                    </tr>
                </table>

        </div>
    )
}

export default Schedule;
export {Maps}