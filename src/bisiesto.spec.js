import esBisiesto from "./bisiesto.js";

describe("Años bisiestos", () => {
    it("Año divisible por 400 es bisiesto", () => {
        expect(esBisiesto(2000)).toEqual("Es Bisiesto");
    });
});
