const { error } = require('console');
const Car = require('../models/car')

const getAllCars = async (req, res)=>{
    try {
        const cars = await Car.findAll();
        res.json(cars)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};

const getCarById = async (req, res)=>{
    try {
        const car = await Car.findByPk(req.params.id)
        if(!car){
            return res.status(404).json({error: 'Car not found'})
        }
        res.json(car)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const createCar = async (req, res) =>{
    try {
        const newCar = await Car.create(req.body)
        res.status(201).json(newCar)

    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const deleteCar = async (req, res) => {
    try {
        const car = await Car.findByPk(req.params.id)
        if(!car){
            return res.status(404).json({error: 'Car not found'})
        }
        await car.destroy()
        res.json({message: 'Car deleted'})
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

const updateCar = async (req, res) => {
    try {
        const car = await Car.findByPk(req.params.id)
        if(!car){
            return res.status(404).json({error: 'Car not found'})
        }
        await car.update(req.body)
        res.status(200).json(car)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {
    getAllCars,
    getCarById,
    createCar,
    deleteCar,
    updateCar
}