import React from "react";
import "../styles/investment.css";
import { useNavigate } from "react-router-dom";
import * as XLSX from "xlsx";

const Investment = () => {
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const income = ["Rental Income", "Other"]; // Cambia los nombres de las filas según tu contexto

  const expenses = [
    "Advertising",
    "Cleaning and maintenance",
    "Insurance",
    "Legal and other professional fees",
    "Management fees",
    "Mortgage interest",
    "Pest Control",
    "Repairs",
    "Supplies",
    "Taxes",
    "Utilities",
    "Depreciation (estimate)"
  ];

  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/attributes"); // Redirect to dashboard after login
  };

  const exportToExcel = () => {
    // Data for income table
    const incomeData = [
      ["Income", ...months],
      ...income.map((row, rowIndex) => [
        row,
        ...months.map((_, colIndex) => (rowIndex + 1) * colIndex ** 2),
      ]),
      ["Total", ...months.map((_, colIndex) => (1 * colIndex ** 2) + (2 * colIndex ** 2))],
    ];

    // Data for expenses table
    const expensesData = [
      ["Expenses", ...months],
      ...expenses.map((row, rowIndex) => [
        row,
        ...months.map((_, colIndex) => (rowIndex + 1) * colIndex ** 2),
      ]),
      ["T. Expenses", ...months.map((_, colIndex) => (1 * colIndex ** 2) + (2 * colIndex ** 2))],
    ];

    // Workbook and sheets
    const workbook = XLSX.utils.book_new();
    const incomeSheet = XLSX.utils.aoa_to_sheet(incomeData);
    const expensesSheet = XLSX.utils.aoa_to_sheet(expensesData);

    XLSX.utils.book_append_sheet(workbook, incomeSheet, "Income");
    XLSX.utils.book_append_sheet(workbook, expensesSheet, "Expenses");

    // Export to Excel
    XLSX.writeFile(workbook, "investment_data.xlsx");
  };

  return (
    <div style={{ overflowX: "auto" }}>
      <div>
        <h1>
          ABC Property &nbsp;
          <small className="text-muted">Capital Management</small>
        </h1>
      </div>
      <div class="excel-button-container">
        <button class="btn btn-success mb-3" onClick="exportToExcel()">Export to Excel</button>
      </div>
      <table className="table">
        <thead className="table-dark">
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
            {months.map((_, colIndex) => (
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
                  {(1 * colIndex ** 2) + (2 * colIndex ** 2)}
                </div>
              </td>
            ))}
          </tr>
        </tbody>
      </table>

      <table className="table">
        <thead className="table-dark">
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
            {months.map((_, colIndex) => (
              <td
                key={colIndex}
                style={{
                  border: "1px solid black",
                  textAlign: "center",
                  padding: 0,
                }}
                className="total-row"
              >
                <div>
                  {(1 * colIndex ** 2) + (2 * colIndex ** 2)}
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
