import React from "react";

function Benifits() {
  return (
    <div className="container py-5" style={{ padding: "6rem" }}>
      <div className="row align-items-center">

        {/* LEFT SIDE IMAGE */}
        <div className="col-md-6 text-center mb-4">
          <img
            src="media/images/acop-benefits.svg"
            alt="Ecosystem"
            className="img-fluid"
            style={{ width: "90%" }}
          />
         <h2>Benefits of opening a Zerodha demat account</h2>
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="col-md-6">
          <h1 className="fs-2 mb-4">Trust with confidence</h1>

          <h2 className="fs-5">Customer-first always</h2>
          <p className="text-muted">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.
          </p>

          <h2 className="fs-5">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h2 className="fs-5">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+ fintech
            startups offer you tailored services specific to your needs.
          </p>

          <h2 className="fs-5">Do better with money</h2>
          <p className="text-muted">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Benifits;
