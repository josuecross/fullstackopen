import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allReviews, setAllReviews] = useState(0)
  const [average, setAverage] = useState(.0)
  const [positive, setPositive] = useState(.0)

  const handleGood = () => {
    const goodReviews = good + 1
    const total = goodReviews + neutral + bad
    const average =  (goodReviews + 0*neutral + -1*bad)/total
    setGood(goodReviews)
    setAllReviews(total)
    setAverage(average)
    setPositive((goodReviews/total)*100)
  }
  const handleNeutral = () => {
    const neutralReviews = neutral + 1
    const total = good + neutralReviews + bad
    const average =  (good + 0*neutralReviews + -1*bad)/total
    setNeutral(neutralReviews)
    setAllReviews(total)
    setAverage(average)
    setPositive((good/total)*100)
  }
  const handleBad = () => {
    const badReviews = bad + 1
    const total = good + neutral + badReviews
    const average =  (good + 0*neutral + -1*badReviews)/total
    setBad(badReviews)
    setAllReviews(total)
    setAverage(average)
    setPositive((good/total)*100)
  }
  if(allReviews > 0){
    return (
      <div>
        <Header header={"give feedback"} />
        <ReviewButtons handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad}/>
        <h1>statistics</h1>
        <Statistics  
          good={good} 
          neutral={neutral} 
          bad={bad} 
          allReviews={allReviews} 
          average = {average}
          positive = {positive}
        />
      </div>
    )
  }

  return (
    <div>
        <Header header={"give feedback"} />
        <ReviewButtons handleGood={handleGood} handleNeutral={handleNeutral} handleBad={handleBad}/>
        <p>No feedback given</p>
      </div>
    )
  
}

const Header = ({ header }) => {
  return <h1>{header}</h1>
}

const ReviewButtons = ( { handleGood, handleNeutral, handleBad }) => {
  return <>
    <div>
      <Button handleButton={handleGood} text={"good"}/>
      <Button handleButton={handleNeutral} text={"neutral"}/>
      <Button handleButton={handleBad} text={"bad"}/>
    </div>
  </>
}

const Button = ({ handleButton, text }) => {
  return <button onClick={handleButton}>{text}</button>
}

const Statistics = ( { good, neutral, bad, allReviews, average, positive } ) => {
  return <>
    <table>
      <tbody>
        <StatisticLine item={"good"} value={good} />
        <StatisticLine item={"neutral"} value={neutral} />
        <StatisticLine item={"bad"} value={bad} />
        <StatisticLine item={"all"} value={allReviews} />
        <StatisticLine item={"average"} value={average} />
        <StatisticLine item={"positive"} value={positive} units={"%"} />
      </tbody>
    </table>
  </>
}

const StatisticLine = ({item , value, units}) => {
  return <tr>
    <td>{item}</td>
    <td>{value} {units}</td>
  </tr> 
}

export default App