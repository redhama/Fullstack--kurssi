const Persons = ({persons, handleRemovePerson}) => {
  return(
    <div>
      <h2>Numbers</h2>
      {persons.map(person => <div key={person.name}>{person.name} {person.number} <button onClick={() => handleRemovePerson(person)}>remove</button></div>)}
    </div>
  )
}

export default Persons