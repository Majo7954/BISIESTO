function esBisiesto(anio) {
    if (anio % 400 === 0) {
        return "Es Bisiesto";
    } else {
        return "No es Bisiesto";
    }
}

export default esBisiesto;