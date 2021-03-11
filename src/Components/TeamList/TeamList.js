import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import css from './TeamList.css'
const TeamList = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`)
            .then(res => res.json())
            .then(data => {
                const newTeam = data.leagues.slice(44, 53);
                setTeam(newTeam)
            })

    }, [])
    return (
        <div className="container mt-5 teamStyle">
            <div className="row mb-5">
                {
                    team.map(team => <Team key={team.idLeague} team={team}></Team>)
                }
            </div>
        </div>
    );
};

export default TeamList;