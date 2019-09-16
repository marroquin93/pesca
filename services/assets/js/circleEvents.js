// var tl = new TimelineMax();
// var tl2 = new TimelineMax();
// var clicked = false;

// var boton = document.getElementById("menuCircle");
// // var disabled = false;
// boton.addEventListener("click", bloquea, false);

// function bloquea() {
//     if (boton.disabled == false) {
//         boton.disabled = true;

//         setTimeout(function() {
//             boton.disabled = false;
//         }, 1000)
//     }
// }

// $(".menuCircle").click(function(event) {

//     if (clicked == false) {

//         TweenMax.to(".textContainer", 0, { css: { display: "block" }, delay: 0 });
//         TweenMax.to(".containerService1", 0.5, { opacity: 1, rotation: 360, transformOrigin: "50% 50%", delay: 0 });
//         TweenMax.to(".containerService2", 0.5, { opacity: 1, rotation: 360, transformOrigin: "50% 50%", delay: 0.2 });
//         TweenMax.to(".containerService3", 0.5, { opacity: 1, rotation: 360, transformOrigin: "50% 50%", delay: 0.4 });
//         TweenMax.to(".containerService4", 0.5, { opacity: 1, rotation: 360, transformOrigin: "50% 50%", delay: 0.6 });
//         TweenMax.to(".containerService5", 0.5, { opacity: 1, rotation: 360, transformOrigin: "50% 50%", delay: 0.8 });
//         TweenMax.to(".fa-angular,#s1", 0.5, { opacity: 1, delay: 1 });
//         TweenMax.to(".fa-avianex,#s2", 0.5, { opacity: 1, delay: 1 });
//         TweenMax.to(".fa-bell,#s3", 0.5, { opacity: 1, delay: 1 });
//         TweenMax.to(".fa-btc,#s4", 0.5, { opacity: 1, delay: 1 });
//         TweenMax.to(".fa-calendar-check,#s5", 0.5, { opacity: 1, delay: 1 });
//         clicked = true;
//     } else if (clicked == true) {
//         TweenMax.to(".containerService1", 0.5, { opacity: 0, rotation: 0, transformOrigin: "50% 50%", delay: 0.5 });
//         TweenMax.to(".containerService2", 0.5, { opacity: 0, rotation: 0, transformOrigin: "50% 50%", delay: 0.5 });
//         TweenMax.to(".containerService3", 0.5, { opacity: 0, rotation: 0, transformOrigin: "50% 50%", delay: 0.5 });
//         TweenMax.to(".containerService4", 0.5, { opacity: 0, rotation: 0, transformOrigin: "50% 50%", delay: 0.5 });
//         TweenMax.to(".containerService5", 0.5, { opacity: 0, rotation: 0, transformOrigin: "50% 50%", delay: 0.5 });
//         TweenMax.to(".fa-angular,#s1", 0.5, { opacity: 0, delay: 0 });
//         TweenMax.to(".fa-avianex,#s2", 0.5, { opacity: 0, delay: 0 });
//         TweenMax.to(".fa-bell,#s3", 0.5, { opacity: 0, delay: 0 });
//         TweenMax.to(".fa-btc,#s4", 0.5, { opacity: 0, delay: 0 });
//         TweenMax.to(".fa-calendar-check,#s5", 0.5, { opacity: 0, delay: 0 });
//         TweenMax.to(".textContainer", 0, { css: { display: "none" }, delay: 0.6 });
//         clicked = false;
//     }

// });


// /*Curveando textos*/

// $(".miniCircle p").arctext({ radius: 31, rotate: true });
// $("#s1").arctext({ radius: 100, rotate: true });
// $("#s2").arctext({ radius: 100, rotate: true });
// $("#s3").arctext({ radius: 100, rotate: true });
// $("#s4").arctext({ radius: 100, rotate: true, dir: -1 });
// $("#s5").arctext({ radius: 100, rotate: true, dir: -1 });
// /*end Curveando*/

// /*Enlaces*/

