import esBisiesto from "./bisiesto.js";

describe("Años bisiestos", () => {
    it("Año divisible por 400 es bisiesto", () => {
        expect(esBisiesto(2000)).toEqual("Es Bisiesto");
    });

    it("Año divisible por 100 pero no por 400 no es bisiesto", () => {
        expect(esBisiesto(1700)).toEqual("No es Bisiesto");
        expect(esBisiesto(1800)).toEqual("No es Bisiesto");
        expect(esBisiesto(1900)).toEqual("No es Bisiesto");
        expect(esBisiesto(2100)).toEqual("No es Bisiesto");
    });

    it("Año divisible por 4 pero no por 100 es bisiesto", () => {
        expect(esBisiesto(2008)).toEqual("Es Bisiesto");
        expect(esBisiesto(2012)).toEqual("Es Bisiesto");
        expect(esBisiesto(2016)).toEqual("Es Bisiesto");
    });

    it("Año no divisible por 4 no es bisiesto", () => {
        expect(esBisiesto(2017)).toEqual("No es Bisiesto");
        expect(esBisiesto(2018)).toEqual("No es Bisiesto");
        expect(esBisiesto(2019)).toEqual("No es Bisiesto");
    });

});
