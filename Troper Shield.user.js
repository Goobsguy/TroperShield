// ==UserScript==
// @name         Troper Shield
// @namespace    http://tampermonkey.net/
// @version      1
// @description  Limits interaction with TvTropes, including cutting out mostevery feature related to editing and socializing.
// @author       Goobsguy
// @match        http://tvtropes.org/*
// ==/UserScript==

(function() {
    'use strict';

    $('.btn-group.user-account').remove(); // Removes the login button
    $('.sidebar-section:has(.list-inline.social-box)').remove(); // Removes the "community" area of the sidebar.
    $('.secondary-nav.tuck-menu.sec-nav').remove(); // Removes the top bar of pages, which allows you to edit.
    $('.btn-forums').remove(); // Removes forums button.
    $('.footer-mid-right.footer-column.footer-col-menu.col-3').remove(); // Removes the "community" area of the footer.

})();