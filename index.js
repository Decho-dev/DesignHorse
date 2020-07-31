$(document).ready(function() {

	$('body').keydown(function(e) {
		console.log(e.which);
	})

	$('.section-body li').click(function() {
		$('.section-body li').not(this).stop().find('p').hide()
		$(this).find('p').stop().slideToggle();
	})
	
	$('.categories').css({'position': 'absolute', 'display': 'block'});
	$('.categories').hide();
	$('.arrow').click(function(event) {
		event.preventDefault();
		$('.categories').stop().slideToggle();
	})

	$('.top').click(function() {
		$('html').animate({scrollTop: 0}, 'slow')
	})
	let bodyWidth = $('body').css('width');
	if (bodyWidth <= '600px') {
		
	}else{
		$('.header-container').show();
	}

	$('.menu-icon').click(function() {
		$('.header-container').stop().slideToggle();
	})
	$('.second-con ul li:last').css('border', 'none');
	$('.third-con ul li:last').css('border', 'none')

	$('input[type=email]').blur(function() {
		let value = $(this).val()
		if(value.includes('@') && value.length > 5){
			$(this).css('border', '2px solid green')
		}else{
			$(this).css('border', '2px solid red')
		}
	})
	$('input[type=text]').blur(function() {
		let value = $(this).val()
		if(value.length > 5){
			$(this).css('border', '2px solid green')
		}else{
			$(this).css('border', '2px solid red')
		}
	})
	$('input[type=submit]').click(function(event){
		let valueName = $('input[type=text]').val();
		valueName.trim();
		if (valueName == '' || valueName.length < 5) {
			$('input[type=text]').css('border', '2px solid red')
			event.preventDefault()
		}

		let valueEmail = $('input[type=email]').val()
		if(valueEmail.includes('@') && valueEmail.length > 5){
			$('input[type=email]').css('border', '2px solid green')
		}else{
			$('input[type=email]').css('border', '2px solid red')
			event.preventDefault();
		}

		let a = $('.contest a');
		for (let i = 0; i < a.length; i++) {
			let oneItem = a[i];
			$(oneItem).css('color', 'black');
			if ($(oneItem).text() == valueName) {
				$(oneItem).css('color', 'green');
				event.preventDefault();
			}
			console.log(oneItem)
		}
	})

	$('.lightbox').hide();
	$('.examples .ex-body img').click(function() {
		$('.lightbox').stop().fadeIn(200);
		let src = $(this).attr('src');
		let lightboxImg = $('.lightbox img');
		lightboxImg.attr('src', src);
		$('.lightbox').click(function() {
			$(this).stop().fadeOut(200)
		})
	})
})