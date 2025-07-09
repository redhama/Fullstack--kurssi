const App = () => {
  const course = {
    course: 'Half Stack application development',
    parts: [
      {
        part1: 'Fundamentals of React',
        exercises1: 10
      },
      {
        part2: 'Using props to pass data',
        exercises2: 7
      },
      {
        part3: 'State of a component',
        exercises3: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course.course}/>
      <Content parts={course.parts}/>
      <Total part1={course.parts[0].exercises1} part2={course.parts[1].exercises2} part3={course.parts[2].exercises3}/>
    </div>
  )
}

const Header = (course) => {
  return(
    <h1>{course.course}</h1>
  )
}

const Content = ({parts}) => {
  return(
    <>
      <Part part={parts[0].part1} exercises={parts[0].exercises1}/>
      <Part part={parts[1].part2} exercises={parts[1].exercises2}/>
      <Part part={parts[2].part3} exercises={parts[2].exercises3}/>
    </>
  )
}

const Part = ({part, exercises}) => {
  return(
  <>
    <p>
      {part} {exercises}
    </p>
  </>
  )
}

const Total = ({part1, part2, part3}) => {
  return(
    <>
      <p>Number of exercises {part1 + part2 + part3}</p>
    </>
  )
}

export default App
