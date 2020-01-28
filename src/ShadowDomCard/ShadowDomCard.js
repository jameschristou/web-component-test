class ShadowDomCard extends HTMLElement {
  constructor() {
    super(); // always call super() first in the constructor.

    // Attach a shadow root to <fancy-tabs>.
    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
      <style>
        :host{
          display:block;
          border: 1px solid lightgray;
          border-radius: 3px;
          max-width:400px;
          width:100%;
          background-color: lightgray;
        }

        .gallery-image{
          width:100%;
        }
      </style>
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
  }

  // properties required
  // imageCount, videoCount, showVideoIcon
}

customElements.define('shadow-card', ShadowDomCard);

export default ShadowDomCard;