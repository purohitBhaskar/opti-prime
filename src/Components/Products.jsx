import React from 'react'
import "../Styles/Products.css"
import leaf from "../assets/leaf-svg.svg"
const Products = () => {
  return (
    <div className='product-container'>
      <div className="product-left-section">
        <div className="product-left-section-row" id="row1">
          <div className="optiprime-heading-subheading">
            <div className="optiprime-heading">OptiPrime Parameters</div>
            <div className="optiprime-subheading">(Cumulative)</div>
          </div>
          <div className="cards-logo-leaf-section">
            <div className="cards">
              <div className="card-top" id="card1">1</div>
              <div className="card-top" id="card2">1</div>
              <div className="card-top" id="card3">1</div>
              <div className="card-top" id="card4">1</div>
              <div className="card-top" id="card5">1</div>
            </div>

            <div className="logo-leaf">
              
              <div className="logo-name"></div>
              <div className="leaf-img"></div>
            </div>
           
          </div>
        </div>
        <div className="product-left-section-row" id="row2">1</div>
        <div className="product-left-section-row" id="row3">1</div>
      </div>
      <div className="product-right-section"></div>
    </div>
  )
}

export default Products