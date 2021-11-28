const mensaje_dos = document.getElementById('nombre');
const enviar_dos = () => {console.log('LETRAS DEL NOMBRE')};
mensaje_dos.addEventListener('input', enviar_dos);

const mensaje_tres = document.getElementById('email');
const enviar_tres = () => {console.log('LETRAS DEL EMAIL')};
mensaje_tres.addEventListener('input', enviar_tres);

const mensaje_cuatro = document.getElementById('telefono');
const enviar_cuatro = () => {console.log('DIGITOS DEL TELEFONO')};
mensaje_cuatro.addEventListener('input', enviar_cuatro);

const mensaje_cinco = document.getElementById('mensaje');
const enviar_cinco = () => {console.log('LETRAS DEL MENSAJEL')};
mensaje_cinco.addEventListener('input', enviar_cinco);

const enviar = document.getElementById('enviar');
function mensaje_uno(){
    console.log('NUMERO DE CLICKS');
}