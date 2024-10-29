import { LitElement, html } from 'lit-element';
import { CellsPageMixin as cellsPage } from '@cells/cells-page-mixin';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import '@bbva-web-components/bbva-web-panel-outstanding-opportunity/bbva-web-panel-outstanding-opportunity.js';
import'@bbva-web-components/bbva-core-image/bbva-core-image.js';
import '@bbva-web-components/bbva-foundations-grid-default-layout';
import '@pokemondex/pokemon-dm/pokemon-dm.js';
import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default.js';

import styles from './list-pokemon.css.js';


export class ListPokemon extends cellsPage(LitElement) {
  static get properties() {
    return {

    };
  }

  constructor() {
    super();
    this.pokemones = [];
  }

  static get styles() {
    return [
      
      styles,
      getComponentSharedStyles('list-pokemon-shared-styles'),

      
    ];
  }

  async firstUpdated(){
    const pokemonDm = this.shadowRoot.querySelector('pokemon-dm');
    await pokemonDm.makeRequest();
    this.pokemones = pokemonDm.pokemonData;
    this.requestUpdate();
  }



  render() {
    return html`
    <bbva-foundations-grid-default-layout layout="[{
  slot: 'pokemon-row',
  cols: {
    xs: 12,
    sm: 12,
    md: 12,
    lg: 12
  }
}]">
    <div class="wrap" slot="pokemon-row">
      ${this.pokemones.map((pokemon) => html`
      <div class="contenedor">
        <bbva-web-panel-outstanding-opportunity-item
          heading=${pokemon.name}
          
          slot="main"
          
        >
          <bbva-core-image style="width:400px; height:400px; " sizing="cover; object-fit: contain" preload fade src=${pokemon.sprites.other.dream_world.front_default}></bbva-core-image>
          <div class="tipos">
            Tipos : ${pokemon.types.map((type) => html` ${type.type.name} `)}
          </div>
          <div>
             id : ${pokemon.id}
          </div>
    
        </bbva-web-panel-outstanding-opportunity-item>
        
          <bbva-web-button-default
         
          id=${pokemon.id}
          class="evolucionBoton"
          size="l"
          slot="login-desktop"
          variant="positive"
          @click="${() => this.handleButtonClick(pokemon.id)}}"
        > Evolucion </bbva-web-button-default>
      </div>
 
      `)}
    </div>
    </bbva-foundations-grid-default-layout>

      <pokemon-dm></pokemon-dm> 
      
    `;
  }

  handleButtonClick(id) {
  // En este metodo se redirige a la pagina de evoluciones con el metodo navigate 
  this.navigate('evolution',{id}); //navega con un parametro id 
  this.onPageLeave(id);
  }

  onPageLeave(id){
    this.publish('canal_1', id);
  }

}
