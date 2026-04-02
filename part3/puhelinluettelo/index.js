const express = require('express')
const morgan = require('morgan')
const Phonenumber = require('./models/phonenumber')
const app = express()

morgan.token('body', function (request, response) {return JSON.stringify(request['body'])})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(express.static('dist'))
app.use(express.json())

app.get('/api/persons', (request, response) => {
    Phonenumber.find({})
    .then(phonenumbers => {
        if(phonenumbers) {
            response.json(phonenumbers)
        } else {
            response.status(404).end()
        }
    })
})

app.get('/info', (request, response, next) => {
    Phonenumber.find({}).then(phonenumbers => {
        response.send(
            `Phonebook has info for ${phonenumbers.length}</br>
            ${new Date().toString()}`)
        })
    .catch(error => next(error))
})

app.get('/api/persons/:id', (request, response, next) => {
    Phonenumber.findById(request.params.id).then(phonenumber => {
        if(phonenumber) {
            response.json(phonenumber)
        } else {
            response.status(404).end()
        }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
    Phonenumber.findByIdAndDelete(request.params.id)
    .then(result => {
        response.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons/', (request, response, next) => {
    const body = request.body

    const phonenumber = new Phonenumber({
        name: body.name,
        number: body.number
    })

    phonenumber.save().then((savedphonenumber) => {
        response.json(savedphonenumber)
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
    const { name, number } = request.body

    Phonenumber.findById(request.params.id)
    .then((phonenumber) => {
        if (!phonenumber) {
            return response.status(404).end()
        }

        phonenumber.name = name
        phonenumber.number = number

        return phonenumber.save().then((updatedphonenumber) => {
            response.json(updatedphonenumber)
        })
    })
    .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
    response.status(404).send({error: 'unknown endpoint'})
}

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })        
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({error: error.message})
    }

    next(error)
}

app.use(errorHandler)
app.use(unknownEndpoint)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
}) 

