import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import css from './Team.css'

const Team = (props) => {
    const { idLeague, strLeague, strSport } = props.team;
    return (

        <div className="col-md-4 my-3 text-center">
            <Card>
                <Card.Body>
                    <Card.Title>{strLeague}</Card.Title>
                    <Card.Text>
                        Sports type: {strSport}
                    </Card.Text>
                    <Button className="LinkButton" as={Link} to={`/team/${idLeague}`} variant="primary">See Details</Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default Team;