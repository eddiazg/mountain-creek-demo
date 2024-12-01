import React from "react";
import "../styles/investment.css";
import { useNavigate } from "react-router-dom";

const Investment = () => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const income = ["Rental Income", "Other"]; // Cambia los nombres de las filas según tu contexto

  const expenses = [
    "Advertising"
    ,"Cleaning and maintenance"
    ,"Insurance"
    ,"Legal and other professional fees"
    ,"Management fees"
    ,"Mortgage interest"
    ,"Pest Control"
    ,"Repairs"
    ,"Supplies"
    ,"Taxes"
    ,"Utilities"
    ,"Depreciation (estimate)"
  ];

// Custom hook for navigation
const navigate = useNavigate();

const handleOnClick = () => {
  navigate("/attributes"); // Redirect to dashboard after login
}

  return (
    <div style={{ overflowX: "auto" }}>
      <div>
        <h1>
          ABC Property &nbsp;
          <small class="text-muted">Capital Management</small>
        </h1>
      </div>
      <table class="table">
  <thead class="table-dark">
    <tr>
      <th scope="col">Income</th>
      {months.map((month, index) => (
        <th scope="col" key={index}>{month}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    {income.map((fila, rowIndex) => (
            <tr key={rowIndex}>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  backgroundColor: "#f4f4f4",
                  textAlign: "left",
                }}
              >
                {fila}
              </th>
              {months.map((_, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    border: "1px solid black",
                    textAlign: "center",
                    padding: 0,
                    cursor: "pointer"
                  }}
                  onClick={() => handleOnClick()}
                >
                    <div>{(rowIndex + 1) * colIndex ** 2}</div>
                </td>
              ))}
            </tr>
          ))}
    <tr>
      <th
        style={{
          border: "1px solid black",
          padding: "8px",
          backgroundColor: "#f4f4f4",
          textAlign: "left",
        }}
      >
        Total
      </th>
      { 
        months.map((_, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    border: "1px solid black",
                    textAlign: "center",
                    padding: 0,
                    cursor: "pointer"
                  }}
                  className="total-row"
                >
                    <div>
                      {
                        (1 * colIndex ** 2) + (2 * colIndex ** 2)
                      }
                    </div>
                </td>
        ))}
    </tr>
  </tbody>
</table>

<table class="table">
  <thead class="table-dark">
    <tr>
      <th scope="col">Expenses</th>
      {months.map((month, index) => (
        <th scope="col" key={index}>{month}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    {expenses.map((fila, rowIndex) => (
            <tr key={rowIndex}>
              <th
                style={{
                  border: "1px solid black",
                  padding: "8px",
                  backgroundColor: "#f4f4f4",
                  textAlign: "left",
                }}
              >
                {fila}
              </th>
              {months.map((_, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    border: "1px solid black",
                    textAlign: "center",
                    padding: 0,
                    cursor: "pointer"
                  }}
                >
                    <div>{(rowIndex + 1) * colIndex ** 2}</div>
                </td>
              ))}
            </tr>
          ))}
    <tr>
      <th
        style={{
          border: "1px solid black",
          padding: "8px",
          backgroundColor: "#f4f4f4",
          textAlign: "left",
        }}
      >
        T. Expenses
      </th>
      { 
        months.map((_, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    border: "1px solid black",
                    textAlign: "center",
                    padding: 0,
                    cursor: "pointer"
                  }}
                  className="total-row"
                >
                    <div>
                      {
                        (1 * colIndex ** 2) + (2 * colIndex ** 2)
                      }
                    </div>
                </td>
        ))}
    </tr>
  </tbody>
</table>
<table class="table">
  <thead class="table-dark">
    <tr>
      <th scope="col">Expenses</th>
      {months.map((month, index) => (
        <th scope="col" key={index}>{month}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    <tr>
      <th
        style={{
          border: "1px solid black",
          padding: "8px",
          backgroundColor: "#f4f4f4",
          textAlign: "left",
        }}
      >
        T. Expenses
      </th>
      { 
        months.map((_, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    border: "1px solid black",
                    textAlign: "center",
                    padding: 0,
                    cursor: "pointer"
                  }}
                  className="total-row"
                >
                    <div>
                      {
                        (1 * colIndex ** 2) + (2 * colIndex ** 2)
                      }
                    </div>
                </td>
        ))}
    </tr>
  </tbody>
</table>

    </div>
  );
};

export default Investment;
