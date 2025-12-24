$(document).ready(function () {
    // 1. EVENTO: Cambio de tema Claro/Oscuro (Requisito 3.1)
    // Este evento cumple con la interactividad solicitada en la rúbrica.
    $('#btn-tema').click(function () {
        $('body').toggleClass('bg-dark text-white');
        
        // Cambiamos el texto del botón según el modo
        if ($('body').hasClass('bg-dark')) {
            $(this).text('Modo Claro');
        } else {
            $(this).text('Modo Oscuro');
        }
    });

    // 2. EVENTO: Animación al desplazarse (Requisito 3.2)
    // Hace que el movimiento entre secciones sea fluido.
    $('.nav-link').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800);
        }
    });

    // 3. EVENTO: Efecto de Hover en las habilidades
    // Al pasar el mouse por los elementos de la lista, cambian de color.
    $('.list-group-item').hover(
        function() { $(this).addClass('active'); },
        function() { $(this).removeClass('active'); }
    );
});