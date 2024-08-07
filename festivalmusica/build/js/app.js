document.addEventListener('DOMContentLoaded', function() {
    navegacionFija()
    crearGaleria()
    resaltarEnlace()
    scrollNav()

})

function navegacionFija() {
    const header = document.querySelector('.header')
    const sobreFesival = document.querySelector('.sobre-festival')

    window.addEventListener('scroll', function() {
        if (sobreFestival.getBoundingClientRect().bottom < 1) {
            console.log('Ya lo pasaste...')
            header.classList.add('fixed')
        } else {
            console.log('Aun no...')
            header.classList.remove('fixed')
        }


    })

}

function crearGaleria() {
    const CANTIDAD_IMAGENES = 16
    const galeria = document.querySelector('.galeria-imagenes')
    for (let i = 1; i <= CANTIDAD_IMAGENES; i++) {
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`
        imagen.alt = 'Imagen Galeria'
        console.log(imagen)

        //Event Handler
        imagen.onclick = function() { mostrarImagen(i) }

        galeria.appendChild(imagen)
    }
}

function mostrarImagen(i) {

    const imagen = document.createElement('IMG')
    imagen.src = `src/img/gallery/full/${i}.jpg`
    imagen.alt = 'Imagen Galeria'
        //Generar modal
    const modal = document.createElement('DIV')
    modal.classList.add('modal')
    modal.onclick = cerrarModal
        // Boton cerrar modal
    const cerrarModalBtn = document.createElement('BUTTON')
    cerrarModalBtn.textContent = 'X'
    cerrarModalBtn.classList.add('btn-cerrar')
    cerrarModalBtn.onclick = cerrarModal


    modal.appendChild(imagen)
    modal.appendChild(cerrarModalBtn)
        //Agregar al HTML
    const body = document.querySelector('body')
    body.classList.add('overflow-hidden') //Oculta/quita el scroll del modal
    body.appendChild(modal)
    console.log(modal)
}

function cerrarModal() {
    const modal = document.querySelector('.modal')
    modal.classList.add('fade-out')
        // prettier-ignore
        //  modal ? .remove()
    setTimeout(() => {
        if (modal) {
            modal.remove();
        }
        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden') //Oculta/quita el scroll del modal

    }, 500);



}

function resaltarEnlace() {
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAl('section')
        const navLinks = document.querySelectorAll('.navegacion -principal a')

        let actual = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop
            const sectionHeight = section.clientHeight

            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                actual = section.id
            }

        })
        navLinks.forEach(link => {
            // link.classList.remove('active')
            if (link.getAttribute('href') === '#' + actual) {
                link.classList.add('active')
            }
        })
    })
}

function scrollNav() {
    const navLinks = document.querySelectorAll('.navegacion-principal a')

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            const sectionScroll = e.target.gerAttribute('href')
            const section = document.querySelector(sectionScroll)


            section.scrollIntoView({ behavior: 'smooth' }) //Nos permite ver el desplazamiento del scroll d la section seleccionada
        })
    })
}