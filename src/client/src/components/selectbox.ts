import { LitElement, html, css, CSSResultGroup, PropertyValueMap } from 'lit';
import { customElement, property, query, queryAssignedElements } from 'lit/decorators.js';

@customElement('select-box-component')
export class SelectBoxComponent extends LitElement {

  static styles = css`
    .my-select .select{
      box-sizing:border-box;
      display:none;
      position:absolute;
      top: 0px;
      cursor: pointer;
    }

    ::slotted(*){
      user-select: none;

      padding-left: 10px;
      box-sizing:border-box;
      padding-top: 5px;
      padding-bottom:5px;  

      border-radius: 5px; border: 1px solid #efefef; background:#fefefe;
      border-top: none; border-bottom: none;
    }

    ::slotted(*:hover){
      background:#efefef;
      color: #6342E5;
    }
    
    .my-select-option::-webkit-scrollbar {
      width: 6px;
    }
    .my-select-option::-webkit-scrollbar-track {
      background-color: transparent;
    }
    .my-select-option::-webkit-scrollbar-thumb {
      border-radius: 3px;
      background-color: gray;
    }
    .my-select-option::-webkit-scrollbar-button {
      width: 0;
      height: 0;
    }  
  `

  @property()
  selectedValue = "";
  @property()
  dataPath = "";
  @property({attribute: false})
  selectData: {value: string, text: string}[] = [];
  @property({attribute: false})
  selectedText = "";
  @property({attribute: false})
  flagOpenSelectBox = false;

  @property()
  width = "92px";
  @property()
  height = "32px";
  

  @query("#SelectBox")
  SelectBoxElement!: HTMLElement;
  @query("#SelectBoxOptions")
  SelectBoxOptionsElement!: HTMLElement;
  @query("#Selected")
  SelectedElement!: HTMLElement;


  // ${this.selectData.map((item)=> html`<span @click=${this.clickOption} data-value=${item.value}>${item.text}</span>`)}
  render(){
    return html`
      <div id="SelectBox" @click=${this.clickOpenSelectBox} class="my-select" style="
        displaly: flex; position: relative;
        height: ${this.height}; width: ${this.width};
        margin-left:30px; padding:10px;
        box-sizing:border-box; 
        text-overflow: '';
        border-radius: 5px; border: 1px solid #efefef; background:#fefefe;
        ">
        <svg style="width:10px;height:10px;position: absolute; top:15px; right:5px">
          <path fill="none" stroke="black" stroke-width="1"
                d="M 0, 0
                  L 4, 4
                  M 8, 0
                  L 4, 4
                  "/>
        </svg>
        <div id="Selected" class="my-selected" style="position:absolute; left:10px; top:5px; user-select:none; cursor:default;">${this.selectedText}</div>
        <div id="SelectBoxOptions" class="select my-select-option" style="${this.flagOpenSelectBox ? "display:flex;" : "display:none;"} 
          flex-direction:column; top:30px; left:-1px; overflow-y: scroll; max-height:68px;
          width: ${this.width};
        ">
          <slot @slotchange=${this.slotChange}></slot>
        </div>
      </div>
    `
  }

  firstUpdated(){
    const option = this.SelectBoxOptionsElement.children[0] as HTMLElement 
    option.click();
  }

  clickOpenSelectBox(e: Event){
    e.stopPropagation();
    this.flagOpenSelectBox = !this.flagOpenSelectBox;
  }

  clickOption = (e: Event)=>{
    e.stopPropagation();
    const target = e.currentTarget as HTMLElement;
    this.selectedValue = target.dataset.value || "";
    this.selectedText = target.textContent || "";
    this.flagOpenSelectBox = false;

    const event = new CustomEvent('select', {bubbles: true, composed: true, detail: {value: this.selectedValue }});
    this.dispatchEvent(event);
  }

  slotChange(e: Event){ 
    const slot = e.target as HTMLSlotElement;
    const child_elements = slot.assignedElements({flatten: true});
    child_elements.map((element)=>{
      element.classList.add("select-item");
      element.addEventListener("click", this.clickOption);
    });
    const first_element = child_elements[0] as HTMLElement
    first_element.click();
  }
}
