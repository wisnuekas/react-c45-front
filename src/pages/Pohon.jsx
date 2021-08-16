import React from "react";
import Preview from "../components/Preview";
import ResultTree from "../components/ResultTree";

export default function Pohon() {
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-auto mb-4">
                    <ResultTree />
                </div>
                <div className="col">
                    <Preview />
                </div>
            </div>
        </div>
    );
}
