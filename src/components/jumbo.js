import React from 'react'
import {  StyledJumbo  } from '../styles/components';
import { Image } from './'
export default function jumbo({data}) {
    return (
        <StyledJumbo>
            <div>
                <h2>{data.title}</h2>
                <small>{data.description}</small>
            </div>
            <Image name="icon"/>
        </StyledJumbo>
    )
}
