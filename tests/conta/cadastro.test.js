const delESeed = require("../../reset");

const testServer = require("../jest.setup");
const request = require("../jest.setup");
// import { expect, jest, test } from "@jest/globals";
// import describe from "jest";
describe("Conta - Cadastro", () => {
     delESeed;
     it("Cria conta", async () => {
          const res1 = await testServer.post("/cadastro").send({
               login: "loginTeste",
               nome: "testJ2est",
               email: "emailTeste@teste.com",
               senha: "1234567890",
          });

          expect(res1.status).toEqual(201);
          expect(res1.body).toHaveProperty("id");
          expect(typeof res1.body).toBe("object");
     });

     it("NÃO criar outra conta com o mesmo login", async () => {
          const res1 = await testServer.post("/cadastro").send({
               login: "loginTeste",
               nome: "testJest",
               email: "emailTeste2@teste.com",
               senha: "1234567890",
          });
          expect(res1.status).toEqual(400);
          expect(res1.body).toHaveProperty("mensagem");
     });
     it("NÃO criar outra conta com o mesmo email", async () => {
          const res1 = await testServer.post("/cadastro").send({
               login: "loginTeste2",
               nome: "testJest",
               email: "emailTeste@teste.com",
               senha: "1234567890",
          });
          expect(res1.status).toEqual(400);
          expect(res1.body).toHaveProperty("mensagem");
     });
});
