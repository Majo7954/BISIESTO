function esBisiesto(anio) {
    if (anio % 4 === 0 && anio % 100 !== 0) {
        return "Es Bisiesto";
    } else {
        return "No es Bisiesto";
    }
}

export default esBisiesto;
