import React from 'react'
import { NavLink } from 'react-router-dom'
import { Nav } from 'react-bootstrap';

const Navigation = () => {
    return (
    <Nav activeKey="/homePage" as="ul" >
        <Nav.Item as="li">
            <Nav.Link as={NavLink} to="/homePage">Users</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link as={NavLink} to="/planetsPage">Planets</Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
            <Nav.Link as={NavLink} to="/starshipsPage">Starships</Nav.Link>
        </Nav.Item>
    </Nav>
    )
}

export default Navigation