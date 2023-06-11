import { useState } from 'react';

const RandomAnecdote = ({ handleVoteClick, anecdotes, votes }) => {
  const [pickedIndex, setPickedIndex] = useState(0);
  const randomQuote = anecdotes[pickedIndex];
  const randomIndex = () => {
    return Math.floor(Math.random() * 7);
  }
  const handleClick = () => {
    setPickedIndex(randomIndex())
  }
  return (
    <div>
      <p>{randomQuote}</p>
      <p>Has {votes[pickedIndex]} votes</p>
      <button onClick={() => handleVoteClick(pickedIndex)}>Vote</button>
      <button onClick={handleClick}>Randomize</button>
    </div>
  )
}
const TopAnecdote = ({ votes, anecdotes }) => {
  const max = votes.reduce((prev, curr) => Math.max(prev, curr), -Infinity);
  const index = votes.indexOf(max);
  const topQuote = anecdotes[index];
  return (
    <div>
      <p>{topQuote}</p>
      <p>Has {max} votes</p>
    </div>
  )
}
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
  const [votes, setVotes] = useState(new Uint8Array(8))
  const handleVoteClick = (index) => {
    const copy = [...votes];
    copy[index] = copy[index] + 1;
    setVotes(copy);
  }
  return (
    <div>
      <h1>Random Anecdote</h1>
      <RandomAnecdote handleVoteClick={handleVoteClick} anecdotes={anecdotes} votes={votes}/>
      <h1>Top Anecdote</h1>
      <TopAnecdote votes={votes} anecdotes={anecdotes} />
    </div>
  )
}

export default App;
