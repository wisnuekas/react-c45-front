import React, { useState } from "react";

export default function Input() {
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [selectedFile, setSelectedFile] = useState();
    const [previewName, setPreviewName] = useState("Pilih file...");

    function submitForm(e) {
        e.preventDefault();

        const file = selectedFile[0];
        const formData = new FormData();
        formData.append("file", file);

        console.log(formData);

        fetch("/api/upload", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json",
            },
        })
            .then((res) => {
                if (!res.ok) {
                    setSuccess(false);
                    setError(true);
                    throw new Error(res.statusText);
                }
                res.json();
            })
            .then((data) => {
                setSuccess(true);
                setError(false);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row mb-4">
                    <h1 className="mx-auto text-center text-capitalize">
                        <span className="d-lg-block">
                            Aplikasi prediksi kesiapan fisik atlit basket{" "}
                        </span>
                        <span className="d-lg-block">
                            Menggunakan algoritma C4.5
                        </span>
                    </h1>
                </div>
                <div className="row">
                    <div className="mx-auto">
                        <form onSubmit={submitForm}>
                            <div className="form-group">
                                <label>
                                    Pilih data training yang akan digunakan:
                                </label>
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        className="custom-file-input"
                                        id="customFile"
                                        name="file"
                                        required
                                        onChange={(e) => {
                                            setSelectedFile(e.target.files);
                                            setPreviewName(
                                                e.target.files[0].name
                                            );
                                        }}
                                    ></input>
                                    <label className="custom-file-label">
                                        {previewName}
                                    </label>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                            >
                                Upload
                            </button>
                        </form>
                        {success && (
                            <div
                                className="alert alert-success mt-2"
                                role="alert"
                            >
                                Data berhasil di upload.
                            </div>
                        )}
                        {error && (
                            <div
                                className="alert alert-danger mt-2"
                                role="alert"
                            >
                                Kesalahan. Silahkan cek kembali.
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
