import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import EditableTextfield from './EditableTextfield/EditableTextfield';
import ShadowDomCard from './ShadowDomCard/ShadowDomCard';
import './style.scss';

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
      <shadow-card>
        <img className="gallery-image" src="https://editorial.pxcrush.net/carsales/general/editorial/191117_vw_touareg_sc_04.jpg?width=480&amp;height=320&amp;pxc_method=crop"/>
      </shadow-card>
    </div>
  );
}