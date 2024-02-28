const perfilUsuario = async (req, res) => {
     const { authorization } = req.headers;

     return res.send("ok");
};

module.exports = { perfilUsuario };