// $(".textContainer a").click(function() {
//     TweenMax.to(".containerService1", 0.5, { opacity: 0, rotation: 0, transformOrigin: "50% 50%", delay: 0.5 });
//     TweenMax.to(".containerService2", 0.5, { opacity: 0, rotation: 0, transformOrigin: "50% 50%", delay: 0.5 });
//     TweenMax.to(".containerService3", 0.5, { opacity: 0, rotation: 0, transformOrigin: "50% 50%", delay: 0.5 });
//     TweenMax.to(".containerService4", 0.5, { opacity: 0, rotation: 0, transformOrigin: "50% 50%", delay: 0.5 });
//     TweenMax.to(".containerService5", 0.5, { opacity: 0, rotation: 0, transformOrigin: "50% 50%", delay: 0.5 });
//     TweenMax.to(".fa-angular,#s1", 0.5, { opacity: 0, delay: 0 });
//     TweenMax.to(".fa-avianex,#s2", 0.5, { opacity: 0, delay: 0 });
//     TweenMax.to(".fa-bell,#s3", 0.5, { opacity: 0, delay: 0 });
//     TweenMax.to(".fa-btc,#s4", 0.5, { opacity: 0, delay: 0 });
//     TweenMax.to(".fa-calendar-check,#s5", 0.5, { opacity: 0, delay: 0 });
//     TweenMax.to(".textContainer", 0, { css: { display: "none" }, delay: 0.6 });
//     clicked = false;
// });


// var alto = $(window).height();
// var ancho = ((((((((($(window).width() / 2) / 2) / 2) / 2) / 2) / 2) / 2) / 2) / 2) / 2;
// // alert(ancho);
// var serviceClicked = false;
// $(".textContainer .e1").click(function() {
// 	if (serviceClicked == false) {
//     TweenMax.to(".slider-text h1", 0.2, { css: { opacity: 0 } });
//     TweenMax.to(".slider-text h1", 0, { css: { display: "none" }, delay: 0.2 });
//     TweenMax.to(".ballEffect", 0.5, { x: "" + ancho + "px", ease: Linear.easeNone });
//     TweenMax.to(".ballEffect", 0.2, { y: -200, ease: Power2.easeNone, repeat: 1, yoyo: true });
//     TweenMax.to(".ballEffect", 0.2, { ease: Linear.easeOut, y: -50, delay: 0.6 });
//     TweenMax.to(".ballEffect", 0.2, { ease: Linear.easeOut, y: 0, delay: 0.9 });
//     TweenMax.to(".ballEffect", 0.5, { css: { width: "800px", height: "800px" }, delay: 1 });
//     TweenMax.to(".ballEffect", 0, { css: { opacity: 0 }, delay: 1.5 });
//     TweenMax.to(".ballEffect", 0, { css: { width: "10px", height: "10px", transform: "translate(-630px, -50px)" }, delay: 1.6 });
//     TweenMax.to(".slider-text", 0.5, { css: { backgroundColor: 'rgba(255, 255, 255, 0.5) !important' }, delay: 1.5 });
//     TweenMax.to(".jaulaContainer", 0, { css: { visibility: "visible"  }, delay: 1.5 });
//     TweenMax.to(".jaulaContainer", 0, { css: { opacity: 1 }, delay: 1.6 });

