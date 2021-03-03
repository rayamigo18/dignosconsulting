import React from "react";
import "../../App.css";

export default function Travel() {
  return (
    <div className="travel-container">
      <h1 className="travel">Terms and Privacy</h1>
      <div className="travel-info">
        <h2>Privacy</h2>
        <p>
          We abide by the Australian Privacy Principles (APPs) and we only
          collect personal information for the purpose of preparing your loan
          documents. We partner with third party vendors and may share personal
          information for the purpose of setting up direct debits. We do not
          share personal information for reasons other than specified in the
          agreement. Once the loan has been repaid, we do not store any of your
          personal information. Should you require additional funding, fresh
          application and documents will need to be submitted.
        </p>

        <h2>Terms and Conditions</h2>
        <p>
          Del Finance utilises private capital from its shareholders. We do not
          perform credit assessment and by approving the loan, we assume the
          risk of the probability of default from the customers. DEL Finance
          reserves the right to decline any loan application that it deems too
          risky and not suitable for our lending products.
        </p>
      </div>
    </div>
  );
}
