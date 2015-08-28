$(window).scroll(function() {
	var scrollPos =$(window).scrollTop();
	if (scrollPos > 100) {
		$(".inv-phone-holder").fadeIn(250);
	} else {
		$(".inv-phone-holder").fadeOut(250);
	}
});


$(document).ready(function() {
	
	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:0,
		nav:true,
		autoWidth:false,
		items:5,
		responisve: true,
		navText: false,
		slideBy: 3
	});
	
	
	$('.map-button').click(function() {
		$('.hidden-popup').not($(this).find('.hidden-popup')).fadeOut(250)
		$(this).parent().find('.hidden-popup').fadeToggle(250)
	});
	$("body").on("click",function(e) {
		if (!$(e.target).hasClass("scheme-item") && !$(e.target).hasClass("rounded-background") && 			!$(e.target).parents().hasClass("scheme-item") && !$(e.target).parents().hasClass("rounded-background")) {
			$(".hidden-popup").fadeOut(250)
		}
		else if ($(e.target).hasClass("popup-close-button")) {
			$(".hidden-popup").fadeOut(250)
		}
	});
	
	$(".order-item-button").click(function() {
		$("#item-id").html($(".model-name a").html());
	})
	

	// Формы
	
	$("input:text, input:password, textarea").each(function() {
    if ($(this).val()) {
      $(this).prev(".placeholder").hide();
    }
  });
	

	$(".placeholder, input, textarea").on("click keydown",function() {
		var item = $(this);
		
		if (item.parent().find(".placeholder").length) {
			var placeholder = item.parent().find(".placeholder");

			if (!item.hasClass("phone") && !item.hasClass("form-date")) {
				placeholder.hide();
			}
			
		}
		
	});
	
	$("body").on("blur","input, textarea",function() {
		var item = $(this);
		
		if (item.parent().find(".placeholder").length) {
			var placeholder = item.parent().find(".placeholder");

			if (!item.val() || (item.hasClass("masked") && ! /\d/.test(item.val()))) {
				placeholder.show();
			}
			
		}
		
	});
	
	$(".services-button").click(function() {
		$(".services-option").fadeToggle(250)
	});
	$("body").on("click",function(e) {
		if (!$(e.target).hasClass("services-option") && !$(e.target).hasClass("services-button") && !$(e.target).parents().hasClass("services-option") && !$(e.target).parents().hasClass("services-button")) {
			$(".services-option").fadeOut(250)
		}
		console.log(e.target)
	})
	
	$("body").on("click",".placeholder",function(e) {
		if ($(this).parent().find("input").length) {
			$(this).parent().find("input").trigger("focus");
		}
		if ($(this).parent().find("textarea").length) {
			$(this).parent().find("textarea").trigger("focus");
		}
	})

  $('.floating-answer-holder').click(function(){
		$(this).find('.hidden-description').slideToggle("slow");
		$(this).find('.floating-answer').toggleClass("visible");;
	});
	
	if ($(".carousel").length) {
		
		$(".carousel").each(function() {
			var carObject = $(this);
			
			var totalItems = carObject.find('.item').length;
			var currentIndex = carObject.find('.div.active').index() + 1;
			
			carObject.prev('.calculative').find('.shifting-numeral').html('1/'+totalItems+'');

			carObject.on('slid.bs.carousel', function() {
				currentIndex = carObject.find('div.active').index() + 1;
				carObject.prev('.calculative').find('.shifting-numeral').html(''+currentIndex+'/'+totalItems+'');
			});
			
		});	
	}
	
});




