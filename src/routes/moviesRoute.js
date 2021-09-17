const express = require('express')
const router =express.Router()

const moviesController = require('../app/controllers/MoviesController')

router.use('/:slug', moviesController.slug)
router.use('/', moviesController.index)


module.exports = router
