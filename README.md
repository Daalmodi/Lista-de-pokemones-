# @bbva-web-components/list-pokemon

## Package info

### Package installation

Installation using NPM

```bash
npm install @bbva-web-components/list-pokemon
```

### Entry points & exports

- (Default entry point)
  - ListPokemon (Class)
- list-pokemon.js
  - list-pokemon (Custom Element)


## ListPokemon (Class) list-pokemon (Custom Element) 

### Extends from

LitElement (lit-element package)

### Usage

Import and extend the class:

```js
import { ListPokemon } from '@bbva-web-components/list-pokemon';

class ExampleElement extends ListPokemon {
  ...
}
```

Use the custom element (defined globally):

```js
import '@bbva-web-components/list-pokemon/list-pokemon.js';
```

```html
<list-pokemon ...>
  ...
</list-pokemon>
```

### Description

![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

Este es un componente UI el cual enlista pokemones deonde se puede ilustrar el nombre, su imagen , el tipo y su id, asi como tambien un voto que redirige a la pagina de  la cadena de evoluciones.

Example:

```html
  <list-pokemon></list-pokemon>
```

### Properties

- **name**: string = "Cells" (attribute: name)
    Description for property
