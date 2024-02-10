const { server } = require("./src/server/server");
const port = process.env.PORT || 3000;
server.listen(port, console.log(`SERVIDOR ON NA PORTA ${port}`));
