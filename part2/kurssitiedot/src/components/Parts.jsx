const Parts = ({parts}) => {
  return(
    <div>
      {parts.map(part => (
        <div key={part.id}>{handleCourseParts(part)}</div>
      ))}
    </div>
  )
}

function handleCourseParts(part) {
  return part.name + " " + part.exercises
}

export default Parts