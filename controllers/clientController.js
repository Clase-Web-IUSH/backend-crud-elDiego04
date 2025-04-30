const { error } = require('console');
const Client = require('../models/Client')

const getAllClients = async (req, res)=>{
    try {
        const clients = await Client.findAll();
        res.json(clients)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

const getClientById = async (req, res)=>{
    try {
        const client = await Client.findByPk(req.params.id)
        if(!client){
            return res.status(404).json({error: 'Client not found'})
        }
        res.json(client)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const createClient = async (req, res) =>{
    try {
        const newClient = await Client.create(req.body)
        res.status(201).json(newClient)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteClient = async (req, res) => {
    try {
        const client = await Client.findByPk(req.params.id)
        if(!client){
            return res.status(404).json({error: 'Client not found'})
        }
        await client.destroy()
        res.json({message: 'Client deleted'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const updateClient = async (req, res) => {
    try {
        const client = await Client.findByPk(req.params.id)
        if(!client){
            return res.status(404).json({error: 'Client not found'})
        }
        await client.update(req.body)
        res.status(200).json(client)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    getAllClients,
    getClientById,
    createClient,
    deleteClient,
    updateClient
}