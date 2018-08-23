import React from 'react'
import Link from 'gatsby-link'
import Card from '../components/Card';

const IndexPage = () => (
  <div>
    <div className = "Title">
      <h1>Samit Barai</h1>
      <p>Product Designer, Juspay Technologies</p>
    </div>
    <div className = "GraphicDesigns">
      <div className = "Header"><h2>Graphic Designs</h2></div>
      <div className="CardGroup">
        <Card
          title = "Sketches"
          image = {require('../images/house-sketch.svg')} />
        <Card
          title = "Paintings"
          image = {require('../images/painting.svg')} />
        <Card
          title = "Animations"
          image = {require('../images/animation.svg')} />
      </div>
    </div>
  </div>
)

export default IndexPage
