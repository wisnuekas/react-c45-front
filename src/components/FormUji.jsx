import React, { useState } from "react";

const mft = ["Kurang Baik", "Baik", "Baik Sekali"];
const pushUp = ["Kurang Baik", "Baik", "Baik Sekali", "Sempurna"];
const backUp = ["Kurang Baik", "Baik", "Sedang", "Baik Sekali"];
const jenisKelamin = ["Laki-Laki", "Perempuan"];

export default function FormUji(props) {
    const { onSubmit, formData, setFormData } = props;

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Form data uji</h5>
                    <form onSubmit={onSubmit}>
                        <div className="form-row align-items-end">
                            <div className="col-md mb-2">
                                <div className="form-group">
                                    <label htmlFor="sex">MFT</label>
                                    <select
                                        className="form-control"
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                mft: e.target.value,
                                            });
                                        }}
                                    >
                                        <option disabled defaultValue selected>
                                            Pilih...
                                        </option>
                                        {mft.map((data) => (
                                            <option key={data} value={data}>
                                                {data}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md mb-2">
                                <div className="form-group">
                                    <label htmlFor="sex">Push up</label>
                                    <select
                                        className="form-control"
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                pushUp: e.target.value,
                                            });
                                        }}
                                    >
                                        <option disabled defaultValue selected>
                                            Pilih...
                                        </option>
                                        {pushUp.map((data) => (
                                            <option key={data} value={data}>
                                                {data}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md mb-2">
                                <div className="form-group">
                                    <label htmlFor="sex">Back up</label>
                                    <select
                                        className="form-control"
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                backUp: e.target.value,
                                            });
                                        }}
                                    >
                                        <option disabled defaultValue selected>
                                            Pilih...
                                        </option>
                                        {backUp.map((data) => (
                                            <option key={data} value={data}>
                                                {data}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md mb-2">
                                <div className="form-group">
                                    <label htmlFor="sex">Jenis kelamin</label>
                                    <select
                                        className="form-control"
                                        onChange={(e) => {
                                            setFormData({
                                                ...formData,
                                                jenisKelamin: e.target.value,
                                            });
                                        }}
                                    >
                                        <option disabled defaultValue selected>
                                            Pilih...
                                        </option>
                                        {jenisKelamin.map((data) => (
                                            <option key={data} value={data}>
                                                {data}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="col-md-auto mb-2">
                                <div className="form-group">
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
