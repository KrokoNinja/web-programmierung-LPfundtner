//waiting for DOM to load before running the script so we can access the elements
document.addEventListener('DOMContentLoaded', () => {
  //get elements
  const btnOpen = document.getElementById('btnOpen');
  const btnClose = document.getElementById('btnClose');
  const topNavMenu = document.querySelector('.topnav__menu');
  const main = document.querySelector('main');
  const body = document.querySelector('body');
  
  //set media query for mobile navigation
  const media = window.matchMedia('(width <= 768px)');

  function setupTopNav(e) {
    if (e.matches) {
      //set inert so screen reader doesn't read the menu items
      topNavMenu.setAttribute('inert', '');
      //remove transition so it doesn't animate on load
      topNavMenu.style.transition = 'none';
    } else {
      topNavMenu.removeAttribute('inert');
      closeMobileMenu();
    }
  }

  function openMobileMenu() {
    //set aria-expanded to true so screen reader knows the menu is open
    btnOpen.setAttribute('aria-expanded', 'true');
    //remove inert so screen reader reads the menu items
    topNavMenu.removeAttribute('inert');
    topNavMenu.removeAttribute('style');
    //set inert so screen reader doesn't read the main content
    main.setAttribute('inert', '');
    //disable scroll on the body
    bodyScrollLockUpgrade.disableBodyScroll(body);
    btnClose.focus();
  }

  function closeMobileMenu() {
    //set aria-expanded to false so screen reader knows the menu is closed
    btnOpen.setAttribute('aria-expanded', 'false');
    //set inert so screen reader doesn't read the menu items
    topNavMenu.setAttribute('inert', '');
    //remove inert so screen reader reads the main content
    main.removeAttribute('inert');
    //enable scroll on the body
    bodyScrollLockUpgrade.enableBodyScroll(body);
    btnOpen.focus();

    setTimeout(() => {
      topNavMenu.style.transition = 'none';
    }, 500);
  }

  btnOpen.addEventListener('click', openMobileMenu);
  btnClose.addEventListener('click', closeMobileMenu);
  media.addEventListener('change', (e) => setupTopNav(e));
});
