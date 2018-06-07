/**
 * Jquery Functions needed for website
 */
$(function() {

    //Scroll Spy
    $('body').scrollspy({                                            //Which element to check for scroll
        target: '',                                                  //Where is the scrollspy reflected
        offset: 160                                                  //Offset is needed as smooth scrolling messes up with the scrollspy
    });

    //Smooth Scrolling
    $('nav a, .name-heading a, .header-para a').bind('click', function() {            //Selecting all the nav area and the anchors within it then attaching a function to click event
        $('html, body').stop().animate({                              //Stop any animation currently going on in html or body of the page and then create new animate function using jquery animate function
            scrollTop: $($(this).attr('href')).offset().top - 100     //ScrollTop is used to determine where the top of the page should be, then we are looking at href attribute and setting the value at scrollTop with an offset of 100 so that the heading doesnt go under the navbar
            }, 1500, 'easeInOutExpo');                                //Animation will take 1.5s and we will use easeInOutExpo animation from Easing library
        //$($(this).addClass("active"));                                //Adding active class for scrollspy to work
        event.preventDefault();                                       //Preventing any default behavior by the browser
    });

    /**** EasyPieChart Circle Progress ****/
    //circle progress additional skills
    $('.chart').easyPieChart({
        barColor: '#757575',
        trackColor: 'rgba(255,255,255,0)',
        scaleColor: 'rgba(255,255,255,0)',
        lineWidth: '10',
        lineCap: 'square'
    });

});