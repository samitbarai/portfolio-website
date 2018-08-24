import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';

const IndexPage = () => (
  <div>
    <div className = "Title">
      <h1>JUSPAY DESIGNS!!</h1>
      <p>Juspay Technologies, Bangalore, India</p>
    </div>
    <div className = "GraphicDesigns">
      <div className = "Header"><h2>Graphic Designs</h2></div>
      <div className="CardGroup">
        <Card
          title = "Sketches"
          image1 = "images/house-sketch" />
        <Card
          title = "Paintings"
          image1 = "images/painting" />
        <Card
          title = "Animations"
          image1 = "images/animation" />
      </div>
    </div>
  </div>
)

export default IndexPage
