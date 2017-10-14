$(function() {

   $('a').on('click', function(e){
    e.preventDefault();
  });

	$('.theTeam__slider').slick({
		arrows: false,
  	infinite: true,
  	dots: true
	});
	
	$('.testimonials__slider').slick({
		arrows: false,
  	infinite: true,
  	autoplay: true,
  	speed: 4000,
  	dots: true
	});
	
	$('.portfolio__imgs').isotope({
  // options
  itemSelector: '.portfolio__img-wrap',
  layoutMode: 'masonry'
});

  function remClass(that) {
    $('.portfolio__link').removeClass('portfolio__link-active');
    that.addClass('portfolio__link-active');
  }

var $portfolio = $('.portfolio__imgs'); 
$('a').on('click', function() {
  var dataId = $(this).attr('data-id');
  if (dataId) {
    remClass($(this));
    $portfolio.isotope({ filter: $(dataId)});
  }
});



//map

	var directionsDisplay = new google.maps.DirectionsRenderer(),
  		marick = new google.maps.LatLng(47.102728, 37.552310),
  		mapOptions = {
    								zoom:10,
    								center: marick
  		},
  		map = new google.maps.Map($('.contact__map')[0], mapOptions);

      var marker = new google.maps.Marker({
                                            position: marick,
                                            map: map,
                                            icon: {
                                                    url:'img/marker-map.png',
                                                    scaledSize: new google.maps.Size(42, 58)
                                                  }
                                          });
  		directionsDisplay.setMap(map);

	google.maps.event.addDomListener(window, "resize", function() {
		var center = map.getCenter();
		google.maps.event.trigger(map, "resize");
		map.setCenter(center);
	});

//навигация
    $(".header, .contactus, .contact__wrap").on("click", "a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top,
            parent = $(this).closest('.header__nav');
            if(parent.hasClass('header__nav')) {
              $('.header__link').removeClass('header__link-active');
              $(this).addClass('header__link-active');
            }
        $('body,html').animate({scrollTop: top}, 1000);
    });
});
