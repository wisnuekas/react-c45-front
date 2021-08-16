import React, { useEffect, useState } from "react";

function ResultTree() {
    const [printTree, setPrintTree] = useState(null);

    useEffect(() => {
        fetch("/api/tree", { method: "GET" })
            .then((res) => res.json())
            .then((result) => {
                setPrintTree(result);
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Pohon hasil C4.5</h5>
                {!printTree ? (
                    "loading..."
                ) : (
                    <div>
                        <pre>{printTree.message}</pre>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ResultTree;
