import React from 'react'
import "../Styles/Products.css"
import leaf from "../assets/leaf-svg.svg"
import SwitchButton from './SwitchButton'
import voltageImg from "../assets/voltage-img.png"
import currentImg  from "../assets/current-img.png"
import powerImg from "../assets/power-img.png"
import kvaImg from "../assets/kVA-img.png"
import frequencyImg from "../assets/frequency-img.png"
import companyTitle from "../assets/Optiprime.png"
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
              <div className="card-top" id="card1">
                <div className="icon-circle">
                  <img src={voltageImg} height="25" width="25" alt="" />
                </div>
                <div className="reading-section">
                  <div className="reading">415V</div>
                  <div className="reading-unit">Voltage</div>
                </div>
              </div>
              <div className="card-top" id="card2">
                <div className="icon-circle">
                  <img src={currentImg} height="25" width="25" alt="" />
                </div>
                <div className="reading-section">
                  <div className="reading">00Amp</div>
                  <div className="reading-unit">Current</div>
                </div>
              </div>
              <div className="card-top" id="card3">
                <div className="icon-circle">
                  <img src={powerImg} height="25" width="25" alt="" />
                </div>
                <div className="reading-section">
                  <div className="reading">00Kw</div>
                  <div className="reading-unit">Power</div>
                </div>
              </div>
              <div className="card-top" id="card4">
                <div className="icon-circle">
                  <img src={kvaImg} height="25" width="25" alt="" />
                </div>
                <div className="reading-section">
                  <div className="reading">00</div>
                  <div className="reading-unit">KVA</div>
                </div>
              </div>
              <div className="card-top" id="card5">
                <div className="icon-circle">
                  <img src={frequencyImg} height="25" width="25" alt="" />
                </div>
                <div className="reading-section">
                  <div className="reading">49.5 Hz</div>
                  <div className="reading-unit">Frequency</div>
                </div>
              </div>
            </div>

            <div className="logo-leaf">

              <div className="logo-name"></div>
              <div className="leaf-img"></div>
            </div>

          </div>
        </div>
        <div className="product-left-section-row" id="row2">
          <div className="date-calendar-filters">
            <div className="date-range-buttons">
              <button className="today">Today</button>
              <button className="days" id='ten'>Last 10 days</button>
              <button className="days" id='thirty'>Last 30 days</button>
              <button className="days" id='sixty'>Last 60 days</button>
            </div>
            <div className="select-dates-filters">
              <div className="select-dates">
                <div className="calendar-logo">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M17.5 8.33342H2.5M13.3333 1.66675V5.00008M6.66667 1.66675V5.00008M6.5 18.3334H13.5C14.9001 18.3334 15.6002 18.3334 16.135 18.0609C16.6054 17.8212 16.9878 17.4388 17.2275 16.9684C17.5 16.4336 17.5 15.7335 17.5 14.3334V7.33342C17.5 5.93328 17.5 5.23322 17.2275 4.69844C16.9878 4.22803 16.6054 3.84558 16.135 3.6059C15.6002 3.33341 14.9001 3.33341 13.5 3.33341H6.5C5.09987 3.33341 4.3998 3.33341 3.86502 3.6059C3.39462 3.84558 3.01217 4.22803 2.77248 4.69844C2.5 5.23322 2.5 5.93328 2.5 7.33341V14.3334C2.5 15.7335 2.5 16.4336 2.77248 16.9684C3.01217 17.4388 3.39462 17.8212 3.86502 18.0609C4.3998 18.3334 5.09987 18.3334 6.5 18.3334Z" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div className="select-date">Select Date</div>
              </div>
              <div className="filters">
                <div className="filter-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10H15M2.5 5H17.5M7.5 15H12.5" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
                <div className="filter">Filters</div>
              </div>
            </div>
          </div>
          <div className="electrical-table-headings">
            <div className="electrical-table-heading-left">Electrical Quality Parameters and more</div>
            <div className="electrical-table-heading-right">Electrical Quality Parameters and more</div>

          </div>
          <div className="tables-center-img-section">
            <div className="left-table">
              <div className="table-reading-titles">
                <div className="voltage-title">Voltage</div>
                <div className="power-kW-title">Power (kW)</div>
                <div className="power-kVA-title">Power (kVA)</div>
                <div className="power-factor-title">Power Factor</div>
                <div className="current-title">Current (A)</div>
                <div className="engine-running-hr-title">Engine running hours (Hr)</div>
              </div>
              <div className="table-reading-values">
                <div className="voltage-value">10</div>
                <div className="power-kW-value">99</div>
                <div className="power-kVA-value">99</div>
                <div className="power-factor-value">83</div>
                <div className="current-value">10</div>
                <div className="engine-running-hr-value">54</div>
              </div>
            </div>
            <div className="center-img-section">
              <div className="center-left-img"></div>
              <div className="center-logo">
                <img src={companyTitle} alt="" />
              </div>
              <div className="center-right-img"></div>
            </div>
            <div className="right-table">
              <div className="table-reading-titles">
                <div className="voltage-title">Voltage</div>
                <div className="power-kW-title">Power (kW)</div>
                <div className="power-kVA-title">Power (kVA)</div>
                <div className="power-factor-title">Power Factor</div>
                <div className="current-title">Current (A)</div>
                <div className="engine-running-hr-title">Engine running hours (Hr)</div>
              </div>
              <div className="table-reading-values">
                <div className="voltage-value">10</div>
                <div className="power-kW-value">99</div>
                <div className="power-kVA-value">99</div>
                <div className="power-factor-value">83</div>
                <div className="current-value">10</div>
                <div className="engine-running-hr-value">54</div>
              </div>
            </div>

          </div>
          <div className="bottom-cards-heading">Electrical Quality Parameters and more</div>
          <div className="bottom-cards">
            <div className="bottom-cards-left">
              <div className="bottom-card" id="b-card1">
                <div className="bottom-logo" id='frequency'></div>
                <div className="bottom-reading">50 Hz</div>
                <div className="bottom-title">Frequency</div>
              </div>
              <div className="bottom-card" id="b-card2">
              <div className="bottom-logo" id='engine-rpm'></div>
                <div className="bottom-reading">50 </div>
                <div className="bottom-title">Engine RPM</div>
              </div>
              <div className="bottom-card" id="b-card3">
              <div className="bottom-logo" id='coolant'></div>
                <div className="bottom-reading">50°C</div>
                <div className="bottom-title">Coolant Temp</div>
              </div>
              <div className="bottom-card" id="b-card4">
              <div className="bottom-logo" id='pressure-gauge'></div>
                <div className="bottom-reading">50 Psi</div>
                <div className="bottom-title" id='oil-pressure'>Lube Oil Pressure</div>
              </div>
            </div>
            <div className="bottom-cards-right">
              <div className="bottom-card" id="b-card1">
              <div className="bottom-logo" id='frequency'></div>
                <div className="bottom-reading">50 Hz</div>
                <div className="bottom-title">Frequency</div>
              </div>
              <div className="bottom-card" id="b-card2">
              <div className="bottom-logo" id='engine-rpm'></div>
                <div className="bottom-reading">50</div>
                <div className="bottom-title">Engine RPM</div>
              </div>
              <div className="bottom-card" id="b-card3">
              <div className="bottom-logo" id='coolant'></div>
                <div className="bottom-reading">50°c</div>
                <div className="bottom-title">Coolant Temp</div>
              </div>
              <div className="bottom-card" id="b-card4">
              <div className="bottom-logo" id='pressure-gauge'></div>
                <div className="bottom-reading">50 Psi</div>
                <div className="bottom-title" id='oil-pressure'>Lube Oil Pressure</div>
              </div>
            </div>
          </div>
        </div>
        <div className="product-left-section-row" id="row3">1</div>
      </div>
      <div className="product-right-section">
        <div className="top-right">top</div>
        <div className="bottom-right">
          <div className="power-controls-heading">Power Controls</div>
          <div className="gensets-icons-button">
            <div className="genset-icon"></div>
            <div className="genset-title">Genset</div>
            <div className="button-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="92" height="46" viewBox="0 0 92 46" fill="none">
                <rect x="0.0805664" width="91.4702" height="46" rx="20" fill="#1BD82E" />
                <g filter="url(#filter0_d_1519_26055)">
                  <ellipse cx="68.6829" cy="23.0001" rx="13.7205" ry="15.3333" fill="white" />
                </g>
                <defs>
                  <filter id="filter0_d_1519_26055" x="50.9624" y="5.66675" width="33.4409" height="36.6667" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dx="-1" dy="1" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1519_26055" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1519_26055" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          <div className="running-time-stats">
            <div className="running-time-heading">Running Time</div>
            <div className="running-time-mins">30mins</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products