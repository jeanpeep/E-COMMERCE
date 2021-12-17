import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Nav_general from '../components/Nav_general'
import imagen404 from "../images/404.jpg"

export default function Noencontrado() {
    return (
        <div>
            <Nav_general/>
            <Container id='listado'>
                <Link to="/">
                <img src={imagen404} alt="404" style={{width:"600px"}}/>
                </Link>
            </Container>
        </div>
    )
}
