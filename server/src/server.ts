import cors from "@fastify/cors";
import fastify from "fastify";
import { appRoutes } from "./routes";

const port = 3333;
const app = fastify();

app.register(cors)

app.register(appRoutes)

app.listen({ port, host: '0.0.0.0', }).then((url) => {
  const brightCode = '\x1b[1m';
  const greenCode = '\x1b[32m';
  const resetCode = '\x1b[0m';

  console.log(
    brightCode + greenCode + 
    '[SUCCESS] ' + resetCode + greenCode + 
    `Server is running: http://localhost:${port}/` + resetCode
  )
})