import React from "react";

function Universe() {
  return (
    <div className="container mt-5 p-5">
      
      {/* Heading Section */}
      <div className="text-center mb-6 ">
        <h1 className="fw-bold">The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* Logo Grid */}
      <div className="row text-center p-5">
        <div className="col-6 col-md-4 mb-5">
          <img src="media/images/zerodhaFundhouse.png" className="img-fluid w-75" alt="" />
          <p className="small text-muted mt-2">Thematic investment platform</p>
        </div>

        <div className="col-6 col-md-4 mb-5">
          <img src="media/images/sensibullLogo.svg" className="img-fluid w-75" alt="" />
          <p className="small text-muted mt-2">Thematic investment platform</p>
        </div>

        <div className="col-6 col-md-4 mb-5">
          <img src="media/images/tijori.svg" className="img-fluid w-75" alt="" />
          <p className="small text-muted mt-2">Thematic investment platform</p>
        </div>

        <div className="col-6 col-md-4 mb-5">
          <img src="media/images/streakLogo.png" className="img-fluid w-75" alt="" />
          <p className="small text-muted mt-2">Thematic investment platform</p>
        </div>

        <div className="col-6 col-md-4 mb-5">
          <img src="media/images/smallcaseLogo.png" className="img-fluid w-75" alt="" />
          <p className="small text-muted mt-2">Thematic investment platform</p>
        </div>

        <div className="col-6 col-md-4 mb-5">
          <img src="media/images/dittoLogo.png" className="img-fluid w-75" alt="" />
          <p className="small text-muted mt-2">Thematic investment platform</p>
        </div>
      </div>

      {/* Button Section */}
      <div className="text-center">
        <button className="btn btn-primary px-5 py-2 fs-5">
          Signup Now
        </button>
      </div>

    </div>
  );
}

export default Universe;
