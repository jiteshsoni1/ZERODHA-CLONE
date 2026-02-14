import React from "react";

function Team() {
  return (
    <div className="container" style={{ maxWidth: "1000px" }}>
      <div className="row p-3 mt-5 mb-5  border-top">
        <h1 className=" text-center mt-5 ">People</h1>
      </div>
      <div
        className="row p-3 text-muted fs-6"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="/media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <a href="#">Homepage</a> / <a href="#">TradingQnA</a> /{" "}
            <a href="#">Twitter</a>
          </p>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col">
          <img
            src="/media/images/Nikhil.jpg"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h5>Nikhil Kamath</h5>
          <p>Co-founder & CFO</p>
        </div>
        <div className="col">
          <img
            src="/media/images/Kailash.jpg"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h5>Dr. Kailash Nadh</h5>
          <p>CTO</p>
        </div>
        <div className="col">
          <img
            src="/media/images/Venu.jpg"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h5>Venu Madhav</h5>
          <p>COO</p>
        </div>
        <div className="row mt-5">
        <div className="col">
          <img
            src="/media/images/Hanan.jpg"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h5>Hanan Delvi</h5>
          <p>CCO</p>
        </div>
        <div className="col">
          <img
            src="/media/images/Seema.jpg"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h5>Seema Patil</h5>
          <p>Director</p>
        </div>
        <div className="col">
          <img
            src="/media/images/Karthik.jpg"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h5>Karthik Rangappa</h5>
          <p>Chief of Education</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
