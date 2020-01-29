import styleText from './style.scss';

const componentSheet = new CSSStyleSheet();
componentSheet.replaceSync(styleText);

class ShadowDomCard extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

    // Attach a shadow root to <fancy-tabs>.
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.adoptedStyleSheets = [componentSheet];
    shadowRoot.innerHTML = `
      <div class="gallery">
        <slot></slot>
      </div>
      <div class="content">
        <div class="">
          <div class="image-count"></div>
          <div class="video-count"></div>
        </div>
        <div class="heading">Volkswagen Touareg 2020 Long-term Test</div>
        <div class="summary">This is some summary text with themed background colour</div>
      </div>
    `;

    // experiment: try getting child elements defined in the light dom and injecting them where required
    // in the shadow dom
  }

  // properties required
  // imageCount, videoCount, showVideoIcon
}

customElements.define('shadow-card', ShadowDomCard);

export default ShadowDomCard;