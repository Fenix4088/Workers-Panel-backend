const express = require('express')
const addWorker = require("./2-controllers/addWorker");
const updateWorker = require("./2-controllers/updateWorker");
const getWorkers = require("./2-controllers/getWorkers");
const deleteWorker = require("./2-controllers/deleteWorker");

let workers = express.Router();

workers.get('/', getWorkers)
workers.post('/', addWorker)
workers.delete('/:id', deleteWorker)
workers.put('/:id', updateWorker)

module.exports = workers