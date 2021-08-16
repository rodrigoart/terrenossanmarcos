var boton_menu = document.getElementById("icono_boton_menu")
var seccion_navegacion = document.getElementById("seccion_navegacion")
var flag_boton_menu = false;

var hiden_icons = document.getElementsByClassName("hiden_icon");



boton_menu.onclick = function(){
  
  if(flag_boton_menu){

    for(let i=0; i< hiden_icons.length; i++){
      hiden_icons[i].style.display = "none"
      hiden_icons[i].classList.remove("class_anima_hiden_icon")
    }

    seccion_navegacion.classList.remove("clase_animacion_header_desplegar")
    seccion_navegacion.classList.add("clase_animacion_header_ocultar")
    boton_menu.classList.add("fa-bars")
    boton_menu.classList.remove("fa-times")
    flag_boton_menu = false
  }
  else{
    seccion_navegacion.classList.remove("clase_animacion_header_ocultar")
    seccion_navegacion.classList.add("clase_animacion_header_desplegar")
    boton_menu.classList.remove("fa-bars")
    boton_menu.classList.add("fa-times")
    flag_boton_menu = true

    setTimeout(function(){
      for(let i=0; i< hiden_icons.length; i++){
        hiden_icons[i].classList.add("class_anima_hiden_icon")
      }
    }, 1000)

  }
  
}


