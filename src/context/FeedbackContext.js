import { v4 as uuidv4 } from 'uuid'
import { createContext, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is feedback item one(1)',
      rating: 10
    },
    {
      id: 2,
      text: 'This is feedback item two(2)',
      rating: 9
    },
    {
      id: 3,
      text: 'This is feedback item three(3)',
      rating: 7
    },
  ])

  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback, ...feedback])
  }

  const deleteFeedback = (id) => {
    if(window.confirm("This will delete your feedback.")) {
      setFeedback((prevState) => (
        prevState.filter((feedback) => feedback.id !== id)
      ))
    }
  }

  return (
    <FeedbackContext.Provider 
      value={{ 
        feedback,
        addFeedback,
        deleteFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext