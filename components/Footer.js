//Reusable Footer component
class Footer extends HTMLElement {
  constructor() {
    //call super to use HTMLElement methods
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
      <ul>
        <li>Copyright</li>
        <li>
          <a href="#">Instagram</a>
        </li>
        <li>
          <a href="#">X</a>
        </li>
        <li>
          <button id="theme-toggle">
            <img src="/assets/sun.svg" alt="" width="24" height="24" />
          </button>
        </li>
      </ul>
    </footer>
    `;
  }
}

//define the component so it can be used in other files
customElements.define("footer-component", Footer);

