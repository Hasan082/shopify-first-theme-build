$(document).ready(function() {
    // Event handler for toggling the mobile menu
    // This function is triggered when the element with the ID 'menu-toggle' is clicked.
    // It toggles the visibility of the mobile menu by sliding it up or down.
    $('#menu-toggle').on("click", function(e) {
        e.stopPropagation();
        $('#mobile-menu').slideDown(); // Toggles the mobile menu with a sliding animation
        $(this).hide();
        $('.menu_close').show();
    });
    
    $('.menu_close').on("click", function(e) {
        e.stopPropagation();
        $('#mobile-menu').slideUp();
        $('#menu-toggle').show();
        $(this).hide();
        $('.mob-dropdown-menu').slideUp();
    });

    
    // Event handler for closing the mobile menu when clicking outside of it
    // This function is triggered when any element with the class 'mobile-menu' is clicked.
    // It checks if the clicked element is not a child of the mobile menu, and if it is, it closes the mobile menu.
    $(document).on("click", function(event) {
        $('.mobile-menu').each(function() {
            if (!$(this).is(event.target) && $(this).has(event.target).length === 0) {
                $(this).slideUp();
            }
        });
    });

    // Event handler for toggling dropdown menus
    // This function is triggered when any element with the class 'dropdown' is clicked.
    // It finds the next sibling element with the class 'dropdown-menu' and toggles its visibility.
    $('.dropdown').on("click", function(e) {
        e.stopPropagation(); // Prevents the event from propagating up to the document
        $(this).next('.dropdown-menu').slideToggle(); // Toggles the dropdown menu with a sliding animation
    });

    // Event handler for closing dropdown menus when clicking outside of them
    // This function is triggered when any element with the class 'dropdown-menu' is clicked.
    // It checks if the clicked element is not a child of the dropdown menu, and if it is, it closes the dropdown menu.
    $(document).on("click", function(event) {
        $('.dropdown-menu').each(function() {
            if (!$(this).is(event.target) && $(this).has(event.target).length === 0) {
                $(this).slideUp();
            }
        });
    });


    // Mobile Dropdown
    // Event handler for toggling dropdown menus
    $('.mob-dropdown').on("click", function(e) {
        e.stopPropagation(); // Prevents the event from propagating up to the document
        $(this).next('.mob-dropdown-menu').slideToggle(); // Toggles the dropdown menu with a sliding animation
    });


});

// Event with window on resize
$(window).on("load resize", function() {
    // Check if the screen width is greater than or equal to 768px
    // If it is, remove the 'style' attribute from the mobile menu
    if ($(window).width() >= 768) {
        $('#mobile-menu').removeAttr('style');
    }
    if ($(window).width() <= 768) {
        let hederHeight = $('header').height();
        $('#mobile-menu').css('top', hederHeight);
    }
});
