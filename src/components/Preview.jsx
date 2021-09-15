import React, { useEffect, useState } from "react";

function Preview() {
  const [dataTable, setDataTable] = useState(null);

  useEffect(() => {
    fetch("/api/excel", { method: "GET" })
      .then((res) => res.json())
      .then((data) => setDataTable(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Preview data</h5>
        {!dataTable ? (
          "loading..."
        ) : (
          <table className="table table-striped table-sm mb-0">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Jenis Kelamin</th>
                <th scope="col">Umur</th>
                <th scope="col">MFT</th>
                <th scope="col">Pull Up</th>
                <th scope="col">Sit Up</th>
                <th scope="col">Back Up</th>
                <th scope="col">Push Up</th>
                <th scope="col">Turnamen</th>
              </tr>
            </thead>
            <tbody>
              {dataTable.t_body.map((item, index) => {
                return (
                  <tr key={index}>
                    <td scope="row">{index + 1}</td>
                    <td scope="row">{item[0]}</td>
                    <td scope="row">{item[1]}</td>
                    <td scope="row">{item[2]}</td>
                    <td scope="row">{item[3]}</td>
                    <td scope="row">{item[4]}</td>
                    <td scope="row">{item[5]}</td>
                    <td scope="row">{item[6]}</td>
                    <td scope="row">{item[7]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Preview;
