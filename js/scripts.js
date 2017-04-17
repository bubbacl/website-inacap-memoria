jQuery(document).ready(function($){
	
	$("html, .acerca-detalle, .equipo-detalle").niceScroll();
	
	$('.menu-principal a, .inicio .scroll a, .menu-footer a, .contenedor-menu .menu a:not(".pdf"), .subir a').click(function(e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - $('#header').height()
		}, 500);
		menu(true);
	});
	
	$('#header .menu-burger a').click(function(e) {
		e.preventDefault();
		if($(this).hasClass('seleccionado')){
			$(this).removeClass('seleccionado');
		}else{
			$(this).addClass('seleccionado');
		}
		menu();
    });
	
	/*$('.menu-principal').waypoint(function(direction){
		if(direction === 'down'){
			$('.menu-burger').removeClass('fadeOut').addClass('fadeIn');
		}else{
			$('.menu-burger').removeClass('fadeIn').addClass('fadeOut');
			menu(true);
		}
	},{ offset: 0})*/
	
	$('#inicio').waypoint(function(direction){
		var aIn = $('.memoria').data('ain');
		var aOut = $('.memoria').data('aout');
		if(direction === 'down'){
			$('#header .memoria').addClass(aIn).removeClass(aOut);
		}else{
			$('#header .memoria').removeClass(aIn).addClass(aOut);
		}
	},{ offset: '-50%'})
	
	/*QUIENES SOMOS*/
	$('.acerca a, .acerca-detalle .cerrar').click(function(e) {
        e.preventDefault();
		$('.equipo').toggle();
		$('.acerca-detalle').toggle();
    });
	$('.equipo a, .equipo-detalle .cerrar').click(function(e) {
        e.preventDefault();
		$('.acerca').toggle();
		$('.equipo-detalle').toggle();
    });
	
	/*ESTRATEGIAS*/
	var eContainer = $('.contenedor-estrategias');
	eContainer.on('click','.estrategia-single',function(e){
		eContainer.addClass('estrategias-abierto');
		var eSeleccionada = $(this);
		eSeleccionada.addClass('seleccionado');
		e.stopPropagation();
		
		var eVisible =  eContainer.find('.seleccionado').children('.estrategia-detalle'),
			windowHeight = eContainer.height();

		eVisible.animate({'scrollTop': windowHeight}, 300);
	});
	$('.contenedor-estrategias .bajar').click(function(e) {
		e.preventDefault();
		var eVisible =  eContainer.find('.seleccionado').children('.estrategia-detalle'),
			windowHeight = eContainer.height();
		eVisible.animate({'scrollTop': windowHeight}, 300);
	});
	
	$('.contenedor-estrategias .cerrar').click(function(e) {
		e.preventDefault();
		if(eContainer.hasClass('estrategias-abierto')){
			eContainer.removeClass('estrategias-abierto').find('.seleccionado').removeClass('seleccionado');
		}
		e.stopPropagation();
	});
});

function menu(mostrar){
	if($('#contenedor').hasClass('mostrar-menu') || mostrar){
		$('#contenedor').removeClass('mostrar-menu');
		$('#header .menu-burger a').removeClass('seleccionado');
		$('.logo50').css({'opacity':1, 'pointer-events':'none'});
	}else{
		$('#contenedor').addClass('mostrar-menu');
		$('.logo50').css('opacity',0);
	}
}