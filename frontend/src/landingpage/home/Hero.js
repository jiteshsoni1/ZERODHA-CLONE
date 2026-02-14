import React from "react";

function Hero() {
  return (
    <div className="p-2 mb-5" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div className="row text-center">
        <img
          src="media/images/homeHero.png"
          alt="Online investing platform banner"
          className="mb-5 mt-5"
        />
        <h1 className="mt-2 fs-2 ">Invest in everything</h1>
        <p className="fs-4">
          Online platform to invest in stocks, derivatives, mutual funds, ETFs,
          bonds, and more.
        </p>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 opacity-75"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
