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
    allStripeSku: allStripePrice {
      edges {
        node {
          id
          price: unit_amount
          product {
            name
            metadata {
              description
              img
              wear
            }
          }
        }
      }
    }
  }
  
`
const IndexPage = ({data}) =>{
  console.log(data)
  return(
    <div>
      <Jumbo data={data.allSite.edges[0].node.siteMetadata} />
      <SEO title="Home" />

      <Product products={ data.allStripeSku.edges} />
    </div>
  )
} 
  


export default IndexPage
/* Esto debajo de seo     
<Button bg="gray" ft="50px">Comprar</Button> 
    <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/gracias/">Go to gracias</Link>
      <Link to="/fail/">Go to Fail</Link>
      <Jumbo2/>

*/