import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext)

  let totalRatings = feedback.reduce((acc, cur) => acc + cur.rating, 0)
  let averageRatingsNum = totalRatings / feedback.length
  let averageRatings = averageRatingsNum.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(averageRatings) ? 0 : averageRatings}</h4>
    </div>
  )
}

export default FeedbackStats