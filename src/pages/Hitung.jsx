import React, { useState } from "react";
import FormUji from "../components/FormUji";
import Result from "../components/Result";

export default function Hitung() {
    const [formData, setFormData] = useState({
        mft: null,
        pushUp: null,
        backUp: null,
        jenisKelamin: null,
    });

    const [hasil, setHasil] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        fetch("/api/calculate", {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setHasil(data.message);
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-auto">
                    <FormUji
                        onSubmit={onSubmit}
                        formData={formData}
                        setFormData={setFormData}
                    />
                </div>
                <div className="col">
                    <Result hasil={hasil} />
                </div>
            </div>
        </div>
    );
}
