const express = require('express');
const middleware = require('./users.middleware')
const controller = require('./users.controller');
const invMiddleware = require('../api-middleware');
const invController = require('../api-controller')



const router = express.Router();

router.get('/', controller.GetInventories)

router.get('/:id',invMiddleware.checkId, invController.getSpecificInventory)

router.post('/', middleware.validateUserCreation, controller.createUser)


module.exports = router