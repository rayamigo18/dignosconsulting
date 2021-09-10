import React from "react";
import "../../App.css";

const imgStyle = {
  height: '100vh',
  width: '100%',
  scrolling: 'no',
  frameborder: '0'
};
export default function Application() {
  return (
    <div className="application-container">
      <h1 className="application">DEL Application Form</h1>
      <div className="application-info">
      <iframe title="DEL Finance Application" class="resizable-iframe" style={imgStyle}  src="https://portal.bizcore.com.au/(apply:application-form)?apiKey=0ffce726-c7b4-4e2b-87a8-cfccd794b779&apiKeyId=0c5c4fa8-69a6-413a-8e05-017f495cd546&formId=71ad8903-b711-4873-9aa1-81410722ad56"></iframe>
      </div>
    </div>
  );
}
