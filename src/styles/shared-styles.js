import { css } from 'lit-element';

export const SharedStyles = css`
  :host {
    display: block;
    box-sizing: border-box;
  }

  section {
    padding: 1rem;
    background: var(--app-section-odd-color);
  }

  section > * {
    max-width: 600px;
    margin-right: auto;
    margin-left: auto;
  }

  button {
    margin-bottom: 1rem;
  }

  battle-sim-selector {
    margin-bottom: 1rem;
  }

  section:nth-of-type(even) {
    background: var(--app-section-even-color);
  }

  h2 {
    font-size: 2rem;
    font-weight: 500;
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
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  h6 {
    font-size: 0.9rem;
    font-weight: 600;
    color: grey;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.75rem;
  }

  small {
    font-size: 0.8rem;
    line-height: 1rem;
  }

  img {
    max-width: 100%;
  }

  hr {
    border: 0.5px solid var(--app-secondary-color);
  }

  .error {
  }

  input[type="text"], input[type="number"] {
    outline-color: var(--app-primary-color);
    padding: 1rem;
    border: none;
    width: 100%;
    font-size: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  select {
    outline-color: var(--app-primary-color);
    -webkit-appearance: none;
    background: white;
    width: 100%;
    border-radius: 0;
    font-size: 1rem;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
  }

  input[type="checkbox"] {
    outline-color: var(--app-primary-color);
    margin-bottom: 1rem;
  }

  radiogroup {
  }

  radio {
    outline-color: var(--app-primary-color);
    -webkit-appearance: radio;
  }

  @media (min-width: 460px) {
    h2 {
      font-size: 36px;
    }

    .row {
      display: flex;
    }

    .row > * {
      flex-grow: 1;
      margin-right: 1rem;
    }

    .row > *:last-child {
      margin-right: 0;
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
    display: none !important;
  }

  .muted {
    color: var(--app-muted-text-color);
  }

  .centered {
    text-align: center;
  }
`;
