import React from 'react'
import '../Scss/description.scss'

const Description = () => {
  return (
    <>
    <div class="container">
        <div class="product-image">
          <img src="https://img.freepik.com/premium-psd/isometric-plant-3d-rendering_28315-3608.jpg" alt="Product Image" />
        </div>
        <div class="product-description">
          <h1>ZZ plant</h1>
          <p>Sleek and timeless. Titanium glasses with an innovative bridge. A frame to suit every face, Morgan is a classic ‘panto’ shape. .</p>
          <h2>Price: 1000</h2>
          <button>Add to Cart</button>
          <h1>Description</h1>
          <p>Sleek and timeless. Titanium glasses with an innovative bridge. A frame to suit every face, Morgan is a classic ‘panto’ shape. Named after James Morgan, the engineer who built the Regent's Canal, it features custom elements including fluid single piece bridge, adjustable nose pads and temple tips based on Constantin Brâncuși's Bird in Space.</p>
        </div>
      </div>
    </>
    
  )
}

export default Description