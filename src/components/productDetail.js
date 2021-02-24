import React, { useState} from 'react';
import priceFormat from '../utils/priceFormat';
import {Tag, SizeButton, QtySelect, StyledProducts, SizeSelect, Button } from '../styles/components';
import {SEO, Stars} from './';

export default function ProductDetail({unit_amount, sku: id, product: {name, metadata} }) {
    const formateprice = priceFormat(unit_amount)
    const [size, setSize] = useState(2);
    const [qty, setQty] = useState(1)
    return <StyledProducts>
        <SEO title={name}/>
        <img src={metadata.img} alt="name"/>
       <div>
       <Tag>Popular</Tag>
        <h2>{name}</h2>
        <b>USD {formateprice}</b>
        <Stars/>
        {metadata.wear && <h3>Color: Azul</h3>}
        {metadata.wear && (
            <SizeSelect selected={size}>
                <SizeButton onClick={() =>setSize(1)}>XS</SizeButton>
                <SizeButton onClick={() =>setSize(2)}>SM</SizeButton>
                <SizeButton onClick={() =>setSize(3)}>MD</SizeButton>
                <SizeButton onClick={() =>setSize(4)}>LG</SizeButton>
            </SizeSelect>
        )}
        <p>Cantidad</p>
            <QtySelect>
                <button onClick={() =>(qty > 1 ? setQty(qty-1) : null)}>-</button>
                <input type='text' disabled value={qty} />
                <button onClick={() => setQty(qty+1)}>+</button>
            </QtySelect>
            <Button>Agregar al carrito</Button>
       </div>
    </StyledProducts>
}
