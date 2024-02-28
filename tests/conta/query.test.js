const {
     verificarEmailExistente,
     verificarLoginExistente,
} = require("../../src/bancoDeDados/querys/queryVerificar/queryVerificar");

describe("Switch de testes para querys", () => {
     test("Email existente deverá retornar TRUE ", async () => {
          const email = "emailTeste@teste.com";
          const existeEmail = await verificarEmailExistente(email);
          expect(existeEmail).toBeTruthy();
     });
     test("Login existente deverá retornar TRUE", async () => {
          const login = "loginTeste";
          const existeLogin = await verificarLoginExistente(login);
          expect(existeLogin).toBeTruthy();
     });
});
