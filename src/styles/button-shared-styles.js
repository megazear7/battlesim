import { css } from 'lit-element';

export const ButtonSharedStyles = css`
  .btn-link {
    outline-color: var(--app-primary-color);
    cursor: pointer;
    background: none;
    font-size: 0.8rem;
    text-decoration: underline;
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

  .btn-link.active-link {
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
