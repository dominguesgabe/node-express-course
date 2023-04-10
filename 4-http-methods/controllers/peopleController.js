const { people } = require('../data')

const getPeople = (req, res) => {
    res.status(200).json({success: true, data: people})
}

const createPerson = (req, res) => {
    const { name } = req.body

    if (!name) {
        return res.status(400).json({success: false, data: "please provide name"})
    }
    res.status(201).json({ success: true, person: name })
}

const editPerson = (req, res) => {
    const { name } = req.body
    const id = req.params.id
    const person = people.find(person => person.id == id )
    console.log(person)


    if (!id || !person) {
        return res.status(400).json({success: false, data: "please provide a valid id"})
    }

    const newPeople = people.map((person) => {
        if (person.id == id) {
            person.name = name
        }
        return person
    })

    res.status(200).json({ success: true, data: newPeople })
}

const deletePerson = (req, res) => {
    const id = req.params.id
    const person = people.find(person => person.id == id )

    if (!id || !person) {
        return res.status(400).json({success: false, data: "please provide a valid id"})
    }

    const newPeople = people.filter((person) => person.id != id)

    res.status(200).json({ success: true, data: newPeople })
}

module.exports = {
    getPeople,
    createPerson,
    editPerson,
    deletePerson
}