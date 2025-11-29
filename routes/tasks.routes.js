const express = require('express');
const router = express.Router();
const {getAll, getOne, createOne, updateOne, deletOne} = require('../controllers/tasks.controller')

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', createOne);
router.put('/:id', updateOne);
router.delete('/:id', deletOne);

module.exports = router;