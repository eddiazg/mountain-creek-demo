import React, { useState, useEffect } from 'react';
import '../styles/attributes.css';

const Attributes = () => {
  // State to store the data
  const [data, setData] = useState([]);

  // Fetch the JSON file when the component mounts
  useEffect(() => {
    fetch('unitAttributes.json')  // Adjust the path if necessary
      .then((response) => response.json())  // Parse JSON
      .then((jsonData) => setData(jsonData))  // Store the data in the state
      .catch((error) => console.error('Error loading JSON file:', error));
  }, []);

  // Render the table with the data
  return (
    <div>
      <h1>Rental Unit Information</h1>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Unit Name</th>
            <th>Bedrooms</th>
            <th>Baths</th>
            <th>Square Feet</th>
            <th>Availability</th>
            <th>Current Rent</th>
            <th>Lease Length</th>
            <th>Months Left on Lease</th>
            <th>Cleaning and Maintenance</th>
            <th>Insurance</th>
            <th>Repairs</th>
            <th>Supplies</th>
            <th>Taxes</th>
            <th>Utilities</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.unitName}</td>
              <td>{item.bedrooms}</td>
              <td>{item.baths}</td>
              <td>{item.squareFeet}</td>
              <td>{item.availability}</td>
              <td>{item.currentRent}</td>
              <td>{item.leaseLength}</td>
              <td>{item.monthsLeftOnLease}</td>
              <td>{item.cleaningAndMaintenance}</td>
              <td>{item.insurance}</td>
              <td>{item.repairs}</td>
              <td>{item.supplies}</td>
              <td>{item.taxes}</td>
              <td>{item.utilities}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Attributes;
