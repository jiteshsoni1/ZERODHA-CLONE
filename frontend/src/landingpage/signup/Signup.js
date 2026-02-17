import React from "react";

function Signup() {
  return (
    <section className="py-5" style={{ backgroundColor: "#f7f7f7" }}>
      <div className="container">
        
        <div className="text-center mb-5">
          <h2 className="fw-normal">
            Investment options with Zerodha demat account
          </h2>
        </div>

        {/* Row 1 */}
        <div className="row justify-content-center mb-5">
          {/* Stocks */}
          <div className="col-md-5 d-flex align-items-start mb-4">
            <img
              src="media/images/stocks-acop.svg"
              alt=""
              className="me-4"
              style={{ width: "60px" }}
            />
            <div>
              <h5>Stocks</h5>
              <p className="text-muted mb-0">
                Invest in all exchange-listed securities
              </p>
            </div>
          </div>

          {/* Mutual Funds */}
          <div className="col-md-5 d-flex align-items-start mb-4">
            <img
              src="media/images/mf-acop.svg"
              alt=""
              className="me-4"
              style={{ width: "60px" }}
            />
            <div>
              <h5>Mutual funds</h5>
              <p className="text-muted mb-0">
                Invest in commission-free direct mutual funds
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          {/* IPO */}
          <div className="col-md-5 d-flex align-items-start mb-4">
            <img
              src="media/images/ipo-acop.svg"
              alt=""
              className="me-4"
              style={{ width: "60px" }}
            />
            <div>
              <h5>IPO</h5>
              <p className="text-muted mb-0">
                Apply to the latest IPOs instantly via UPI
              </p>
            </div>
          </div>

          {/* Futures & Options */}
          <div className="col-md-5 d-flex align-items-start mb-4">
            <img
              src="media/images/fo-acop.svg"
              alt=""
              className="me-4"
              style={{ width: "60px" }}
            />
            <div>
              <h5>Futures & options</h5>
              <p className="text-muted mb-0">
                Hedge and mitigate market risk through simplified F&O trading
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="btn btn-primary px-5 py-2">
            Explore Investments
          </button>
        </div>
      </div>
    </section>
  );
}

export default Signup;
