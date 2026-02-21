import React from "react";

function Faq() {
  return (
    <div
      class="accordion m-2"
      id="accordionExample"
      style={{ paddingLeft: "15rem", paddingRight: "15rem" }}
    >
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingOne">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            What is a Zerodha account
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          aria-labelledby="headingOne"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            A Zerodha account is a combined demat and trading account that
            allows investors to buy, sell, and hold securities digitally.
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingTwo">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            What documents are required to open a demat account?
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          aria-labelledby="headingTwo"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            PAN number Cancelled cheque or bank account statement (To link your
            bank account)
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingThree">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Is Zerodha account opening free?
          </button>
        </h2>
        <div
          id="collapseThree"
          class="accordion-collapse collapse"
          aria-labelledby="headingThree"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">Yes, It is completely free.</div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFour">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            Are there any maintenance charges for a demat account?
          </button>
        </h2>
        <div
          id="collapseFour"
          class="accordion-collapse collapse"
          aria-labelledby="headingFour"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            The account maintenance charges is applicable based on the account
            type. For Basic Services Demat Account: Zero charges if the holding
            value is less than ₹4,00,000.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingFive">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFive"
            aria-expanded="false"
            aria-controls="collapseFive"
          >
            Can I open a demat account without a bank account?
          </button>
        </h2>
        <div
          id="collapseFive"
          class="accordion-collapse collapse"
          aria-labelledby="headingFive"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            To open a demat account, you must have a bank account in your name.
            If UPI verification is completed successfully, no proof of bank is
            needed. However, if bank verification fails, you'll need to provide
            either a cancelled cheque or a bank statement to link your bank
            account to Zerodha.
          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="headingSix">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseSix"
            aria-expanded="false"
            aria-controls="collapseSix"
          >
            What is a Basic Services Demat Account (BSDA)?
          </button>
        </h2>
        <div
          id="collapseSix"
          class="accordion-collapse collapse"
          aria-labelledby="headingSix"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            BSDA is a demat account designed for retail investors with smaller
            holdings. It automatically applies if you have only one demat
            account per PAN and holdings of up to ₹10 lakhs in it. You will not
            be charged any Account Maintenance Charge (AMC) for holdings up to
            ₹4 lakhs value, and only ₹25/quarter if holdings are between ₹4
            lakhs and ₹10 lakhs.
          </div>
        </div>
      </div>
      <div className="container  mb-5">
        <div className="text-center mt-5 p-5">
          <h1 className="fs-3">Open a Zerodha account</h1>
          <h3 className="text-muted mt-3 fs-4">
          Simple and intuitive apps · ₹0 for investments · ₹20 for intraday and F&O trades.
          </h3>
        </div>
        <div className="text-center">
          <button className="btn btn-primary px-5 py-2 fs-5">Signup for free</button>
        </div>
      </div>
    </div>
  );
}

export default Faq;
