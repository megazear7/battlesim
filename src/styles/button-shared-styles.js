import { css } from 'lit-element';

export const ButtonSharedStyles = css`
  button {
    font-family: inherit;
    font-size: 1rem;
    background: var(--app-white-color);
    cursor: pointer;
    padding: 1rem 2rem;
    display: inline-block;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    position: relative;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    border: 3px solid var(--app-primary-color);
    color: var(--app-dark-text-color);
    overflow: hidden;
    margin: 1rem 0;
  }

  .selected, button:hover {
    background: var(--app-primary-color);
    color: var(--app-light-text-color);
  }

  .btn-link {
    border: 0;
    margin-top: 0;
    padding: 0;
    font-weight: 400;
  }

  .btn-link:hover {
    background: none;
    border: 0;
    color: var(--app-primary-color);
  }

  button:disabled {
    cursor: unset;
    border-color: grey;
    color: grey;
    background: none;
  }

  button:disabled:hover {
    background: none;
    border-color: grey;
    color: grey;
  }
`;