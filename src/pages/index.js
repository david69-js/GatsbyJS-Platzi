import React from "react"
import {  graphql } from "gatsby"
import {  SEO ,Jumbo, Product } from '../components';
import styled from 'styled-components';


export const query = graphql`
  query get_all_data{
    allSite{
      edges{
        node{
          siteMetadata{
            description, 
            title
          }
        }
      }
    }
    allStripePrice{
      edges{
        node{
          id
          unit_amount
          product{
            name
            metadata{
              img
              description
              wear
            }      
          }
        }
      }
    }
  }
  
`
const Button = styled.button`
  background: ${props => props.bg};
  font-size:${props => props.ft};
  padding:30px;
  height:auto;
  width:auto;
  color:white;
  &:hover{
    transform: scale(1.3);
    background: black;
  }
`;
const IndexPage = ({data}) =>{
  console.log(data)
  return(
    <div>
      <Jumbo data={data.allSite.edges[0].node.siteMetadata} />
      <SEO title="Home" />

      <Product products={ data.allStripePrice.edges} />
      <Button bg="gray" ft="50px">Comprar</Button>
    </div>
  )
} 
  


export default IndexPage
/* Esto debajo de seo      
    <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/gracias/">Go to gracias</Link>
      <Link to="/fail/">Go to Fail</Link>
      <Jumbo2/>

*/