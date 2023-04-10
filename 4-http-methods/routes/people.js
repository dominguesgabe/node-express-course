const express = require('express')
const router = express.Router()
const {
    getPeople,
    createPerson,
    editPerson,
    deletePerson
    } = require('../controllers/peopleController')

// router.get('/', getPeople)
// router.post('/', createPerson)
// router.put('/:id', editPerson)
// router.delete('/:id', deletePerson)

router.route('/')
    .get(getPeople)
    .post(createPerson)

router.route('/:id')
    .put(editPerson)
    .delete(deletePerson)

module.exports = router