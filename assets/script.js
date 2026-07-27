const menuButton = document.querySelector('.menu-button');
const siteNav = document.querySelector('.site-nav');

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

const popup = document.getElementById("promoPopup");
const popupClose = document.getElementById("popupClose");

if (popup) {

    // Show popup once every 24 hours
    const lastShown = localStorage.getItem("ckkc-popup");

    const now = Date.now();

    if (!lastShown || now - Number(lastShown) > 24 * 60 * 60 * 1000) {

        popup.classList.remove("popup-hidden");

        localStorage.setItem("ckkc-popup", now);
    } else {

        popup.classList.add("popup-hidden");
    }

    popupClose.addEventListener("click", () => {
        popup.classList.add("popup-hidden");
    });

    popup.querySelector(".popup-backdrop")
        .addEventListener("click", () => {
            popup.classList.add("popup-hidden");
        });
}
