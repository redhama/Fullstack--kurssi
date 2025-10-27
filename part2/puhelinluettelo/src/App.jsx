import { useState, useEffect } from 'react'
import Persons  from './components/persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/personsDatabase'
import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [FilteredPersons, setFilteredPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)
  const [notificationColor, setNotificationColor] = useState('green')

  useEffect(() => {
    personService.getAll()
    .then(initialPersons => {
      updatePersons(initialPersons)
    })
  }, [])

  function updatePersons(persons) {
    setPersons(persons)
    setFilteredPersons(persons)
  }

  function handleRemovePerson(person) {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService.remove(person.id).catch(error => {
        setNotificationColor('red')
        setErrorMessage(`Information of ${person.name} has already been removed from server`)
      })
      const newPersons = persons.filter(item => item != person)
      updatePersons(newPersons)
      setNotificationColor('green')
      setErrorMessage(`Removed ${person.name}`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  function handleNameChange(e) {
      setNewName(e.target.value)
  }

  function handleNumberChange(e) {
      setNewNumber(e.target.value)
  }

  function handleSubmit(e) {
      e.preventDefault()
      const personObject = {
          name: newName,
          number: newNumber
      }

      const personToBeFound = persons.find(person => person.name == newName)
      const personIndex = persons.findIndex(person => person.name == newName)

      if (personToBeFound){
        if (window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`)) {
          personService.update(personToBeFound.id, personObject)
          const newPersons = [...persons]
          newPersons[personIndex] = personObject
        
          updatePersons(newPersons)
          setNotificationColor('green')
          setErrorMessage(`Changed ${personObject.name}`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
          setNewName('')
          setNewNumber('')
        }
      } else {
        personService.create(personObject)
        .then(returnedPerson => 
          {const newPersons = persons.concat(returnedPerson)
          updatePersons(newPersons)})
          setNotificationColor('green')
          setErrorMessage(`Added ${personObject.name}`)
          setTimeout(() => {
            setErrorMessage(null)
          }, 5000)
        setNewName('')
        setNewNumber('')
      }
  }

  function handleFilterChange(e) {
      const filterValue = e.target.value
      const filter = persons.filter((person) => person.name.toLowerCase().includes(filterValue.toLowerCase()))
      setFilteredPersons(filter)
  }

  return(
    <div>
      <h2>Phonebook</h2>
      <Notification message={errorMessage} notificationColor={notificationColor}/>
      <Filter handleFilterChange={handleFilterChange}></Filter>
      <h2>add a new</h2>
      <PersonForm handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} handleSubmit={handleSubmit} newName={newName} newNumber={newNumber}></PersonForm>
      <Persons persons={FilteredPersons} handleRemovePerson={handleRemovePerson}></Persons>
    </div>
  )
}

export default App
