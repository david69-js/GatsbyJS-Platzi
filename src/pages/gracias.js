import React from 'react'
import { SEO } from '../components';
import { Button, Purchase } from '../styles/components';
import { Link } from 'gatsby'
export default function gracias() {
    return (
        <div>
            <SEO title="Compra Exitosa"/>
            <Purchase>
                <p>Espero que te luzca el swag</p>
                <p>No pares de aprender</p>
                <span role="img" aria-label="emoji">💖</span>
                <Link to="/">
                    <Button>volver a home</Button>
                </Link>
            </Purchase> 
        </div>
    )
}
