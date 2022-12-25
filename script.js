$(document).ready(function () {

    // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {
            // set distance user needs to scroll before we fadeIn navbar
            if ($(this).scrollTop() > 100) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });




    //Portfolio-Section

    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({
            filter: $(this).data('filter')
        });
    });







});
