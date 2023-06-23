// Defina a data de destino para a contagem regressiva (formato: ano, mês - 1, dia, hora, minuto, segundo)
var targetDate = new Date(2026, 3, 2, 0, 0, 0);

function countdown() {
    var currentDate = new Date();
    var difference = targetDate - currentDate;

    // Calcule os dias, horas, minutos e segundos restantes
    var days = Math.floor(difference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Atualize o elemento HTML com a contagem regressiva
    document.getElementById('countdown').innerHTML = days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's';

    // Verifique se a contagem regressiva chegou a zero
    if (difference <= 0) {
        clearInterval(interval);
        document.getElementById('countdown').innerHTML = 'Tempo expirado!';
    }
}

// Execute a função de contagem regressiva a cada segundo
var interval = setInterval(countdown, 1000);
