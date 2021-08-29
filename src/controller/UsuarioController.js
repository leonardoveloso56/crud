const Usuario = require('../model/Usuario');


module.exports = {

    async index(req, res){
        const usuarios = await Usuario.find();
        res.json(usuarios)
    },

    async detail(req, res){
        const{_id} = req.params
        const usuarios = await Usuario.findOne({_id});
        res.json(usuarios)
    },

    async store(req, res){
        const {placa,chassi, renavam, modelo, marca, ano} = req.body;

        let dataCreate = {}
        
        dataCreate = {
            placa,chassi, renavam, modelo, marca, ano
        }
        
        const usuarios = await Usuario.create(dataCreate);
        res.json(usuarios)
    },

    async delete(req, res){
        const{_id} = req.params
        const usuarios = await Usuario.findByIdAndDelete({_id});
        res.json(usuarios)
    },

    async update(req, res){
        const {_id,placa,chassi, renavam, modelo, marca, ano} = req.body;

        let dataCreate = {}
        
        dataCreate = {
            placa,chassi, renavam, modelo, marca, ano
        }
        
        const usuarios = await Usuario.findByIdAndUpdate({_id},dataCreate, {new:true});
        res.json(usuarios)
    }

}