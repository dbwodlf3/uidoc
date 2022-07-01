import { LitElement, html, css, CSSResultGroup, PropertyValueMap } from 'lit';
import { customElement, property, query, queryAssignedElements } from 'lit/decorators.js';

@customElement('icon-selector')
export class IconSelector extends LitElement {
  static styles = css`
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

    .select-icon {
      user-select:none;
      cursor:pointer;
      transition: transform 0.05s ease-in;
    }
    .select-icon:hover {
      transform: scale(2);
    }
  `;

  @property()
  label = "아이콘선택";
  @property()
  icon = "info"

  @property({attribute: false})
  displayIconDialog = "none";

  render(){
    return html`
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
      <div style="display:flex;flex-direction:column;align-items:center;">
        <span class="material-icons-outlined">${this.icon}</span>
        <div class="custom-button" @click=${this.showIconDialog} style="margin-top:8px;">${this.label}</div>
      </div>
      <div id="IconPreview" style="
        display: ${this.displayIconDialog};
        position:absolute; background:#fff;
        border:1px solid rgba(0,0,0,.25); padding: 15px 10px 15px 10px; max-width: 500px; max-height: 500px;
        ">
        <div style="display:flex; flex-wrap: wrap; gap:7px;">
          <span @click=${this.clickIcon} class="select-icon" style="font-size:12px;">없음</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">home</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">maps_home_work</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">location_city</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">domain</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">account_balance</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">store</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">shopping_cart</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">settings</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">done</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">done_all</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">delete</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">preview</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">visibility</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">visibility_off</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">login</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">logout</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">launch</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">lock</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">language</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">info</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">help_outline</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">check_circle</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">highlight_off</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">pending</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">account_circle</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">schedule</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">history</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">help</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">favorite</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">favorite_border</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">stars</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">grade</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">star_rate</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">thumb_up</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">thumb_down</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">bookmark</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">bookmark_border</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">work</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">work_outline</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">lightbulb</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">room</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">verified_user</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">privacy_tip</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">book</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">fingerprint</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">zoom_in</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">drag_indicator</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">dashboard</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">question_answer</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">calendar_today</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">event</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">credit_card</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">verified</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">loyalty</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">api</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">face</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">hiking</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">bug_report</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">report_problem</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">change_history</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">rocket</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">gavel</span>
          <span @click=${this.clickIcon} class="select-icon material-icons-outlined">pets</span>
        </div>
        <div style="display:flex; justify-content:flex-end; padding: 0px 7px 0px 0px; margin-top:24px;">
          <span @click=${this.closeIconDialog} class="custom-button">닫기</span>
        </div>
      </div>
    `
  }

  showIconDialog(){
    this.displayIconDialog = "block";
  }

  closeIconDialog(){
    this.displayIconDialog = "none";
  }

  clickIcon(e: Event){
    const target = e.currentTarget as HTMLElement;
    const text = target.textContent;

    if(text == "없음") {
      this.icon = "";
    }
    else {
      this.icon = text || "";
    }

    const event = new CustomEvent("input", {detail: { value: this.icon }, bubbles: true, composed: true});
    this.dispatchEvent(event);
  }
}
