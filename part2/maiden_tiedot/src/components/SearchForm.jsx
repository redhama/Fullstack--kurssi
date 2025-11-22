const SearchForm = ({handleFilterChange}) => {
    return(
        <form method="post" onChange={handleFilterChange}>
            <label>
                find countries <input name="country" ></input>
            </label>
        </form>
    )
}

export default SearchForm