//     $(".ballEffect").css({
//         "opacity": "1"
//     });
//     serviceClicked = true;
// 	}
// 	else if (serviceClicked == true) {
// 	TweenMax.to(".slider-text", 0.5, { css: { backgroundColor: 'rgba(255, 255, 255, 0) !important' }, delay: 0 });
// 	TweenMax.to(".slider-text .row", 0.2, { css: { visibility: "hidden"  } });
//     TweenMax.to(".slider-text .row", 0.2, { css: { opacity: 0 } });
// 	TweenMax.to(".ballEffectOut",0.5,{ css:{backgroundColor: "#fff", width: "10px",height: "10px",left: "50%", opacity: 1}, y: -50, ease: Linear.easeOut});
// 	TweenMax.to(".ballEffectOut",0.5,{y: 500, delay: 0.5});
// 	TweenMax.to(".ballEffectOut",0,{ css:{backgroundColor: "transparent", width: "800px",height: "800px",left: "20%", opacity: 0}, y: -50, ease: Linear.easeOut, delay: 1});
// 	TweenMax.to(".ballEffectOut",0,{y: 0, delay: 1});
// 	TweenMax.to(".slider-text h1", 0.2, { css: { opacity: 0 } });
//     TweenMax.to(".slider-text h1", 0, { css: { display: "none" }, delay: 0.2 });
//     TweenMax.to(".ballEffect", 0.5, { x: "" + ancho + "px", ease: Linear.easeNone, delay: 0.5 });
//     TweenMax.to(".ballEffect", 0.2, { y: -200, ease: Power2.easeNone, repeat: 1, yoyo: true, delay: 0.5 });
//     TweenMax.to(".ballEffect", 0.2, { ease: Linear.easeOut, y: -50, delay: 1.1 });
//     TweenMax.to(".ballEffect", 0.2, { ease: Linear.easeOut, y: 0, delay: 1.2 });
//     TweenMax.to(".ballEffect", 0.5, { css: { width: "800px", height: "800px" }, delay: 2 });
//     TweenMax.to(".ballEffect", 0, { css: { opacity: 0 }, delay: 2.5 });
//     TweenMax.to(".ballEffect", 0, { css: { width: "10px", height: "10px", transform: "translate(-630px, -50px)" }, delay: 2.6 });
//     TweenMax.to(".slider-text", 0.5, { css: { backgroundColor: 'rgba(255, 255, 255, 0.5) !important' }, delay: 2.5 });
//     TweenMax.to(".jaulaContainer", 0, { css: { visibility: "visible"  }, delay: 2.5 });
//     TweenMax.to(".jaulaContainer", 0, { css: { opacity: 1 }, delay: 2.6 });

//     $(".ballEffect").css({
//         "opacity": "1"
//     });
//     serviceClicked = true;

// 	}


// });
// $(".textContainer .e2").click(function() {
// 	if (serviceClicked == false) {
//     TweenMax.to(".slider-text h1", 0.2, { css: { opacity: 0 } });
//     TweenMax.to(".slider-text h1", 0, { css: { display: "none" }, delay: 0.2 });
//     TweenMax.to(".ballEffect", 0.5, { x: "" + ancho + "px", ease: Linear.easeNone });
//     TweenMax.to(".ballEffect", 0.2, { y: -200, ease: Power2.easeNone, repeat: 1, yoyo: true });
//     TweenMax.to(".ballEffect", 0.2, { ease: Linear.easeOut, y: -50, delay: 0.6 });
//     TweenMax.to(".ballEffect", 0.2, { ease: Linear.easeOut, y: 0, delay: 0.9 });
//     TweenMax.to(".ballEffect", 0.5, { css: { width: "800px", height: "800px" }, delay: 1 });
//     TweenMax.to(".ballEffect", 0, { css: { opacity: 0 }, delay: 1.5 });
//     TweenMax.to(".ballEffect", 0, { css: { width: "10px", height: "10px", transform: "translate(-630px, -50px)" }, delay: 1.6 });
//     TweenMax.to(".slider-text", 0.5, { css: { backgroundColor: 'rgba(255, 255, 255, 0.5) !important' }, delay: 1.5 });
//     TweenMax.to(".redesContainer", 0, { css: { visibility: "visible"  }, delay: 1.5 });
//     TweenMax.to(".redesContainer", 0, { css: { opacity: 1 }, delay: 1.6 });

