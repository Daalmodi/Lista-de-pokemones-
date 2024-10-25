import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`
:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *::before, *::after {
  box-sizing: inherit;
}

.wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
}

.evolucionBoton {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.contenedor {
  display: grid;
  justify-content: center;
}
`;
