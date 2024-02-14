const request = require("../jest.setup");
// import { expect, jest, test } from "@jest/globals";
// import describe from "jest";
describe("Conta - Cadastro", () => {
     it("Cria conta", async () => {
          const res1 = await request.post("/cadastro").send({
               login: "teste",
               nome: "teste",
               email: "teste@teste.com",
               senha: "teste12223456",
          });
          console.log(res1.body);
          expect(res1.status).toEqual(201);
          expect(res1.body).toHaveProperty("id");
          expect(typeof res1.body).toBe("object");
     });

     //      it("Tentar criar outra conta com o mesmo email", async () => {
     //           const res1 = await request.post("/cadastro").send({
     //                login: "teste0001",
     //                nome: "testJest",
     //                email: "test00e@teste.com",
     //                senha: "teste123456",
     //           });
     //           expect(res1.status).toEqual(400);
     //           expect(res1.body).toHaveProperty("mensagem");
     //      });
});
