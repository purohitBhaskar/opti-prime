import React from 'react'
import "../Styles/Dashboard.css"
import voltageIcon from "../assets/voltage-img.png"
import powerFactor from "../assets/frequency-img.png"
import powerIcon from "../assets/power-img.png"
import frequencyIcon from "../assets/kVA-img.png"
import lineCurve from "../assets/line-curve.png"
import LineChart from './LineChart'
const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <div className="dashboard-left">
        <div className="left-top-row">
          <div className="navigation-arrow-dashboard">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 24" fill="none">
              <path opacity="0.7" d="M0.939341 10.9393C0.353554 11.5251 0.353554 12.4749 0.939341 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939341 10.9393ZM22 10.5L2 10.5V13.5L22 13.5V10.5Z" fill="black" />
            </svg>
            <div className="dashboard-generator-route">
              <div className="dashboard-route">Dashboard</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                <path d="M15.9168 14.4999L9.93555 8.51864L11.6441 6.81006L19.334 14.4999L11.6441 22.1897L9.93555 20.4811L15.9168 14.4999Z" fill="#199E2E" />
              </svg>
              <div className="generator-route">Generator</div>
            </div>
          </div>
          <div className="generator-battery-temp-switch">
            <div className="switch-left">
              <div className="generator-title">Generator</div>
              <div className="generator-subtitle">IRC231GHU</div>
            </div>
            <div className="switch-right">
              <div className="temperature-icon-title">
                <div className="temp-icon"></div>
                <div className="temp-stats">32°C</div>
              </div>
              <div className="battery-icon-title">
                <div className="battery-icon"></div>
                <div className="battery-stats">32%</div>
              </div>
              <div className="on-off-switch">
                <div className="switch-status">ON</div>
                <div className="circle-switch"></div>
              </div>
            </div>
          </div>
          <div className="center-generator-img">

          </div>
          <div className="dashboard-card-section">
            <div className="dashboard-card" id="card1">
              <div className="icon" id="voltage-icon">
                <img src={voltageIcon} height="20" width="20" alt="" />
              </div>
              <div className="reading" id='voltage-reading'>415 V</div>
              <div className="about-reading">Line to Line Voltage</div>
            </div>
            <div className="dashboard-card" id="card2">
              <div className="icon" id="voltage-icon">
                <img src={voltageIcon} height="20" width="20" alt="" />
              </div>
              <div className="reading" id='voltage-reading'>415 V</div>
              <div className="about-reading">Line to Neutral Voltage</div>
            </div>
            <div className="dashboard-card" id="card3">
              <div className="icon" id="card3-icon">
                <img src={voltageIcon} alt="" />
              </div>
              <div className="readings-KVA-KW">
                <div className="reading-KVA">20</div>
                <div className="reading-KW">202</div>
              </div>
              <div className="power-KVA-KW">
                <div className="power-KVA">Power KVA</div>
                <div className="power-KW">Power KW</div>
              </div>
            </div>
            <div className="dashboard-card" id="card4">
              <div className="icon" id="voltage-icon">
                <img src={powerIcon} height="20" width="20" alt="" />
              </div>
              <div className="reading" id='current-reading'>1000 Amp</div>
              <div className="about-reading">Current</div>
            </div>
            <div className="dashboard-card" id="card5">
              <div className="icon" id="voltage-icon">
                <img src={powerFactor} height="20" width="20" alt="" />
              </div>
              <div className="reading" id='voltage-reading'>80</div>
              <div className="about-reading">Power Factor</div>
            </div>
            <div className="dashboard-card" id="card6">
              <div className="icon" id="voltage-icon">
                <img src={frequencyIcon} height="20" width="20" alt="" />
              </div>
              <div className="reading" id='voltage-reading'>24Hz</div>
              <div className="about-reading">Frequency</div>
            </div>
          </div>
        </div>
        <div className="left-middle-row">
          <div className="power-consumption-year-heading">
            <div className="power-consumption">Power Consumption</div>
            <div className="select-year-btn">
              <div className="year">This Year</div>
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="6" viewBox="0 0 13 6" fill="none">
                <path d="M13 0H0L6.5 6L13 0Z" fill="#9A9A9A" />
              </svg>
            </div>
          </div>
          <div className="line-curve">
            <img src={lineCurve} alt="" />
          </div>
          {/* <LineChart/> */}
        </div>
        <div className="left-bottom-row">
          <div className="contact-information">Contact Information</div>
          <div className="contact-cards">
            <div className="contact-card" id="contact-1">
              <div className="title" id="email-title">Email Id</div>
              <div className="value" id="email-address">lorem@gmail.com</div>
            </div>
            <div className="contact-card" id="contact-2">
              <div className="title" id="mobile-title">Mobile Number</div>
              <div className="value" id="mobile-number">+91 950 986 4578</div>
            </div>
          </div>

        </div>
      </div>
      <div className="dashboard-right">
        <div className="device-info-tab">
          <div className="device-info-heading">Device Info</div>
          <div className="dropdown-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
              <path d="M0 8L16 8L8 0L0 8Z" fill="white" />
            </svg>
          </div>

        </div>
        <div className="specifications-detailed-info-section">
          <div className="specification-section">
            <div className="specification-heading">
              <div className="green-block"></div>
              Specifications
            </div>
          </div>
          <div className="detail-cards">
            <div className="detail-card" id="location-card">
              <div className="title">Location</div>
              <div className="value">Pune, Baner</div>
            </div>
            <div className="detail-card" id="sys-volt-card">
              <div className="title">Sys Voltage</div>
              <div className="value">50 V</div>
            </div>
            <div className="detail-card" id="cyliner-card">
              <div className="title">Cylinder</div>
              <div className="value">Lorem</div>
            </div>
            <div className="detail-card" id="battery-card">
              <div className="title">Battery Alternator</div>
              <div className="value">lorrem ipsum</div>
            </div>
            <div className="detail-card" id="air-intake-card">
              <div className="title">Intake air method</div>
              <div className="value">Lorem</div>
            </div>
            <div className="detail-card" id="type-card">
              <div className="title">Type</div>
              <div className="value">Lorem ipsum</div>
            </div>
          </div>
          <div className="specification-section">
            <div className="specification-heading">
              <div className="green-block"></div>
              Detailed info
            </div>
          </div>
          <div className="detail-cards">
            <div className="detail-card" id="location-card">
              <div className="title">Model & Make</div>
              <div className="value">Lorem, ipsum dolor.</div>
            </div>
            <div className="detail-card" id="sys-volt-card">
              <div className="title">Date of Purchase</div>
              <div className="value">23.02.2023</div>
            </div>
            <div className="detail-card" id="cyliner-card">
              <div className="title">Last Maintanenece Date</div>
              <div className="value">23.02.2023</div>
            </div>
            <div className="detail-card" id="battery-card">
              <div className="title">Upcoming Maintanenece Date</div>
              <div className="value">23.02.2023</div>
            </div>
            <div className="detail-card" id="air-intake-card">
              <div className="title">Type</div>
              <div className="value">Lorem</div>
            </div>
            <div className="detail-card" id="type-card">
              <div className="title">Intake Air Method</div>
              <div className="value">Lorem ipsum</div>
            </div>
            <div className="detail-card" id="type-card">
              <div className="title">Intake Air Method</div>
              <div className="value">Lorem ipsum</div>
            </div>
          </div>
        </div>
        <div className="alerts-info-tab">
          <div className="alerts-info-heading">Alerts</div>
          <div className="dropdown-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="8" viewBox="0 0 16 8" fill="none">
              <path d="M0 8L16 8L8 0L0 8Z" fill="white" />
            </svg>
          </div>

        </div>
        <div className="alerts-section">
          <div className="view">View All</div>
          <div className="alert-card">
            <div className="left-details">
              <div className="details-row1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M8.57465 3.21659L1.51632 14.9999C1.37079 15.2519 1.29379 15.5377 1.29298 15.8287C1.29216 16.1197 1.36756 16.4059 1.51167 16.6587C1.65579 16.9115 1.86359 17.1222 2.11441 17.2698C2.36523 17.4174 2.65032 17.4967 2.94132 17.4999H17.058C17.349 17.4967 17.6341 17.4174 17.8849 17.2698C18.1357 17.1222 18.3435 16.9115 18.4876 16.6587C18.6317 16.4059 18.7071 16.1197 18.7063 15.8287C18.7055 15.5377 18.6285 15.2519 18.483 14.9999L11.4247 3.21659C11.2761 2.97168 11.0669 2.76919 10.8173 2.62866C10.5677 2.48813 10.2861 2.41431 9.99965 2.41431C9.71321 2.41431 9.43159 2.48813 9.18199 2.62866C8.93238 2.76919 8.72321 2.97168 8.57465 3.21659V3.21659Z" stroke="#FCA004" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10 7.5V10.8333" stroke="#FCA004" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10 14.1667H10.0083" stroke="#FCA004" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className="start-alert">Start alert</div>
                <div className="time">10:32 am</div>

              </div>
              <div className="details-row2">
                <div className="alert-details">
                  Optiprime started with 2 generator configuration
                </div>
              </div>
            </div>
            <div className="right-close">

            </div>
          </div>
          <div className="alert-card">
            <div className="left-details">
              <div className="details-row1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M8.57465 3.21659L1.51632 14.9999C1.37079 15.2519 1.29379 15.5377 1.29298 15.8287C1.29216 16.1197 1.36756 16.4059 1.51167 16.6587C1.65579 16.9115 1.86359 17.1222 2.11441 17.2698C2.36523 17.4174 2.65032 17.4967 2.94132 17.4999H17.058C17.349 17.4967 17.6341 17.4174 17.8849 17.2698C18.1357 17.1222 18.3435 16.9115 18.4876 16.6587C18.6317 16.4059 18.7071 16.1197 18.7063 15.8287C18.7055 15.5377 18.6285 15.2519 18.483 14.9999L11.4247 3.21659C11.2761 2.97168 11.0669 2.76919 10.8173 2.62866C10.5677 2.48813 10.2861 2.41431 9.99965 2.41431C9.71321 2.41431 9.43159 2.48813 9.18199 2.62866C8.93238 2.76919 8.72321 2.97168 8.57465 3.21659V3.21659Z" stroke="#FCA004" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10 7.5V10.8333" stroke="#FCA004" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10 14.1667H10.0083" stroke="#FCA004" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className="start-alert">Start alert</div>
                <div className="time">10:32 am</div>

              </div>
              <div className="details-row2">
                <div className="alert-details">
                  Optiprime started with 2 generator configuration
                </div>
              </div>
            </div>
            <div className="right-close">

            </div>
          </div>
          <div className="alert-card">
            <div className="left-details">
              <div className="details-row1">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M8.57465 3.21659L1.51632 14.9999C1.37079 15.2519 1.29379 15.5377 1.29298 15.8287C1.29216 16.1197 1.36756 16.4059 1.51167 16.6587C1.65579 16.9115 1.86359 17.1222 2.11441 17.2698C2.36523 17.4174 2.65032 17.4967 2.94132 17.4999H17.058C17.349 17.4967 17.6341 17.4174 17.8849 17.2698C18.1357 17.1222 18.3435 16.9115 18.4876 16.6587C18.6317 16.4059 18.7071 16.1197 18.7063 15.8287C18.7055 15.5377 18.6285 15.2519 18.483 14.9999L11.4247 3.21659C11.2761 2.97168 11.0669 2.76919 10.8173 2.62866C10.5677 2.48813 10.2861 2.41431 9.99965 2.41431C9.71321 2.41431 9.43159 2.48813 9.18199 2.62866C8.93238 2.76919 8.72321 2.97168 8.57465 3.21659V3.21659Z" stroke="#FCA004" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10 7.5V10.8333" stroke="#FCA004" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M10 14.1667H10.0083" stroke="#FCA004" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <div className="start-alert">Start alert</div>
                <div className="time">10:32 am</div>

              </div>
              <div className="details-row2">
                <div className="alert-details">
                  Optiprime started with 2 generator configuration
                </div>
              </div>
            </div>
            <div className="right-close">

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Dashboard