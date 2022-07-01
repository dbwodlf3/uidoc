import { LitElement, html, css, CSSResultGroup, PropertyValueMap } from 'lit';
import { customElement, property, query, queryAssignedElements } from 'lit/decorators.js';

@customElement('custom-img-input-component')
export class CustomImgInputComponent extends LitElement {
  static styles? = css`
    .custom-button{
      display:flex; padding:10px 15px 10px 15px; height:30px; box-sizing:border-box; align-items:center;
      border:1px solid rgba(0,0,0,.12); font-size:.75em; box-shadow: 0 1px 2px 0 rgb(0 0 0 / .05); background:#fff;
      user-select:none; cursor:pointer;
      ;
    }
    .custom-button-active{
      background:#00c73c;
      color:white; font-weight:bold;
    }
  `

  @query("#ImageInput")
  imageInputElement!: HTMLInputElement;

  @property()
  src = "http://via.placeholder.com/150x150";

  render(){
    return html`
      <div id="ImageInterfaceTab" style="display:flex; flex-direction:column; align-items:center;">
        <img id="ImagePreview" @click=${this.clickInput} src=${this.src} style="width:150px;height:150px;"></img>
        <div style="margin-top:8px; display:flex; justify-content:center;">
          <span @click=${this.clickInput} class="custom-button">이미지 선택</span>
          <input id="ImageInput" style="display:none;" @change=${this.change} type="file">
        </div>
      </div>
    `;
  }

  change(e: Event){
    const target = e.currentTarget as HTMLInputElement;

    if(!target.files) return;
    if(target.files.length < 1) return this.src = "http://via.placeholder.com/150x150";

    const img = target.files[0];
    this.src = URL.createObjectURL(img);

    const event = new CustomEvent('change', {bubbles: true, composed: true, detail: {src: this.src }});
    this.dispatchEvent(event);
  }

  clickInput(e: Event){
    this.imageInputElement.click();
  }
}