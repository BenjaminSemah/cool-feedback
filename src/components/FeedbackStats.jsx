import PropTypes from 'prop-types'

const FeedbackStats = ({ feedback }) => {
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

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
}

export default FeedbackStats