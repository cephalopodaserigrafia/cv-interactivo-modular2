$(document).ready(function() {
    
    // 1. Animación al desplazarse (Scroll Reveal)
    function reveal() {
        $('.reveal').each(function() {
            var windowHeight = $(window).height();
            var elementTop = $(this).offset().top;
            var elementVisible = 100;
            if (elementTop < $(window).scrollTop() + windowHeight - elementVisible) {
                $(this).addClass("active");
            }
        });
    }

    $(window).on("scroll", reveal);
    // Aplicamos clase reveal a los elementos que queremos que aparezcan con efecto
    $('section, header, .container').addClass('reveal');
    reveal(); // Disparar una vez al inicio

    // 2. Botón Modo Claro/Oscuro
    $('#themeToggle').on('click', function() {
        $('body').toggleClass('dark-mode');
        // Cambia el texto del botón
        if ($('body').hasClass('dark-mode')) {
            $(this).html("☀️ Modo Claro");
        } else {
            $(this).html("🌙 Modo Oscuro");
        }
    });

    // 3. Cambio de color en sección CONTACTO
    $('#colorChange').on('click', function() {
        // Seleccionamos la sección por su ID y alternamos la clase de resaltado
        $('#interaccion').toggleClass('bg-highlight');
    });

    // 4. Formulario de contacto con validación
    const form = $('#contactForm');
    
    form.on('submit', function(event) {
        event.preventDefault();
        if (this.checkValidity()) {
            $('#formSuccess').removeClass('d-none').hide().fadeIn();
            form.trigger("reset");
            form.removeClass('was-validated');
            $('.form-control').removeClass('is-valid');
        } else {
            form.addClass('was-validated');
        }
    });

    // Validación visual mientras escriben
    $('#email, #name').on('input', function() {
        if (this.checkValidity()) {
            $(this).addClass('is-valid').removeClass('is-invalid');
        } else {
            $(this).addClass('is-invalid').removeClass('is-valid');
        }
    });
});