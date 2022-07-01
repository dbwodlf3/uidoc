import { LitElement, html, css } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

@customElement('user-register-form')
export class ButtonComponent extends LitElement {
  static styles = css`
    @font-face {
      font-family: 'Material Icons Outlined';
      font-style: normal;
      font-weight: 400;
      src: url(https://fonts.gstatic.com/s/materialiconsoutlined/v103/gok-H7zzDkdnRel8-DQ6KAXJ69wP1tGnf4ZGhUce.woff2) format('woff2');
    }
    .material-icons-outlined {
      font-family: 'Material Icons Outlined';
      font-weight: normal;
      font-style: normal;
      font-size: 24px;
      line-height: 1;
      letter-spacing: normal;
      text-transform: none;
      display: inline-block;
      white-space: nowrap;
      word-wrap: normal;
      direction: ltr;
      -webkit-font-feature-settings: 'liga';
      -webkit-font-smoothing: antialiased;
    }

    .input-none:focus{
      outline:none;
      text-decoration: none !important;
    }

    .input-none{
      border: none;
      text-decoration: none;
      background: none;
    }

    .input-active{
      border-color: rgba(110, 0, 255, .5) !important;
      box-shadow: inset 0 1px 1px rgb(31 45 61 / 8%), 0 0 20px rgb(110 0 255 / 10%);
    }

    .input-border{
      
    }

    .a-none {
      color: inherit;
      text-decoration: none;
    }
  `;

  @property()
  _usernameFocus = false;
  @property()
  _passwordFocus = false;
  @property()
  _passwordCheckFocus = false;

  @property()
  active = false;

  @property()
  label = "None";

  @query("#Button")
  buttonElement!:HTMLElement;


  render(){
    return html`
    <div
      style="display:flex; flex-direction:column; background: #fff;
        max-width: 455px; padding: 36px; box-sizing:border-box; border-radius:4px;
        border: 1px solid #cfcfcf; 
      "
      >
      <div style="display:flex; font-size: 1.4em; font-weight:300; margin-bottom:32px;">
        <div>회원가입</div>
      </div>
      
      <div style="margin-bottom:16px;">
        <div style="display:flex; justify-content:center; margin-bottom:16px;">
          <div style="font-size: 1em;">간편 로그인</div>
        </div>
        <div style="display:flex; justify-content:center;">
          <div style="display:flex; justify-content:center;flex-grow:1; border: 1px solid #dfdfdf;
            padding: 4px 0px 4px 0px; margin-right: 16px; border-radius:4px;
            "
          > 
            <img src="https://vo.la/themes/vola/img/svg/naver.svg" style="width:24px;">
          </div>
          <div style="display:flex; justify-content:center;flex-grow:1; border: 1px solid #dfdfdf;
            padding: 4px 0px 4px 0px; margin-right: 16px; border-radius:4px;"> 
            <img src="https://vo.la/themes/vola/img/svg/google.svg" style="width:24px;">
          </div>
        </div>
      </div>

      <div style="display:flex; align-items:center; justify-content:center; margin-bottom:16px;">
        <span style="background:black; height:1px; flex-grow:1; margin-right:32px;"></span>
        OR
        <span style="background:black; height:1px; flex-grow:1; margin-left:32px;"></span>
      </div>

      <div>
        <div class="${this._usernameFocus ? "input-active" : ""}" style="display:flex; border: 1px solid #cfcfcf; margin-bottom:16px; align-items:center; padding:4px 0px 4px 0px;">
          <img src="/static/img/envelope-solid.svg" style="width:14px; font-size: 1em; padding: 8px 8px 8px 16px;">
          <input @focusout=${this.usernameFocusOut} @focus=${this.usernameFocus} id="UsernameInput" class="input-none" type="email" placeholder="이메일" 
          style="flex-grow:1; padding-left:16px; font-size:1em;"
          >
        </div>
        <div class="${this._passwordFocus ? "input-active" : ""}" style="border: 1px solid #cfcfcf; margin-bottom:16px; display:flex; align-items:center; padding:4px 0px 4px 0px;">
          <img fill="gray" src="/static/img/key-solid.svg" style="width:14px; font-size: 1em; padding: 8px 8px 8px 16px; color:gray;">
          <input id="PasswordInput" @focus=${this.passwordFocus} @focusout=${this.passwordFocusOut} class="input-none" type="password" placeholder="비밀번호" 
            style="flex-grow:1; padding-left:16px; font-size:1em;"
          >
        </div>
        <div class="${this._passwordCheckFocus ? "input-active" : ""}" style="border: 1px solid #cfcfcf; margin-bottom:16px; display:flex; align-items:center; padding:4px 0px 4px 0px;">
          <img fill="gray" src="/static/img/key-solid.svg" style="width:14px; font-size: 1em; padding: 8px 8px 8px 16px; color:gray;">
          <input id="PasswordCheckInput" @focus=${this.passwordCheckFocus} @focusout=${this.passwordCheckFocusOut} class="input-none" type="password" placeholder="비밀번호 확인" 
            style="flex-grow:1; padding-left:16px; font-size:1em;"
          >
        </div>
      </div>

      <div style="display:flex; margin-top: 16px;">
        <custom-checkbox-component><span value="">약관에 동의합니다. </span></custom-checkbox-component>
        <a href="" class="a-none" style="color:#5a217e; margin-left:8px;">(이용약관)</a>
      </div>

      <button-component id="ButtonExample" label="회원가입" style="margin-top:36px;" style="background:black;"></button-component>
      <div style="font-size:.8em; margin-top:16px; color: #666;">
        <span>이미 계정이 있으신가요? </span><a href="" class="a-none" style="color:#5a217e; font-weight:700;">로그인</a>
      </div>
    </div>
    `;
  }

  register(){

  }

  usernameFocus(){
    this._usernameFocus = true;
  }
  usernameFocusOut() {
    this._usernameFocus = false;
  }
  passwordFocus(){
    this._passwordFocus = true;
  }
  passwordFocusOut(){
    this._passwordFocus = false;
  }
  passwordCheckFocus(){
    this._passwordCheckFocus = true;
  }
  passwordCheckFocusOut(){
    this._passwordCheckFocus = false;
  }
  
}
