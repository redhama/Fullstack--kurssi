require('dotenv').config()

const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

mongoose.set('strictQuery', false)
mongoose.connect(url, {family:4})
.then(result => {
    console.log('connected to MongoDB')
})
.catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
})

const phonenumberSchema = new mongoose.Schema({
    id: Number,
    name: String,
    number: String
})

const Phonenumber = mongoose.model('Phonenumber', phonenumberSchema)

const number = new Phonenumber({
    id: 200,
    name: process.argv[3],
    number: process.argv[4]
}) 

if (process.argv.length == 3) {
    console.log("phonebook:")
    Phonenumber.find({}).then(result => {
        result.forEach(number => {
            console.log(`${number.name} ${number.number}`)
        })
        mongoose.connection.close()
    })    
} else {
    number.save().then(result => {
    console.log(`added ${result.name} number ${result.number} to phonebook`)
    mongoose.connection.close()
})
}

