// routes/playersRoutes.js
const express = require('express');
const router = express.Router();
const playersController = require('../controllers/playerController');
const validationMiddleware = require('../middleware/validationMiddleware');

router.post('/', validationMiddleware.validatePlayer, playersController.createPlayer);
router.put('/:id', validationMiddleware.validatePlayer, playersController.updatePlayer);
router.delete('/:id', playersController.deletePlayer);
router.get('/', playersController.getAllPlayers);
router.get('/rank/:val', playersController.getRankedPlayer);
router.get('/random', playersController.getRandomPlayer);

module.exports = router;
