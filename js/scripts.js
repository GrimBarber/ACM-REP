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
	
	/*MASK*/
	jQuery(function($) {
		$("#date").mask("99/99/9999",{placeholder:"mm/dd/yyyy"});
		$(".phone-mask").mask("(9 9 9) 9 9 9-9 9 9 9");
		$("#tin").mask("99-9999999");
		$("#ssn").mask("999-99-9999");
	});
	
	
//	$('.map-button').click(function() {
//		$('.hidden-popup').not($(this).find('.hidden-popup')).fadeOut(250)
//		$(this).parent().find('.hidden-popup').fadeToggle(250)
//	});
//	$("body").on("click",function(e) {
//		if (!$(e.target).hasClass("scheme-item") && !$(e.target).hasClass("rounded-background") && 			!$(e.target).parents().hasClass("scheme-item") && !$(e.target).parents().hasClass("rounded-background")) {
//			$(".hidden-popup").fadeOut(250)
//		}
//		else if ($(e.target).hasClass("popup-close-button")) {
//			$(".hidden-popup").fadeOut(250)
//		}
//	});

	$(".hidden-popup .popup-close-button").on("click",function() {
		$(this).parents(".hidden-popup").stop().fadeOut(250)
	});
	
	var timerSecond;

	$(".scheme-item").on("mouseover",function() {
		$(".scheme-item").not($(this)).find(".hidden-popup").stop().fadeOut(250);
		clearTimeout(timerSecond);
		$(this).find(".hidden-popup").stop().fadeIn(250);
	}).on("mouseout",function() {
		var obj = $(this);
		timerSecond = setTimeout(function() {
			obj.find(".hidden-popup").stop().fadeOut(250);
		},500)
	});
	
	var timerThird;
	
	$(".small-images-holder").on("mouseover",function() {
		$(".small-images-holder").not($(this)).find(".hidden-popup").stop().fadeOut(250);
		clearTimeout(timerThird);
		$(this).find(".hidden-popup").stop().fadeIn(250);
	}).on("mouseout",function() {
		var objSecond = $(this);
		timerThird = setTimeout(function() {
			objSecond.find(".hidden-popup").stop().fadeOut(250);
		},500)
	});
	
//	$(".order-item-button").click(function() {
//		$("#item-id").html($(this).parents(".item-container").find(".model-name a").html());
//	})
	
	$(".order-item-button").click(function() {
		$("#item-id").html($(this).data("name"));
		$("#name").val($(this).data("name"));
		$("#edit_url").val($(this).data("link"));
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
	
	var timer;
	
	$(".menu-wrapper").on("mouseover",function() {
		clearTimeout(timer);
		$(".services-option").stop().fadeIn(250);
	}).on("mouseout",function() {
		timer = setTimeout(function() {
			$(".services-option").stop().fadeOut(250);
		},500)
	});
	
	// $(".services-button").on("mouseover",function() {
		// $(".services-option").fadeIn(250)
	// });
	// $("body").on("mouseover",function(e) {
		// if (!$(e.target).hasClass("services-descr") && !$(e.target).hasClass("services-option") && !$(e.target).hasClass("services-button") && !$(e.target).parents().hasClass("services-option") && !$(e.target).parents().hasClass("services-button")) {
			// $(".services-option").fadeOut(250)
		// }
		// console.log(e.target)
	// })
	
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




