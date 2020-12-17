const express = require('express');
const MangaSearchController = require('../controller/MangaSearch');

const router = express.Router();

router.get('/', MangaSearchController.list);
router.get('/top', MangaSearchController.listTopMangas);

module.exports = router;