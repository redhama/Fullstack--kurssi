const TotalAmountOfExercises = (parts) => {
    return(
        <div>
            <b>total of {totalSum(parts)} exercises</b>
        </div>
    )
}

function totalSum({parts}) {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return total
}

export default TotalAmountOfExercises

