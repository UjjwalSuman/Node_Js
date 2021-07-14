const express = require('express');

const router = express.Router();

const menterController = require('../controller/menterController');


// to use another router file
router.get('/api/v1/fetchMentor', menterController.fetchMenter);

// exports the router
module.exports = router;
