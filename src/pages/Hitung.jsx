import React, { useRef, useState } from "react";
import FormUji from "../components/FormUji";
import Result from "../components/Result";

export default function Hitung() {
  const [formData, setFormData] = useState({
    mft: null,
    pushUp: null,
    backUp: null,
    jenisKelamin: null,
    umur: null,
    sitUp: null,
    pullUp: null,
  });

  const [hasil, setHasil] = useState("");
  const result = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    result.current.scrollIntoView();
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
        console.log(data.message);
        setHasil(data.message);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container my-4">
      <div className="row">
        <div className="col">
          <FormUji
            onSubmit={onSubmit}
            formData={formData}
            setFormData={setFormData}
          />
        </div>
        <div className="col" ref={result}>
          <Result hasil={hasil} />
        </div>
      </div>
    </div>
  );
}
