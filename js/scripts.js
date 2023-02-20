/*!
* Start Bootstrap - Resume v7.0.5 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    }); 
    
    // SOLO ME BAJA LA PRIMER PAGINA 
    // Obtener el botón o enlace para descargar el PDF
    const downloadPdfButton = document.getElementById('download-pdf-button');
    
    // Agregar un evento 'click' al botón/enlace para descargar el PDF
    downloadPdfButton.addEventListener('click', () => {
        // Crear una instancia de jsPDF
        const doc = new jsPDF();
    
        // Agregar la página actual de la web al PDF
        doc.addHTML(document.body, () => {
        // Descargar el PDF
        doc.save('CVMarioReneMonti.pdf');
        });
    }); 
    /* SI INTENTO BAJAR TODA LA PAGINA NO FUNCIONA
    
    // Obtener el botón o enlace para descargar el PDF
    const downloadPdfButton = document.getElementById('download-pdf-button');

    // Agregar un evento 'click' al botón/enlace para descargar el PDF
    downloadPdfButton.addEventListener('click', () => {
        // Crear una instancia de jsPDF
        const doc = new jsPDF('p', 'pt', 'a4', true);

        // Agregar la página actual de la web al PDF
        doc.html(document.body, {
            callback: function () {
            // Descargar el PDF
            doc.save('CVMarioReneMonti.pdf');
            }
        }); 
    });  // deberia leer todo el documento html pero no hace nada */



});