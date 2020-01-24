class HelloWorld extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h1>Hello, World!</h1><slot></slot><p>More of my component</p>`;
  }
}

customElements.define('hello-world', HelloWorld);