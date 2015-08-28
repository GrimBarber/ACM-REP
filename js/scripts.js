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
			
		})
	
		
		
	}

});


