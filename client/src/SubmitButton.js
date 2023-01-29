import React from 'react';
import './styles/SubmitButton.css';

const SubmitButton = ({handleSubmit}) => {
  return (
    <div id="holder">
      <div class="button" onClick={handleSubmit}>
        <p class="btnText">READY?</p>
        <div class="btnTwo">
          <p class="btnText2">VENT!</p>
        </div>
      </div>
    </div>
  );
};

export default SubmitButton;