import React from 'react'
import { SEO } from '../components';
import { CustmoButton, CustomPurchase } from '../styles/components';
import { Link } from 'gatsby'

export default function fail() {
    return (
      <div>
            <SEO title="Fallo en la compra" />
        <CustomPurchase>
           <p>Al parecer la compra no se ha podido realizar con exito</p>
           <p>Espero que esto no se haya sido una molestia, pase buen dia</p>
           <span role="img" aria-label="emogi">😔</span> 
           <Link to="/">
                <CustmoButton>Volver al home</CustmoButton>
           </Link>
        </CustomPurchase>

      </div>
    )
}
