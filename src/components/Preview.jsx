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
                                <th scope="col">MFT</th>
                                <th scope="col">Push up</th>
                                <th scope="col">Back up</th>
                                <th scope="col">Jenis kelamin</th>
                                <th scope="col">Layak turnamen</th>
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
