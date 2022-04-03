const { response } = require("express");
const User = require("../models/User");

const getUsuarios = async(req, res = response) => {
    const usuarios = await User.find();
     
    if (usuarios.length === 0) {
        return res.status(404).json({
            ok: false,
            msg: 'No hay usuarios que mostrar'
        });
    }

    res.json({
        ok: true,
        usuarios
    });
}

module.exports = getUsuarios;