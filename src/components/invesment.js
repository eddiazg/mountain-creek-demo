import React from "react";
import "../styles/investment.css";

const Investment = () => {
  const meses = [
    "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
    "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
  ];
  const filas = ["Fila 1"]; // Cambia los nombres de las filas según tu contexto

  return (
    <div style={{ overflowX: "auto" }}>
      <table class="table">
  <thead class="table-primary">
    <tr>
      <th scope="col">X</th>
      {meses.map((mes, index) => (
        <th scope="col" key={index}>{mes}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    {filas.map((fila, rowIndex) => (
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
              {meses.map((_, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    border: "1px solid black",
                    textAlign: "center",
                    padding: 0,
                    cursor: "pointer"
                  }}
                  onClick={() => console.log('asdas')}
                >
                    <div>{colIndex ** 2}</div>
                </td>
              ))}
            </tr>
          ))}
  </tbody>
</table>

<table class="table">
  <thead class="table-secondary">
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
    </div>
  );
};

export default Investment;
