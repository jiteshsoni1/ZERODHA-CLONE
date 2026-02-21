import React from "react";

function Signup({ imageURL, productName, productDescription1 }) {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
        <div className="col-lg-7 col-md-6 text-center">
          <img
            src={imageURL}
            alt="Zerodha Ecosystem"
            className="img-fluid"
            style={{ maxWidth: "90%" }}
          />
        </div>
        <div className="col-lg-5 col-md-6 p-5">
          <h1 className="fs-2 fw-normal mb-3">{productName}</h1>
          <p className="text-muted mb-4 fs-5">{productDescription1}</p>
          <div style={{ maxWidth: "350px" }}>
            <div className="input-group mb-3 border rounded p-1">
              <span className="input-group-text bg-white border-0">
                <img
                  src="https://flagcdn.com/w20/in.png"
                  alt="India Flag"
                  className="me-2"
                />
                +91
              </span>
              <input
                type="text"
                className="form-control border-0 shadow-none"
                placeholder="Enter your mobile number"
              />
            </div>
            <button
              className="btn btn-primary w-100 py-2 fs-5 mb-4"
              style={{ backgroundColor: "#387ed1" }}
            >
              Get OTP
            </button>
            <p className="text-muted small mb-4">
              By proceeding, you agree to the Zerodha{" "}
              <a href="#" className="text-decoration-none">
                terms
              </a>{" "}
              &{" "}
              <a href="#" className="text-decoration-none">
                privacy policy
              </a>
            </p>
            <p className="small">
              Looking to open NRI account?{" "}
              <a href="#" className="text-decoration-none">
                Click here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
