import React from "react";

export default function Result({ hasil }) {
    let result;

    switch (hasil) {
        case "Layak":
            result = <h1 className="text-success mt-4">Layak Turnament</h1>;
            break;
        case "Kurang Layak":
            result = <h1 className="text-danger mt-4">Kurang Layak</h1>;
            break;
        case "unclassified":
            result = <h1 className="mt-4">Klasifikasi tidak ditemukan</h1>;
            break;
        default:
            break;
    }

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Hasil uji</h5>

                {result}
            </div>
        </div>
    );
}
