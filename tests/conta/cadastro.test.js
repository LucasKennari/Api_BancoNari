const testServer = require("../jest.setup");
// import { expect, jest, test } from "@jest/globals";
// import describe from "jest";
describe("Conta - Cadastro", () => {
     it("Cria conta", async () => {
          const res1 = await testServer.post("/cadastro").send({
               login: "teste02001",
               nome: "testJ2est",
               email: "test020e@teste.com",
               senha: "teste12223456",
          });
          expect(res1.status).toEqual(201);
          expect(typeof res1.body).toEqual("number");
     });

     it("Tentar criar outra conta com o mesmo email", async () => {
          const res1 = await testServer.post("/cadastro").send({
               login: "teste0001",
               nome: "testJest",
               email: "test00e@teste.com",
               senha: "teste123456",
          });
          expect(res1.status).toEqual(400);
          expect(res1.body).toHaveProperty("mensagem");
     });
});
