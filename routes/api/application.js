const express = require('express');
const appCtrl = require('../../controllers/application');

const router = express.Router();

router.route('/')
    .get(appCtrl.findAll);

router.route('/:id')
    .get(appCtrl.findOne);

// children
router.route('/:id/capabilities/')
    .get(appCtrl.findCapabilities);

router.route('/:id/technologies/')
    .get(appCtrl.findTechnologies);

router.route('/:id/pocs/')
    .get(appCtrl.findPOCs);

module.exports = router;
