import React from 'react'
import "../Styles/Products.css"
import voltageImage from "../assets/voltage-img.png"
import calendarIcon from "../assets/calendar-icon.svg"
import filterIcon from "../assets/filter-lines.png"
const Products = () => {
  return (
    <div className='products-container'>
      <div className="products-container-left">
        <div className="products-container-left-rows" id="row1">
          <div className="optiprime-heading-section">
            <div className="optiprime-heading-main">OptiPrime Parameters</div>
            <div className="optiprime-heading-sub">(Cumulative)</div>
          </div>
          <div className="optiprime-name-icon-cards-section">
            <div className="cards-section">
              <div className="card" id="card1">
                <div className="voltage-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                    <ellipse cx="19.7836" cy="19.3712" rx="19.0385" ry="19.0385" fill="#47FF59" fill-opacity="0.45" />
                    <img src={voltageImage} alt="" srcset="" />
                  </svg>

                </div>
                <div className="voltage-value">415V</div>
                <div className="voltage-title">Voltage</div>
              </div>
              <div className="card" id="card2">
                <div className="voltage-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                    <ellipse cx="19.7836" cy="19.3712" rx="19.0385" ry="19.0385" fill="#47FF59" fill-opacity="0.45" />
                    <img src={voltageImage} alt="" srcset="" />
                  </svg>

                </div>
                <div className="voltage-value">415V</div>
                <div className="voltage-title">Voltage</div>
              </div>
              <div className="card" id="card3">
                <div className="voltage-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                    <ellipse cx="19.7836" cy="19.3712" rx="19.0385" ry="19.0385" fill="#47FF59" fill-opacity="0.45" />
                    <img src={voltageImage} alt="" srcset="" />
                  </svg>

                </div>
                <div className="voltage-value">415V</div>
                <div className="voltage-title">Voltage</div>
              </div>
              <div className="card" id="card4">
                <div className="voltage-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                    <ellipse cx="19.7836" cy="19.3712" rx="19.0385" ry="19.0385" fill="#47FF59" fill-opacity="0.45" />
                    <img src={voltageImage} alt="" srcset="" />
                  </svg>

                </div>
                <div className="voltage-value">415V</div>
                <div className="voltage-title">Voltage</div>
              </div>
              <div className="card" id="card5">
                <div className="voltage-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
                    <ellipse cx="19.7836" cy="19.3712" rx="19.0385" ry="19.0385" fill="#47FF59" fill-opacity="0.45" />
                    <img src={voltageImage} alt="" srcset="" />
                  </svg>

                </div>
                <div className="voltage-value">415V</div>
                <div className="voltage-title">Voltage</div>
              </div>
            </div>
            <div className="optiprime-name-logo">

            </div>
          </div>
        </div>
        <div className="products-container-left-rows" id="row2">
          <div className="day-date-filters-row">
            <div className="days-btns">
              <button className="today">Today</button>
              <button className="last-10-days">Last 10 days</button>
              <button className="last-30-days">Last 30 Days</button>
              <button className="last-60-days">Last 60 days</button>
            </div>
            <div className="calendar-filter-btns">
              <div className="calendar-section">
                <img src={calendarIcon} alt="" height="20" width="20" />
                <div className="calendar-title">Select dates</div>
              </div>
              <div className="filter-section">
                <img src={filterIcon} alt="" height="20" width="20" />
                <div className="filter-title">Filters</div>
              </div>
            </div>
          </div>
          <div className="e-q-parameter-heading">
            <div className="e-q-parameter1">Electrical Quality Parameters and more</div>
            <div className="e-q-parameter2">Electrical Quality Parameters and more</div>
          </div>
          <div className="tables-images-section">
            <div className="table-left">
              <div className="reading-titles-left">
                <div className="voltage-title">Voltage</div>
                <div className="power-kW-title">Power (kW)</div>
                <div className="power-kVA-title">Power (kVA)</div>
                <div className="power-factor-title">Power Factor</div>
                <div className="current-title">Current (A)</div>
                <div className="engine-running-title">Engine running hours (Hr)</div>
              </div>
              <div className="reading-values-left">

                <div className="voltage-values">10</div>
                <div className="power-kW-values">99</div>
                <div className="power-kVA-values">99</div>
                <div className="power-factor-values">83</div>
                <div className="current-values">10</div>
                <div className="engine-running-values">54</div>
              </div>
            </div>
            <div className="middle-img-section"></div>
            <div className="table-right">
              <div className="reading-titles-right"></div>
              <div className="reading-values-right"></div>
            </div>
          </div>
        </div>
        <div className="products-container-left-rows" id="row3">1</div>
      </div>
      <div className="products-container-right"></div>
    </div>
  )
}

export default Products