import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList';
import FeedbackData from './data/FeedbackData';
import FeedbackStats from './components/FeedbackStats';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if(window.confirm("This will delete your feedback.")) {
      setFeedback((prevState) => (
        prevState.filter((feedback) => feedback.id !== id)
      ))
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedback={feedback} />
        <FeedbackList
         feedback={feedback}
         handleDelete={deleteFeedback}
        />
      </div>
    </>
  )
}

export default App