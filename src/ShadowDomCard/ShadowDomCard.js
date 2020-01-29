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
        <img class="gallery-image" src="https://editorial.pxcrush.net/carsales/general/editorial/191117_vw_touareg_sc_04.jpg?width=480&amp;height=320&amp;pxc_method=crop"/>
      </div>
      <div class="content">
        <div class="">
          <div class="image-count"></div>
          <div class="video-count"></div>
        </div>
        <div class="heading">Volkswagen Touareg 2020 Long-term Test</div>
        <div class="summary">This is some summary text</div>
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