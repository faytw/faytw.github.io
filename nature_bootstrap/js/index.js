$(document).ready(function() {
    
    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        autoplay: 2000,
        dotsEach: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('.fancybox')
        .attr('rel', 'gallery')
        .fancybox({
            beforeLoad: function() {
                this.title = $(this.element).attr('caption');
            },
            beforeShow: function() {
                // set size for parent container
                this.minWidth = 240;
                this.minHeight = 300;
            },
            helpers: {
                title: {
                    type: 'inside',
                    position: 'top'
                }
            },
            nextEffect: 'fade',
            prevEffect: 'fade'
        }); //end fancybox
}); // end ready
