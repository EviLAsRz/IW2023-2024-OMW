window.delayRedirect = function(route) {
    setTimeout(function() {
        window.location.href = route;
    }, 5000); // 5000 milisegundos = 5 segundos
};
