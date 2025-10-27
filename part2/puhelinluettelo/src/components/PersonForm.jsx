const PersonForm = ({handleNameChange, handleNumberChange, handleSubmit, newName, newNumber}) => {
    return(
      <form method="post" onSubmit={handleSubmit}>
        <label>
          name: <input name="name" value={newName} onChange={handleNameChange}></input>
        </label> <br/>
        <label>
          number: <input name="number" value={newNumber} onChange={handleNumberChange}></input>
        </label>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm