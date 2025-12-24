$(document).ready(function() {
    
    // EVENTO 1: Cambio de tema Claro/Oscuro [cite: 62, 65]
    $('#btn-theme').on('click', function() {
        $('body').toggleClass('dark-theme');
        
        if ($('body').hasClass('dark-theme')) {
            $(this).text('Modo Claro').removeClass('btn-outline-primary').addClass('btn-outline-light');
        } else {
            $(this).text('Modo Oscuro').removeClass('btn-outline-light').addClass('btn-outline-primary');
        }
    });

    // EVENTO 2: Validación en tiempo real del formulario [cite: 64]
    $('#userEmail').on('keyup', function() {
        const email = $(this).val();
        const feedback = $('#email-feedback');
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            feedback.text("");
        } else if (emailRegex.test(email)) {
            feedback.text("✓ El formato de correo es válido").css("color", "#28a745");
        } else {
            feedback.text("✗ Ingrese un correo electrónico válido").css("color", "#dc3545");
        }
    });

    // EVENTO 3: Cambio de color en títulos al pasar el mouse (Efecto interactivo) [cite: 65]
    $('.section-title').on('mouseenter', function() {
        $(this).css('color', '#0d6efd');
    }).on('mouseleave', function() {
        $(this).css('color', '');
    });

    // PLUS: Alerta al enviar el formulario
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        alert("¡Gracias por contactarme! Mensaje enviado con éxito.");
        this.reset();
        $('#email-feedback').text("");
    });

});