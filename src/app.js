const markAll = document.querySelector("#mark-all");
const notReadElement = document.querySelectorAll(".not-read");
const notificaciones = document.querySelectorAll(".noti");
const numberNotis = document.querySelector('#number');

markAll.addEventListener('click', ()=>{
    notReadElement.forEach(element =>{
        eliminarNotificacion(element.parentElement.parentElement.parentElement)
    })
})

notificaciones.forEach(notificacion => {
    notificacion.addEventListener("click", () =>{
        if(notificacion.children[1].children[0].lastChild.classList.contains("not-read")){
            eliminarNotificacion(notificacion.children[1].children[0].lastChild)
        }
    })
})

function eliminarNotificacion(referencia){
    if(referencia.classList.contains("not-read")){
        referencia.classList.remove('not-read');
        referencia.parentElement.parentElement.parentElement.classList.remove('bg-gris-claroxl');
        numberNotis.textContent--;
        return;
    }
    referencia.classList.remove('bg-gris-claroxl');
    referencia.children[1].children[0].lastChild.classList.remove("not-read");
    numberNotis.textContent = 0;
}