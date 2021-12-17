import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import Nav_general from '../components/Nav_general'
import { DetailContext } from '../Context'

export default function MiCuenta() {
    const {details}=useContext(DetailContext)
    return (
        <div>
            <Nav_general/>
            <Container id="listado">
                <div id="cardd3" className='d-flex flex-column ps-1 pt-2'>
                    <h4><b>Nombre:</b> {details.first_name} {details.last_name}</h4>
                    <h4><b>Email:</b> {details.email}</h4>
                    <br/>
                    <br/>
                    <br/>
                    <h4><b>Rol:</b> {details.role}</h4>
                </div>
            </Container>
        </div>
    )
}
