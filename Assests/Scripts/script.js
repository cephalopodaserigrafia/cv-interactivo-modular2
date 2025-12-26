$(document).ready(function() {
    
    // 1. Efecto de animación al desplazarse (Scroll Reveal)
    $(window).scroll(function() {
        $('.reveal').each(function() {
            var postion = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (postion < topOfWindow + 600) {
                $(this).addClass("active");
            }
        });
    });

    // Aplicar clase reveal a las secciones principales para que se animen
    $('section').addClass('reveal');

    // 2. Botón para cambiar entre temas claro/oscuro
    $('#themeToggle').click(function() {
        $('body').toggleClass('dark-mode');
        $(this).text($('body').hasClass('dark-mode') ? "☀️ Modo Claro" : "🌙 Modo Oscuro");
    });

    // 3. Cambio de colores en sección Habilidades al presionar botón
    $('#colorChange').click(function() {
        $('#Habilidades').toggleClass('bg-highlight');
    });

    // 4. Formulario de contacto con validación en tiempo real
    const form = $('#contactForm');
    
    $('#email, #name').on('input', function() {
        if (this.checkValidity()) {
            $(this).removeClass('is-invalid').addClass('is-valid');
        } else {
            $(this).removeClass('is-valid').addClass('is-invalid');
        }
    });

    form.on('submit', function(event) {
        event.preventDefault();
        if (this.checkValidity()) {
            $('#formSuccess').removeClass('d-none').hide().fadeIn();
            form.trigger("reset").removeClass('was-validated');
            $('.form-control').removeClass('is-valid');
        } else {
            form.addClass('was-validated');
        }
    });
});