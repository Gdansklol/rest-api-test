//import express from "express"

const express = require('express')
const router = express.Router()

const { v4: uuidv4 } = require('uuid');

let cars = [];

router.get('/',(req,res) => {
	res.send(cars);
});

router.get('/:id',(req,res)=> {
	const id = req.params.id;
	const foundCar = cars.find((car)=>car.id ===id);

	res.send(foundCar);
});

router.post('/',(req,res) => {
	const car = req.body;

	const id = uuidv4();
	console.log(id)
	const carsId = {...car, "id": id}

	cars.push(carsId);
	res.send(`Car with the color ${req.body} added.`)
});

router.put('/:id',(req,res)=>{
	const id = req.params.id;
	const color = req.body.color;
	const model = req.body.model;
	const price = req.body.price;

	console.log('car ID' , id)
	console.log('color' , color)
	console.log('model' , model)
	console.log('price' , price)

	const car = cars.find((car)=> car.id == id);

	res.send(`Car with the id ${id} has been changed`);

})


router.delete('/:id',(req,res) => {
	const id = req.params.id;
	const index = cars.findIndex((car)=> car.id ==id);
	cars.splice(index, 1);
	console.log('cars:', id)

	res.send(`Car with the id ${id} removed.`);
})


module.exports = router;
//export default router;