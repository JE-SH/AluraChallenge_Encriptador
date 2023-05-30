var btm_encriptar = document.querySelector(".button_dark");
var btm_desencriptar = document.querySelector(".button_light");
var btm_copiar = document.querySelector(".copiar");
var resultado = document.querySelector(".resultado");
var texto = document.querySelector(".texto");

btm_encriptar.onclic = encriptar;

function encriptar(){
    ocultar_img();
}

function ocultar_img() {
    document.getElementById("img_esperando").style.display = "none";
    document.getElementById("texto_esperando").style.display = "none";
    document.getElementById("texto_esperando_2").style.display = "none";

    document.getElementById("rectangulo_codificado").style.display="flex";
    document.getElementById("copiar").style.display="flex";
  }