import React, { useState } from "react";

const mft = [
  "Sangat Buruk",
  "Buruk",
  "Cukup",
  "Baik",
  "Sempurna",
  "Sangat Sempurna",
];
const pushUp = [
  "Sangat Buruk",
  "Buruk",
  "Cukup",
  "Baik",
  "Sempurna",
  "Sangat Sempurna",
];
const backUp = [
  "Sangat Buruk",
  "Buruk",
  "Cukup",
  "Baik",
  "Sempurna",
  "Sangat Sempurna",
];
const pullUp = [
  "Sangat Buruk",
  "Buruk",
  "Cukup",
  "Baik",
  "Sempurna",
  "Sangat Sempurna",
];
const sitUp = [
  "Sangat Buruk",
  "Buruk",
  "Cukup",
  "Baik",
  "Sempurna",
  "Sangat Sempurna",
];
const jenisKelamin = ["Laki-Laki", "Perempuan"];
const umur = [16, 17, 18];

export default function FormUji(props) {
  const { onSubmit, formData, setFormData } = props;

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Form data uji</h5>
          <form onSubmit={onSubmit}>
            <div className="form align-items-end">
              <div className="col-md mb-2">
                <div className="form-group">
                  <label htmlFor="jenisKelamin">Jenis kelamin</label>
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
              <div className="col-md mb-2">
                <div className="form-group">
                  <label htmlFor="umur">Umur</label>
                  <select
                    className="form-control"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        umur: e.target.value,
                      });
                    }}
                  >
                    <option disabled defaultValue selected>
                      Pilih...
                    </option>
                    {umur.map((data) => (
                      <option key={data} value={data}>
                        {data}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md mb-2">
                <div className="form-group">
                  <label htmlFor="mft">MFT</label>
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
                  <label htmlFor="pushUp">Push up</label>
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
                  <label htmlFor="backUp">Back up</label>
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
                  <label htmlFor="pullUp">Pull up</label>
                  <select
                    className="form-control"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        pullUp: e.target.value,
                      });
                    }}
                  >
                    <option disabled defaultValue selected>
                      Pilih...
                    </option>
                    {pullUp.map((data) => (
                      <option key={data} value={data}>
                        {data}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md mb-2">
                <div className="form-group">
                  <label htmlFor="sitUp">Sit up</label>
                  <select
                    className="form-control"
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        sitUp: e.target.value,
                      });
                    }}
                  >
                    <option disabled defaultValue selected>
                      Pilih...
                    </option>
                    {sitUp.map((data) => (
                      <option key={data} value={data}>
                        {data}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col-md-auto mt-2">
                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
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
