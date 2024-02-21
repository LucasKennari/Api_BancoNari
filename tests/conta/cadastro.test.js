const testServer = require("../jest.setup");
// import { expect, jest, test } from "@jest/globals";
// import describe from "jest";
describe("Conta - Cadastro", () => {
     it("Cria conta", async () => {
          const res1 = await testServer.post("/cadastro").send({
               login: "teste02001",
               nome: "testJ2est",
               email: "test020e@teste.com",
               senha: "1234567890",
          });
          expect(res1.status).toEqual(201);
          expect(typeof res1.body).toEqual("number");
     });

     it("NÃO criar outra conta com o mesmo login", async () => {
          const res1 = await testServer.post("/cadastro").send({
               login: "teste02001",
               nome: "testJest",
               email: "test020ew22@teste.com",
               senha: "1234567890",
          });
          expect(res1.status).toEqual(400);
          expect(res1.body).toHaveProperty("mensagem");
     });
     it("NÃO criar outra conta com o mesmo email", async () => {
          const res1 = await testServer.post("/cadastro").send({
               login: "teste00012",
               nome: "testJest",
               email: "test020e@teste.com",
               senha: "1234567890",
          });
          expect(res1.status).toEqual(400);
          expect(res1.body).toHaveProperty("mensagem");
     });
});
