import { LitElement, html, css, CSSResultGroup, PropertyValueMap } from 'lit';
import { customElement, property, query, queryAssignedElements } from 'lit/decorators.js';

@customElement('custom-number-input-component')
export class CustomInputComponent extends LitElement {
  static styles = css`
    .input-none {
      text-align: right;
      border: none;
    }
    
    .input-none:focus{
      outline: none;
    }
    
    .input-none::-webkit-outer-spin-button,
    .input-none::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
  `;

  @property()
  value = 0;

  @property()
  unit = "";

  @property()
  right = "30px";

  @property()
  max = "";
  @property()
  min = "";

  render(){
    return html`
      <div class="custom-input" style="
        text-align: right;
        border: 1px solid #bbb;
        padding-top:5px;
        padding-bottom:5px;
        padding-right: ${this.right};
        padding-left: 5px;
        position:relative;
        ">
        <input id="HotspotDialogMarkerHeightInput" @input=${this.input} class="input-none" type="number" style="width: 100%;" max=${this.max} min=${this.min} value=${this.value}>
        <span style="
          position:absolute;
          top: 8px;
          right: 8px;
          color: #777;
          font-size:12px;
          ">${this.unit}</span>
      </div>
    `;
  }

  input(e: Event){
    const target = e.currentTarget as HTMLInputElement;
    const event = new CustomEvent("input", {bubbles: true, composed: true, detail: {value: target.value}});
    this.dispatchEvent(event);
  }
}