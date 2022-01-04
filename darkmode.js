// File: darkmode.js
// Author: rocket
// Purpose: provides a dark mode for the ui site

_PAGE_THEME = 0;

function applyDarkMode() {
    // Loop over all navbar elements
    var navbars = document.getElementsByClassName("navbar");

    for (var i = 0; i < navbars.length; i++) {
        // Remove light classes
        navbars[i].classList.remove("navbar-light");
        navbars[i].classList.remove("bg-light");

        // Add dark classes
        navbars[i].classList.add("navbar-dark");
        navbars[i].classList.add("bg-dark");
    }

    // Set body background to a suitable dark color
    document.body.style.backgroundColor = "#3e3e3e";

    // Loop over h1 elements
    var h1s = document.getElementsByTagName("h1");

    for (var i = 0; i < h1s.length; i++) {
        // Add dark classes
        h1s[i].classList.add("h1-dark");
    }

    // Loop over h3 elements
    var h3s = document.getElementsByTagName("h3");

    for (var i = 0; i < h3s.length; i++) {
        // Add dark classes
        h3s[i].classList.add("h3-dark");
    }

    // Loop over h5 elements
    var h5s = document.getElementsByTagName("h5");

    for (var i = 0; i < h5s.length; i++) {
        // Add dark classes
        h5s[i].classList.add("h5-dark");
    }

    // Loop over p elements
    var ps = document.getElementsByTagName("p");

    for (var i = 0; i < ps.length; i++) {
        // Add dark classes
        ps[i].classList.add("p-dark");
    }

    // Loop over a elements
    var _as = document.getElementsByTagName("a");

    for (var i = 0; i < _as.length; i++) {
        // Add dark classes
        _as[i].classList.add("a-dark");
    }

    // Loop over li elements
    var lis = document.getElementsByTagName("li");

    for (var i = 0; i < lis.length; i++) {
        // Add dark classes
        lis[i].classList.add("li-dark");
    }

    // Grab the toggler
    var toggler = document.getElementById("dark_toggler");

    // Change it's layout
    toggler.classList.remove("bi-moon-fill");
    toggler.classList.add("bi-brightness-high");

    // Change it's color
    toggler.style.color = "#fff";

    // Loop over all modal-content elemets
    var modal_contents = document.getElementsByClassName("modal-content");

    for (var i = 0; i < modal_contents.length; i++) {
        // Add dark classes
        modal_contents[i].classList.add("modal_content-dark");
    }

    // Loop over all modal-header elements
    var modal_headers = document.getElementsByClassName("modal-header");

    for (var i = 0; i < modal_headers.length; i++) {
        // Add dark classes
        modal_headers[i].classList.add("modal_header-dark");
    }

    // Loop over all modal-footer elements
    var modal_footers = document.getElementsByClassName("modal-footer");

    for (var i = 0; i < modal_footers.length; i++) {
        // Add dark classes
        modal_footers[i].classList.add("modal_footer-dark");
    }

    // Loop over all span elements
    var spans = document.getElementsByTagName("span");

    for (var i = 0; i < spans.length; i++) {
        // Add dark classes
        spans[i].classList.add("span-dark");
    }

    _PAGE_THEME = 1;
    applyDarkThemeCookie();
}

function removeDarkMode() {
    // Loop over all navbar elements
    var navbars = document.getElementsByClassName("navbar");

    for (var i = 0; i < navbars.length; i++) {
        // Remove dark classes
        navbars[i].classList.remove("navbar-dark");
        navbars[i].classList.remove("bg-dark");

        // Add light classes
        navbars[i].classList.add("navbar-light");
        navbars[i].classList.add("bg-light");
    }

    // Set body background to a suitable dark color
    document.body.style.backgroundColor = "#fff";

    // Loop over h1 elements
    var h1s = document.getElementsByTagName("h1");

    for (var i = 0; i < h1s.length; i++) {
        // Remove dark classes
        h1s[i].classList.remove("h1-dark");
    }

    // Loop over h3 elements
    var h3s = document.getElementsByTagName("h3");

    for (var i = 0; i < h3s.length; i++) {
        // Remove dark classes
        h3s[i].classList.remove("h3-dark");
    }

    // Loop over h5 elements
    var h5s = document.getElementsByTagName("h5");

    for (var i = 0; i < h5s.length; i++) {
        // Remove dark classes
        h5s[i].classList.remove("h5-dark");
    }

    // Loop over p elements
    var ps = document.getElementsByTagName("p");

    for (var i = 0; i < ps.length; i++) {
        // Remove dark classes
        ps[i].classList.remove("p-dark");
    }

    // Loop over a elements
    var _as = document.getElementsByTagName("a");

    for (var i = 0; i < _as.length; i++) {
        // Remove dark classes
        _as[i].classList.remove("a-dark");
    }

    // Loop over li elements
    var lis = document.getElementsByTagName("li");

    for (var i = 0; i < lis.length; i++) {
        // Remove dark classes
        lis[i].classList.remove("li-dark");
    }

    // Loop over all modal-content elemets
    var modal_contents = document.getElementsByClassName("modal-content");

    for (var i = 0; i < modal_contents.length; i++) {
        // Remove dark classes
        modal_contents[i].classList.remove("modal_content-dark");
    }

    // Loop over all modal-header elements
    var modal_headers = document.getElementsByClassName("modal-header");

    for (var i = 0; i < modal_headers.length; i++) {
        // Remove dark classes
        modal_headers[i].classList.remove("modal_header-dark");
    }

    // Loop over all modal-footer elements
    var modal_footers = document.getElementsByClassName("modal-footer");

    for (var i = 0; i < modal_footers.length; i++) {
        // Remove dark classes
        modal_footers[i].classList.remove("modal_footer-dark");
    }

    // Loop over span elements
    var spans = document.getElementsByTagName("span");

    for (var i = 0; i < spans.length; i++) {
        // Remove dark classes
        spans[i].classList.remove("span-dark");
    }

    // Grab the toggler
    var toggler = document.getElementById("dark_toggler");

    // Change it's layout
    toggler.classList.remove("bi-brightness-hight");
    toggler.classList.add("bi-moon-fill");

    // Change it's color
    toggler.style.color = "#212529";

    _PAGE_THEME = 0;
    applyDarkThemeCookie();
}

function togglePageTheme() {
    if (_PAGE_THEME == 0) {
        applyDarkMode();
    } else if (_PAGE_THEME == 1) {
        removeDarkMode();
    }
}

function applyDarkThemeCookie() {
    window.localStorage.setItem("ayetsg:page_theme", _PAGE_THEME);
}

function readPreferredDarkCookie() {
    if (window.localStorage.getItem("ayetsg:page_theme") == 0) {
        removeDarkMode();
    } else {
        applyDarkMode();
    }
}

document.addEventListener("DOMContentLoaded", function() {
    readPreferredDarkCookie();
});