import { html, LitElement, css } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("my-button")
class MyButton extends LitElement {

  static styles = css`
    button {
      background-color: #6200ea;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  `;

  @property({ type: String }) label = "Click Me";

  render() {
    return html`<button @click=${this.handleClick}>${this.label}</button>`;
  }

  private handleClick() {
    console.log("Button clicked!");
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-button": MyButton;
  }
}
