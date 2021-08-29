const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    placa:String,
    chassi:String,
    renavam:String,
    modelo:String,
    marca:String,
    ano:String,
})

const usuario = mongoose.model('Usuario',DataSchema)

module.exports = usuario;