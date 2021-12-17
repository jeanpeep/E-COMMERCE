import React from 'react'
import { Container, Spinner } from 'react-bootstrap'
import Nav_general from './Nav_general'

export default function Loading() {
    return (
        <div>
            <Nav_general/>
            <Container className='d-flex justify-content-center'style={{margin:'200px 40px'}}>
            <Spinner animation="border" />
            </Container>
            
        </div>
    )
}
