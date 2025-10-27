const Filter = ({handleFilterChange}) => {
    return(
      <label>
        filter shown with <input name="filter" onChange={handleFilterChange}></input>
      </label>        
    )
}

export default Filter