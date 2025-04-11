const { error } = require('console');
const Service = require('../models/Service')

const getAllServices = async (req, res)=>{
    try {
        const services = await Service.findAll();
        res.json(services)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

const getServiceById = async (req, res)=>{
    try {
        const service = await Service.findByPk(req.params.id)
        if(!service){
            return res.status(404).json({error: 'Service not found'})
        }
        res.json(service)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const createService = async (req, res) =>{
    try {
        const newService = await Service.create(req.body)
        res.status(201).json(newService)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteService = async (req, res) => {
    try {
        const service = await Service.findByPk(req.params.id)
        if(!service){
            return res.status(404).json({error: 'Service not found'})
        }
        await service.destroy()
        res.json({message: 'Service deleted'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const updateService = async (req, res) => {
    try {
        const service = await Service.findByPk(req.params.id)
        if(!service){
            return res.status(404).json({error: 'Service not found'})
        }
        await service.update(req.body)
        res.status(200).json(service)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    getAllServices,
    getServiceById,
    createService,
    deleteService,
    updateService
}