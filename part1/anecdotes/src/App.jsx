import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))
  const [maxVoted, setMaxVoted] = useState(0)

  const handleClickNext = () => {
    const min = 0;
    var max = anecdotes.length - 1;
    const rand = Math.floor(Math.random() * (max - min + 1)) + min; 
    setSelected(rand);
  }

  const handleClickVote = (anecInd) => {
    const copy =[...votes];
    copy[selected] += 1;

    const maxValue = Math.max(...copy);
    const maxValueIndex = copy.indexOf(maxValue);

    setVotes(copy);
    setMaxVoted(maxValueIndex);
  }

  return (
    <div>
      <AnecdoteOfTheDay 
        handleClickVote={handleClickVote} 
        handleClickNext={handleClickNext}
        selected={anecdotes[selected]}
        votes = {votes[selected]}
        />

      <MostVotedAnecdote 
        maxVoted={anecdotes[maxVoted]}
        votes = {votes[maxVoted]}
      />
    </div>
  )
}

const AnecdoteOfTheDay = ({handleClickVote, handleClickNext, selected, votes}) => {
    return <>
      <h1>Anecdote of the day</h1>
      <h3>{selected}</h3>
      <p>has {votes} votes </p>
      <button onClick={handleClickVote}>vote</button>
      <button onClick={handleClickNext}>next anecdote</button>
    </>
}

const MostVotedAnecdote = ({maxVoted, votes}) => {
  return <>
    <h1>Anecdote with most votes</h1>
    <h3>{maxVoted}</h3>
    <p>has {votes} votes </p>
  </>
}
export default App