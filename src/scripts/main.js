AOS.init();

const dataDoEvento = new Date("Sep 12, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const momentoAtual = new Date();
    const timeStampAtual = momentoAtual.getTime();
    
    const TempoAteInicioEvento = timeStampDoEvento - timeStampAtual;

    const diasEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;


    const diasAteOEvento = Math.floor(TempoAteInicioEvento / diasEmMs);
    const horasAteOEvento = Math.floor((TempoAteInicioEvento % diasEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((TempoAteInicioEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((TempoAteInicioEvento % minutoEmMs) / 1000);


document.getElementById("contador").innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}min ${segundosAteOEvento}`

if (TempoAteInicioEvento < 0) {
    clearInterval(contaAsHoras);
    document.getElementById("contador").innerHTML = `Evento expirado`;
};

}, 1000);