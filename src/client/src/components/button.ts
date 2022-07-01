import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

@customElement('button-component')
export class ButtonComponent extends LitElement {
  static styles = css`
    .custom-button{
      display:flex; padding:10px 15px 10px 15px; 
      height:30px; 
      box-sizing:border-box; 
      align-items:center;
      border:1px solid rgba(0,0,0,.12); font-size:.75em; box-shadow: 0 1px 2px 0 rgb(0 0 0 / .05); background:#fff;
      user-select:none; cursor:pointer;
      
      transition: color, background 0.05s ease;
    }
    .custom-button-active{
      background:#00c73c;
      color:white; font-weight:bold;
    }

    .custom-button:hover{
      color:white;
      background:#6129a2;
    }
  `;
  
  @property()
  color="default";

  @property()
  active = false;

  @property()
  hover = false;

  @property()
  label = "None";

  @query("#Button")
  buttonElement!:HTMLElement;

  render(){
    return html`
      <div @click=${this.clickEvent} style="display:flex; align-items:center;">
        <span id="Button" class="custom-button ${this.active ? "custom-button-active": ""}">${this.label}</span>
      </div>
    `;
  }

  clickEvent(e:Event){
    // this.buttonElement.classList.toggle("custom-button-active");
  }
  
}
