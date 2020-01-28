import React, {useState} from 'react';
import ReactDOM from 'react-dom';

// bootstrap the react application but only after document load (we need the container element to exist)
window.onload = function (){
  const wrapper = document.getElementById("app-container");
  wrapper ? ReactDOM.render(<AppComponent />, wrapper) : false;
};

const AppComponent = (props) => {
  let [textVal, setTextVal] = useState('This is the text to display');

  return (
    <div>
      <editable-textfield text={textVal}></editable-textfield>
    </div>
  );
}