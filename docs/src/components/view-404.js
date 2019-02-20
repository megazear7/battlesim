import { html, PageViewElement, SharedStyles } from './battle-sim.js';

class View404 extends PageViewElement {
  static get styles() {
    return [SharedStyles];
  }

  render() {
    return html`
      <section>
        <h2>Oops! You hit a 404</h2>
        <p>
          The page you're looking for doesn't seem to exist. Head back
          <a href="/">home</a> and try again?
        </p>
      </section>
    `;
  }

}

window.customElements.define('view-404', View404);