//     $(".ballEffect").css({
//         "opacity": "1"
//     });
//     serviceClicked = true;
// 	}
// 	else if (serviceClicked == true) {
// 	TweenMax.to(".slider-text", 0.5, { css: { backgroundColor: 'rgba(255, 255, 255, 0) !important' }, delay: 0 });
// 	TweenMax.to(".slider-text .row", 0.2, { css: { visibility: "hidden"} });
//     TweenMax.to(".slider-text .row", 0.2, { css: { opacity: 0 } });
// 	TweenMax.to(".ballEffectOut",0.5,{ css:{backgroundColor: "#fff", width: "10px",height: "10px",left: "50%", opacity: 1}, y: -50, ease: Linear.easeOut});
// 	TweenMax.to(".ballEffectOut",0.5,{y: 500, delay: 0.5});
// 	TweenMax.to(".ballEffectOut",0,{ css:{backgroundColor: "transparent", width: "800px",height: "800px",left: "20%", opacity: 0}, y: -50, ease: Linear.easeOut, delay: 1});
// 	TweenMax.to(".ballEffectOut",0,{y: 0, delay: 1});
// 	TweenMax.to(".slider-text h1", 0.2, { css: { opacity: 0 } });
//     TweenMax.to(".slider-text h1", 0, { css: { display: "none" }, delay: 0.2 });
//     TweenMax.to(".ballEffect", 0.5, { x: "" + ancho + "px", ease: Linear.easeNone, delay: 0.5 });
//     TweenMax.to(".ballEffect", 0.2, { y: -200, ease: Power2.easeNone, repeat: 1, yoyo: true, delay: 0.5 });
//     TweenMax.to(".ballEffect", 0.2, { ease: Linear.easeOut, y: -50, delay: 1.1 });
//     TweenMax.to(".ballEffect", 0.2, { ease: Linear.easeOut, y: 0, delay: 1.2 });
//     TweenMax.to(".ballEffect", 0.5, { css: { width: "800px", height: "800px" }, delay: 2 });
//     TweenMax.to(".ballEffect", 0, { css: { opacity: 0 }, delay: 2.5 });
//     TweenMax.to(".ballEffect", 0, { css: { width: "10px", height: "10px", transform: "translate(-630px, -50px)" }, delay: 2.6 });
//     TweenMax.to(".slider-text", 0.5, { css: { backgroundColor: 'rgba(255, 255, 255, 0.5) !important' }, delay: 2.5 });
//     TweenMax.to(".redesContainer", 0, { css: { visibility: "visible"  }, delay: 2.5 });
//     TweenMax.to(".redesContainer", 0, { css: { opacity: 1 }, delay: 2.6 });

//     $(".ballEffect").css({
//         "opacity": "1"
//     });
//     serviceClicked = true;

// 	}

    
// });
// $(".textContainer .e3").click(function() {

// 	if (serviceClicked == false) {
//     TweenMax.to(".slider-text h1", 0.2, { css: { opacity: 0 } });
//     TweenMax.to(".slider-text h1", 0, { css: { display: "none" }, delay: 0.2 });
//     TweenMax.to(".ballEffect", 0.5, { x: "" + ancho + "px", ease: Linear.easeNone });
//     TweenMax.to(".ballEffect", 0.2, { y: -200, ease: Power2.easeNone, repeat: 1, yoyo: true });
//     TweenMax.to(".ballEffect", 0.2, { ease: Linear.easeOut, y: -50, delay: 0.6 });
//     TweenMax.to(".ballEffect", 0.2, { ease: Linear.easeOut, y: 0, delay: 0.9 });
//     TweenMax.to(".ballEffect", 0.5, { css: { width: "800px", height: "800px" }, delay: 1 });
//     TweenMax.to(".ballEffect", 0, { css: { opacity: 0 }, delay: 1.5 });
//     TweenMax.to(".ballEffect", 0, { css: { width: "10px", height: "10px", transform: "translate(-630px, -50px)" }, delay: 1.6 });
//     TweenMax.to(".slider-text", 0.5, { css: { backgroundColor: 'rgba(255, 255, 255, 0.5) !important' }, delay: 1.5 });
//     TweenMax.to(".fondeosContainer", 0, { css: { visibility: "visible" }, delay: 1.5 });
//     TweenMax.to(".fondeosContainer", 0, { css: { opacity: 1 }, delay: 1.6 });

