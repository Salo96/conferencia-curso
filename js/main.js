(function(){
    "use strict"

    var regalo = document.getElementById('regalo');
    document.addEventListener('DOMContentLoaded', function(){
        
        // campos datos usuarios
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var email = document.getElementById('email');

        // campos pases
        var pase_dia = document.getElementById('pase_dia');
        var pase_dosdias = document.getElementById('pase_dosdias');
        var pase_completo = document.getElementById('pase_completo');

        // botones y divs
        var calcular = document.getElementById('calcular');
        var errorDiv = document.getElementById('error');
        var botonRegistro = document.getElementById('btnRegistro');
        var lista_producto = document.getElementById('lista-producto');
        var suma = document.getElementById('suma-total');

        // extras
        var camisas=document.getElementById('camisa_evento');
        var etiquetas=document.getElementById('etiquetas');
     
        if (document.getElementById('calcular'))
        {

            // eventos
            calcular.addEventListener('click', calcularMontos); 
            pase_dia.addEventListener('blur', MostrarDias);
            pase_dosdias.addEventListener('blur', MostrarDias);
            pase_completo.addEventListener('blur', MostrarDias);
        
       
            // validaciones
            nombre.addEventListener('blur', validarCampo);
            apellido.addEventListener('blur', validarCampo);
            email.addEventListener('blur', validarCampo);
            email.addEventListener('blur', validarMail);
            function validarCampo(){
                if(this.value==''){
                    errorDiv.style.display='block';
                    errorDiv.innerHTML="este campo es obligatorio";
                    this.style.border='1px solid red';
                    errorDiv.style.border='1px solid red'
                } else {
                    errorDiv.style.display='none';
                    this.style.border='1px solid #cccccc';
                }
            }

            function validarMail(){
                if(this.value.indexOf ("@") > -1){
                    errorDiv.style.display='none';
                    this.style.border='1px solid #cccccc';
                }else {
                    errorDiv.style.display='block';
                    errorDiv.innerHTML="debe obtener al menos un @";
                    this.style.border='1px solid red';
                    errorDiv.style.border='1px solid red'
                }
            }

            function calcularMontos(event){
                event.preventDefault();
                if (regalo.value ===""){
                    // console.log(regalo.value);
                    alert("Debes de elegir un regalo");
                    regalo.focus();
                } else {
                    var boletosDia = parseInt(pase_dia.value, 10)||0,
                    boletos2Dias = parseInt (pase_dosdias.value, 10)||0,
                    boletoCompleto = parseInt (pase_completo.value, 10)||0,
                    cantCamisas = parseInt (camisas.value, 10)||0,
                    cantEtiquetas = parseInt (etiquetas.value, 10)||0;

                    var totalPagar= (boletosDia*30)+(boletos2Dias*45)+(boletoCompleto*50) + ((cantCamisas*10)*.93) + (cantEtiquetas*2);
                    
                    var listadoProducto = [];

                    // condicion de pases
                    if(boletosDia>=1){
                        listadoProducto.push(boletosDia + ' Pases por dias');
                    }
                    if(boletos2Dias>=1){
                        listadoProducto.push(boletos2Dias + ' Pases por 2 dias');
                    }
                    if(boletoCompleto>=1){
                        listadoProducto.push(boletoCompleto + ' pases Completo');
                    }

                    // condicion  camisas y etiquetas
                    if(cantCamisas>=1){
                        listadoProducto.push(cantCamisas + ' camisas');
                    }
                    if(cantEtiquetas>=1){
                        listadoProducto.push(cantEtiquetas + ' etiquetas');
                    }
                    
                    lista_producto.style.display="block";
                    lista_producto.innerHTML="";
                    for (var i=0; i<listadoProducto.length; i++){
                        lista_producto.innerHTML += listadoProducto[i]+'<br/>';
                    }

                    suma.innerHTML= " $"+totalPagar.toFixed(2);
                }
            }

            function MostrarDias(){
                var boletosDia = parseInt(pase_dia.value, 10)||0,
                boletos2Dias = parseInt (pase_dosdias.value, 10)||0,
                boletoCompleto = parseInt (pase_completo.value, 10)||0;

                var diasElegidos = []

                if (boletosDia>0){
                    diasElegidos.push('viernes');
                    console.log(diasElegidos);
                }
                if (boletos2Dias>0){
                    diasElegidos.push('viernes', 'sabado');
                    console.log(diasElegidos);
                }
                if (boletoCompleto>0){
                    diasElegidos.push('viernes', 'sabado', 'domingo');
                    console.log(diasElegidos);
                }

                for(var i=0; i<diasElegidos.length; i++){
                    document.getElementById(diasElegidos[i]).style.display='block';
                }
            }
        } //cierre del if
    });//DOMContentLoaded
  

})();

$(function(){

    // lettering
    $('.nombre-sitio').lettering();

    // menu fijo
    var windowsHeight = $(window).height();
    var barraAltura = $('.barra').innerHeight();

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll>windowsHeight){
            $('.barra').addClass('fixed');
            $('body').css ({'margin-top': barraAltura+'px'});
        } else {
            $('.barra').removeClass('fixed');
            $('body').css ({'margin-top': '0px'});
        }
    });

    // menu responsive

    $('.menu-movil').on('click', function(){
        $('.navegacion-principal').slideToggle();
    });

    // programa de conferencias 
    $('.programa-evento .info-curso:first').show();
    $('.menu-programa a:first').addClass ('activo');
   
    $('.menu-programa a').on ('click', function(){
        $('.menu-programa a').removeClass ('activo');
        $(this).addClass('activo');
        $('.ocultar').hide();

        var enlace = $(this).attr('href');
        $(enlace).fadeIn(1000);

        return false;
    });

    //animaciones para los numeros

    $('.resumen-evento li:nth-child(1) p').animateNumber({number: 6}, 1200);
    $('.resumen-evento li:nth-child(2) p').animateNumber({number: 15}, 1200);
    $('.resumen-evento li:nth-child(3) p').animateNumber({number: 3}, 1500);
    $('.resumen-evento li:nth-child(4) p').animateNumber({number: 9}, 1500);

    // cuenta regresiva

    $('.cuenta-regresiva').countdown('2019/03/01 00:00:00', function(event){
        $('#dias').html(event.strftime('%D'));
        $('#horas').html(event.strftime('%H'));
        $('#minutos').html(event.strftime('%M'));
        $('#segundos').html(event.strftime('%S'));
    });
});