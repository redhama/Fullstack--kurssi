import Parts from './Parts'
import TotalAmountOfExcersises from './TotalAmountOfExercises'

const Course = ({course}) => {
  return(
    <div>
      <h1>{course.name}</h1>
      <Parts parts={course.parts}></Parts>
      <TotalAmountOfExcersises parts={course.parts}></TotalAmountOfExcersises>
    </div>
  )
}

export default Course