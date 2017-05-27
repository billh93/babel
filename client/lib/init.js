(function($) {
    $(function() {
        $('.button-collapse').sideNav();
        $('.parallax').parallax();
        $('.carousel').carousel();
        $('.dropdown-button').dropdown({
            constrainWidth: true, // Does not change width of dropdown to that of the activator
            hover: true, // Activate on hover
            belowOrigin: true, // Displays dropdown below the button
        });
    }); // end of document ready
})(jQuery); // end of jQuery name space
