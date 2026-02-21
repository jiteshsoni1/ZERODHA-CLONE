import React from "react";

function Explore() {
  return (
    <section className="py-2">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-normal">Explore different account types</h2>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-md-3 d-flex align-items-start p-3 mx-5" style={{border: '1px solid black'}}>
            <div>
              <h5>Individual Account</h5>
              <p className="text-muted mt-5">
                Invest in equity, mutual funds and derivatives
              </p>
            </div>
          </div>
          <div className="col-md-3 d-flex align-items-start p-3 mx-5 "style={{border: '1px solid black'}}>
            <div>
              <h5>HUF account opening HUF Account</h5>
              <p className="text-muted mt-5">
                Make tax-efficient investments for your family
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mb-5">
          <div className="col-md-3 d-flex align-items-start p-3 mx-5 "style={{border: '1px solid black'}}>
            <div>
              <h5>Minor Account</h5>
              <p className="text-muted mt-5">
                Teach your little ones about money & invest for their future
                with them
              </p>
            </div>
          </div>
          <div className="col-md-3 d-flex align-items-start p-3 mx-5 "style={{border: '1px solid black'}}>
            <div>
              <h5> Corporate / LLP/ Partnership</h5>
              <p className="text-muted mt-5">
                Manage your business surplus and investments easily
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explore;
