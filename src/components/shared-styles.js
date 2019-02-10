import { css } from 'lit-element';

export const SharedStyles = css`
  :host {
    display: block;
    box-sizing: border-box;
  }

  section {
    padding: 24px;
    background: var(--app-section-odd-color);
  }

  section > * {
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
  }

  section:nth-of-type(even) {
    background: var(--app-section-even-color);
  }

  h2 {
    font-size: 2rem;
    text-align: center;
    color: var(--app-dark-text-color);
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  h4 {
    font-size: 1.25rem;
    font-weight: 400;
  }

  h5 {
    font-size: 1.125rem;
    font-weight: 400;
  }

  .error {
    display: none;
    opacity: 0;
    color: orange;
    font-weight: 600;
  }

  @media (min-width: 460px) {
    h2 {
      font-size: 36px;
    }
  }

  .circle {
    display: block;
    width: 64px;
    height: 64px;
    margin: 0 auto;
    text-align: center;
    border-radius: 50%;
    background: var(--app-primary-color);
    color: var(--app-light-text-color);
    font-size: 30px;
    line-height: 64px;
  }

  .hidden {
    display: none;
  }
`;
