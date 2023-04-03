const imagenes = document.querySelectorAll('img-galeria')
const imagenesLight = document.querySelector('agregar-imagen')
const contenedorLight = document.querySelector('imagen-light')
const bxmenu1 = document.querySelector('.bx-menu');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{      
       aparecerImagen( imagen.getAttribute('scr'))
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle(showImage)
        bxmenu1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen)=>{
    imagenesLight.scr = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle(showImage)
    bxmenu1.style.opacity = '0'
}