//     $(".ballEffect").css({
//         "opacity": "1"
//     });
//     serviceClicked = true;
// 	}
// 	else if (serviceClicked == true) {
// 	TweenMax.to(".slider-text", 0.5, { css: { backgroundColor: 'rgba(255, 255, 255, 0) !important' }, delay: 0 });
// 	TweenMax.to(".slider-text .row", 0.2, { css: { visibility: "hidden"} });
//     TweenMax.to(".slider-text .row", 0.2, { css: { opacity: 0 } });
// 	TweenMax.to(".ballEffectOut",0.5,{ css:{backgroundColor: "#fff", width: "10px",height: "10px",left: "50%", opacity: 1}, y: -50, ease: Linear.easeOut});
// 	TweenMax.to(".ballEffectOut",0.5,{y: 500, delay: 0.5});
// 	TweenMax.to(".ballEffectOut",0,{ css:{backgroundColor: "transparent", width: "800px",height: "800px",left: "20%", opacity: 0}, y: -50, ease: Linear.easeOut, delay: 1});
// 	TweenMax.to(".ballEffectOut",0,{y: 0, delay: 1});
// 	TweenMax.to(".slider-text h1", 0.2, { css: { opacity: 0 } });
//     TweenMax.to(".slider-text h1", 0, { css: { display: "none" }, delay: 0.2 });
//     TweenMax.to(".ballEffect", 0.5, { x: "" + ancho + "px", ease: Linear.easeNone, delay: 0.5 });
//     TweenMax.to(".ballEffect", 0.2, { y: -200, ease: Power2.easeNone, repeat: 1, yoyo: true, delay: 0.5 });
//     TweenMax.to(".ballEffect", 0.2, { ease: Linear.easeOut, y: -50, delay: 1.1 });
//     TweenMax.to(".ballEffect", 0.2, { ease: Linear.easeOut, y: 0, delay: 1.2 });
//     TweenMax.to(".ballEffect", 0.5, { css: { width: "800px", height: "800px" }, delay: 2 });
//     TweenMax.to(".ballEffect", 0, { css: { opacity: 0 }, delay: 2.5 });
//     TweenMax.to(".ballEffect", 0, { css: { width: "10px", height: "10px", transform: "translate(-630px, -50px)" }, delay: 2.6 });
//     TweenMax.to(".slider-text", 0.5, { css: { backgroundColor: 'rgba(255, 255, 255, 0.5) !important' }, delay: 2.5 });
//     TweenMax.to(".fondeosContainer", 0, { css: { visibility: "visible" }, delay: 2.5 });
//     TweenMax.to(".fondeosContainer", 0, { css: { opacity: 1 }, delay: 2.6 });

//     $(".ballEffect").css({
//         "opacity": "1"
//     });
//     serviceClicked = true;

// 	}
    
// });
// $(".textContainer .e4").click(function() {

// 	if (serviceClicked == false) {
//     TweenMax.to(".slider-text h1", 0.2, { css: { opacity: 0 } });
//     TweenMax.to(".slider-text h1", 0, { css: { display: "none" }, delay: 0.2 });
//     TweenMax.to(".ballEffect", 0.5, { x: "" + ancho + "px", ease: Linear.easeNone });
//     TweenMax.to(".ballEffect", 0.2, { y: -200, ease: Power2.easeNone, repeat: 1, yoyo: true });
//     TweenMax.to(".ballEffect", 0.2, { ease: Linear.easeOut, y: -50, delay: 0.6 });
//     TweenMax.to(".ballEffect", 0.2, { ease: Linear.easeOut, y: 0, delay: 0.9 });
//     TweenMax.to(".ballEffect", 0.5, { css: { width: "800px", height: "800px" }, delay: 1 });
//     TweenMax.to(".ballEffect", 0, { css: { opacity: 0 }, delay: 1.5 });
//     TweenMax.to(".ballEffect", 0, { css: { width: "10px", height: "10px", transform: "translate(-630px, -50px)" }, delay: 1.6 });
//     TweenMax.to(".slider-text", 0.5, { css: { backgroundColor: 'rgba(255, 255, 255, 0.5) !important' }, delay: 1.5 });
//     TweenMax.to(".equiposContainer", 0, { css: { visibility: "visible" }, delay: 1.5 });
//     TweenMax.to(".equiposContainer", 0, { css: { opacity: 1 }, delay: 1.6 });

