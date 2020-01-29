import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import EditableTextfield from './EditableTextfield/EditableTextfield';
import Card from './ShadowDomComponents/Card/Card';
import Carousel from './ShadowDomComponents/Carousel/Carousel';
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
      <my-carousel class="test-carousel">
        <my-card>
          <img className="gallery-image" src="https://editorial.pxcrush.net/carsales/general/editorial/191117_vw_touareg_sc_04.jpg?width=480&amp;height=320&amp;pxc_method=crop"/>
        </my-card>
        <my-card>
          <img className="gallery-image" src="https://editorial.pxcrush.net/carsales/general/editorial/mini_cooper_se_012020_00199.jpg?width=480&amp;height=320&amp;pxc_method=crop"/>
        </my-card>
      </my-carousel>
    </div>
  );
}