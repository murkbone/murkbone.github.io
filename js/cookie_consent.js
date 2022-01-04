// File: cookie_consent.js
// Author: rocket
// Purpose: handles notifying visitors about cookies on the site.

// copyright 2022 schneerocket. all rights reserved.

// Purpose: sets if the visitor has seen the notice
function setHasSeenCookieNotice(in_bool) {
    // Sets under the local storage
    window.localStorage.setItem("rocket:seen_cookie_notice", in_bool);
}

// Purpose: gets if the visitor has seen the notice
function getHasSeenCookieNotice() {
    return window.localStorage.getItem("rocket:seen_cookie_notice");
}

// Purpose: Cclls the modal
function callCookieModal() {
    // Show the modal
    if (getHasSeenCookieNotice() == 'false') {
        $("#modal_cookie").modal("show");
    }
}


// Purpose: When the document is fully loaded...
document.addEventListener("DOMContentLoaded", function() {
    // Set the storage item to false ONLY if it's not true
    if (!getHasSeenCookieNotice() == true) {
        setHasSeenCookieNotice(false);
    }

    // Call the modal
    callCookieModal();

    // Purpose: When the modal is closed...
    $("#modal_cookie").on('hide.bs.modal', function(e) {
        // Set has seen
        setHasSeenCookieNotice('true');
    });
});
