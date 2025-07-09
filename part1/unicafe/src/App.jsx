import { useState } from 'react'

const StatisticsLine = ({name, value}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{name == "positive" ? value + '%' : value}</td>
    </tr>
    )
}

const Statistics = ({good, neutral, bad}) => {
  function Sum() {
    return good + neutral + bad
  }

  function Average() {
    return ((good * 1) + (neutral * 0) + (bad * -1)) / (Sum())
  }

  function Positive() {
    return good / Sum() * 100
  }

  if (Sum() == 0){
    return(
      <div>
        <h1>statistics</h1>
        No feedback given
      </div>
    )
  }
  else {
    return(
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>
              <StatisticsLine name={"good"} value={good}/>
              <StatisticsLine name={"neutral"} value={neutral}/>
              <StatisticsLine name={"bad"} value={bad}/>
              <StatisticsLine name={"all"} value={Sum()}/>
              <StatisticsLine name={"average"} value={Average()}/>
              <StatisticsLine name={"positive"} value={Positive()}/>
          </tbody>
        </table>
      </div>
    )
  }
}

const Button = (props) => <button onClick={props.onClick}>{props.name}</button>

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  function Increase(props) {
    switch (props){
      case "good":
        setGood(prevGood => prevGood + 1)
        break
      case "neutral":
        setNeutral(prevNeutral => prevNeutral + 1)
        break
      case "bad":
        setBad(prevBad => prevBad + 1)
        break
    }
  }
  return (
    <div>
      <h1>give feedback</h1>

      <Button onClick={() => Increase("good")} name={"good"}/>
      <Button onClick={() => Increase("neutral")} name={"neutral"}/>
      <Button onClick={() => Increase("bad")} name={"bad"}/>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}



export default App