// File: copyright.js
// Author: DREZMOR
// Purpose: handles storing copyright info across the site.

// Purpose: Holds the master copyright string
var COPYRIGHT_STRING = "copyright 2022 DREZMOR. all rights reserved.";

// Purpose: wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Set the copyright string
    document.getElementById("copyright_string").innerText = COPYRIGHT_STRING;
});
