class EditableTextfield extends HTMLElement {
  static get observedAttributes() {
    return ['disabled'];
  }
  
  attributeChangedCallback(attrName, oldValue, newValue) {
    if (newValue !== oldValue) {
      this[attrName] = this.hasAttribute(attrName);
    }
  }

  get disabled() {
    return this.hasAttribute('disabled');
  }
  
  set disabled(isDisabled) {
    if (isDisabled) {
      this.setAttribute('disabled', true);
      this.classList.toggle('disabled', true);
    } else {
      this.removeAttribute('disabled');
      this.classList.toggle('open', false);
    }
  }

  textfieldClickHandler(event){
    console.log("click handler fired");
  }

  connectedCallback() {
    el = document.createElement('div');
    el.innerHTML = 'click me';
    el.className = "editableTextfield";
    el.setAttribute("contenteditable", true);
    el.onclick = () => {
      var el = this.querySelector(".editableTextfieldActionsContainer");
      el.className = el.className.replace("hidden", "").trim();
      console.log('click event');
    }
    this.appendChild(el);

    var el = document.createElement('div');
    el.className = "editableTextfieldActionsContainer hidden";

    var child = document.createElement('div');
    child.className = "editableTextfieldActions";

    var btn = document.createElement('button');
    btn.className = "editableTextfieldAction";
    btn.onclick = () => {
      var el = this.querySelector(".editableTextfieldActionsContainer");
      el.className += " hidden";
      console.log('save clicked');
    }
    btn.innerHTML = `
      <svg width="24" height="24" viewBox="1 -2 24 24" focusable="false" role="presentation">
        <path d="M6.735 12.322a1 1 0 0 0-1.47 1.356l3.612 3.919c.537.526 1.337.526 1.834.03l.364-.359a2335.638 2335.638 0 0 0 3.939-3.883l.04-.04a492.598 492.598 0 0 0 3.658-3.643 1 1 0 0 0-1.424-1.404 518.42 518.42 0 0 1-3.64 3.625l-.04.04a2049.114 2049.114 0 0 1-3.775 3.722l-3.098-3.363z"></path>
      </svg>`;
    child.appendChild(btn);

    btn = document.createElement('button');
    btn.className = "editableTextfieldAction";
    btn.onclick = () => {
      var el = this.querySelector(".editableTextfieldActionsContainer");
      el.className += " hidden";
      console.log('cancel clicked');
    }
    btn.innerHTML = `
      <svg width="24" height="24" viewBox="1 -2 24 24" focusable="false" role="presentation">
        <path d="M12 10.586L6.707 5.293a1 1 0 0 0-1.414 1.414L10.586 12l-5.293 5.293a1 1 0 0 0 1.414 1.414L12 13.414l5.293 5.293a1 1 0 0 0 1.414-1.414L13.414 12l5.293-5.293a1 1 0 1 0-1.414-1.414L12 10.586z"></path>
      </svg>`;
    child.appendChild(btn);

    el.appendChild(child);
    this.appendChild(el);
  }
}

customElements.define('editable-textfield', EditableTextfield);