//     $(".ballEffect").css({
//         "opacity": "1"
//     });
//     serviceClicked = true;
// 	}
// 	else if (serviceClicked == true) {
// 	TweenMax.to(".slider-text", 0.5, { css: { backgroundColor: 'rgba(255, 255, 255, 0) !important' }, delay: 0 });
// 	TweenMax.to(".slider-text .row", 0.2, { css: { visibility: "hidden" } });
//     TweenMax.to(".slider-text .row", 0.2, { css: { opacity: 0 } });
// 	TweenMax.to(".ballEffectOut",0.5,{ css:{backgroundColor: "#fff", width: "10px",height: "10px",left: "50%", opacity: 1}, y: -50, ease: Linear.easeOut});
// 	TweenMax.to(".ballEffectOut",0.5,{y: 500, delay: 0.5});
// 	TweenMax.to(".ballEffectOut",0,{ css:{backgroundColor: "transparent", width: "800px",height: "800px",left: "20%", opacity: 0}, y: -50, ease: Linear.easeOut, delay: 1});
// 	TweenMax.to(".ballEffectOut",0,{y: 0, delay: 1});
// 	TweenMax.to(".slider-text h1", 0.2, { css: { opacity: 0 } });
//     TweenMax.to(".slider-text h1", 0, { css: { display: "none" }, delay: 0.2 });
//     TweenMax.to(".ballEffect", 0.5, { x: "" + ancho + "px", ease: Linear.easeNone, delay: 0.5 });
//     TweenMax.to(".ballEffect", 0.2, { y: -200, ease: Power2.easeNone, repeat: 1, yoyo: true, delay: 0.5 });
//     TweenMax.to(".ballEffect", 0.2, { ease: Linear.easeOut, y: -50, delay: 1.1 });
//     TweenMax.to(".ballEffect", 0.2, { ease: Linear.easeOut, y: 0, delay: 1.2 });
//     TweenMax.to(".ballEffect", 0.5, { css: { width: "800px", height: "800px" }, delay: 2 });
//     TweenMax.to(".ballEffect", 0, { css: { opacity: 0 }, delay: 2.5 });
//     TweenMax.to(".ballEffect", 0, { css: { width: "10px", height: "10px", transform: "translate(-630px, -50px)" }, delay: 2.6 });
//     TweenMax.to(".slider-text", 0.5, { css: { backgroundColor: 'rgba(255, 255, 255, 0.5) !important' }, delay: 2.5 });
//     TweenMax.to(".equiposContainer", 0, { css: { visibility: "visible" }, delay: 2.5 });
//     TweenMax.to(".equiposContainer", 0, { css: { opacity: 1 }, delay: 2.6 });

//     $(".ballEffect").css({
//         "opacity": "1"
//     });
//     serviceClicked = true;

// 	}
    
// });
// $(".textContainer .e5").click(function() {

