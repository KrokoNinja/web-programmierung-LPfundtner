//Reusable Header component
class Header extends HTMLElement {
  constructor() {
    //call super to use HTMLElement methods
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <header class="topnav">
      <a href="/" id="logo">
        <img src="/assets/cat.svg" alt="" width="40" height="40" class="topnav__logo" />
      </a>
      <nav>
        <span id="nav-label" hidden>Navigation</span>
        <button id="btnOpen" class="topnav__open" aria-expanded="false" aria-labelledby="nav-label">
          <img src="/assets/hamburger-menu.svg" alt="" width="40" height="24" />
        </button>
        <div class="topnav__menu" role="dialog" aria-labelledby="nav-label">
          <button class="topnav__close" id="btnClose" aria-label="Close">
            <img src="/assets/close.svg" alt="" width="24" height="24" />
          </button>
          <ul class="topnav__links">
            <li class="topnav__item">
              <a class="topnav__link" href="/">Home</a>
            </li>
            <li class="topnav__item">
              <a class="topnav__link" href="/ueber-die-rasse">Über die Rasse</a>
            </li>
            <li class="topnav__item">
              <a class="topnav__link" href="/pflege-und-ernaehrung">
                Pflege & Ernährung
              </a>
            </li>
            <li class="topnav__item">
              <a class="topnav__link" href="/galerie">Galerie</a>
            </li>
            <li class="topnav__item">
              <a class="topnav__link" href="/kontakt">Kontakt</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    `;
  }
}

//define the component so it can be used in other files
customElements.define("header-component", Header);
