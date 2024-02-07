import supertest from "supertest";
import {server}  from "../src/server/server"


export const textServer = supertest(server)
textServer.get("/")