// 	if (serviceClicked == false) {
//     TweenMax.to(".slider-text h1", 0.2, { css: { opacity: 0 } });
//     TweenMax.to(".slider-text h1", 0, { css: { display: "none" }, delay: 0.2 });
//     TweenMax.to(".ballEffect", 0.5, { x: "" + ancho + "px", ease: Linear.easeNone });
//     TweenMax.to(".ballEffect", 0.2, { y: -200, ease: Power2.easeNone, repeat: 1, yoyo: true });
//     TweenMax.to(".ballEffect", 0.2, { ease: Linear.easeOut, y: -50, delay: 0.6 });
//     TweenMax.to(".ballEffect", 0.2, { ease: Linear.easeOut, y: 0, delay: 0.9 });
//     TweenMax.to(".ballEffect", 0.5, { css: { width: "800px", height: "800px" }, delay: 1 });
//     TweenMax.to(".ballEffect", 0, { css: { opacity: 0 }, delay: 1.5 });
//     TweenMax.to(".ballEffect", 0, { css: { width: "10px", height: "10px", transform: "translate(-630px, -50px)" }, delay: 1.6 });
//     TweenMax.to(".slider-text", 0.5, { css: { backgroundColor: 'rgba(255, 255, 255, 0.5) !important' }, delay: 1.5 });
//     TweenMax.to(".estanquesContainer", 0, { css: { visibility: "visible"  }, delay: 1.5 });
//     TweenMax.to(".estanquesContainer", 0, { css: { opacity: 1 }, delay: 1.6 });

//     $(".ballEffect").css({
//         "opacity": "1"
//     });
//     serviceClicked = true;
// 	}
// 	else if (serviceClicked == true) {
// 	TweenMax.to(".slider-text", 0.5, { css: { backgroundColor: 'rgba(255, 255, 255, 0) !important' }, delay: 0 });
// 	TweenMax.to(".slider-text .row", 0.2, { css: { visibility: "hidden" } });
//     TweenMax.to(".slider-text .row", 0.2, { css: { opacity: 0 } });
// 	TweenMax.to(".ballEffectOut",0.5,{ css:{backgroundColor: "#fff", width: "10px",height: "10px",left: "50%", opacity: 1}, y: -50, ease: Linear.easeOut});
// 	TweenMax.to(".ballEffectOut",0.5,{y: 500, delay: 0.5});
// 	TweenMax.to(".ballEffectOut",0,{ css:{backgroundColor: "transparent", width: "800px",height: "800px",left: "20%", opacity: 0}, y: -50, ease: Linear.easeOut, delay: 1});
// 	TweenMax.to(".ballEffectOut",0,{y: 0, delay: 1});
// 	TweenMax.to(".slider-text h1", 0.2, { css: { opacity: 0 } });
//     TweenMax.to(".slider-text h1", 0, { css: { display: "none" }, delay: 0.2 });
//     TweenMax.to(".ballEffect", 0.5, { x: "" + ancho + "px", ease: Linear.easeNone, delay: 0.5 });
//     TweenMax.to(".ballEffect", 0.2, { y: -200, ease: Power2.easeNone, repeat: 1, yoyo: true, delay: 0.5 });
//     TweenMax.to(".ballEffect", 0.2, { ease: Linear.easeOut, y: -50, delay: 1.1 });
//     TweenMax.to(".ballEffect", 0.2, { ease: Linear.easeOut, y: 0, delay: 1.2 });
//     TweenMax.to(".ballEffect", 0.5, { css: { width: "800px", height: "800px" }, delay: 2 });
//     TweenMax.to(".ballEffect", 0, { css: { opacity: 0 }, delay: 2.5 });
//     TweenMax.to(".ballEffect", 0, { css: { width: "10px", height: "10px", transform: "translate(-630px, -50px)" }, delay: 2.6 });
//     TweenMax.to(".slider-text", 0.5, { css: { backgroundColor: 'rgba(255, 255, 255, 0.5) !important' }, delay: 2.5 });
//     TweenMax.to(".estanquesContainer", 0, { css: { visibility: "visible" }, delay: 2.5 });
//     TweenMax.to(".estanquesContainer", 0, { css: { opacity: 1 }, delay: 2.6 });

//     $(".ballEffect").css({
//         "opacity": "1"
//     });
//     serviceClicked = true;

// 	}
    
// });


/*end Enlaces */

$(window).on("load",function() {
    $('.flexslider').flexslider({
        animation: "slide",
    });
});