const express = require('express')
const router =express.Router()

const appController = require('../app/controllers/AppController')


router.use('/search', appController.search)
router.use('/:slug', appController.slug)
router.use('/', appController.index)


module.exports = router
