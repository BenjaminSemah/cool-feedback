import { useState, useContext } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./shared/RatingSelect"
import FeedbackContext from "../context/FeedbackContext"

const FeedbackForm = () => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [validateMsg, setValidateMsg] = useState('')

  const { addFeedback } = useContext(FeedbackContext)

  const handleTextChange = ({ target: { value } }) => {
    if (value === '') {
      setBtnDisabled(true)
      setValidateMsg(null)
    } else if (value.trim().length < 10) {
      setValidateMsg('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setValidateMsg(null)
      setBtnDisabled(false)
    }

    setText(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }

      addFeedback(newFeedback)

      setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Hey There! (add smiling emo). Thanks for passing by. How would you rate this project?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input 
            onChange={handleTextChange} 
            type="text" 
            placeholder="Write a review"
            value={text}
          />
          <Button 
            type="submit"
            isDisabled={btnDisabled}
          >
            SUBMIT
          </Button>
        </div>
        {validateMsg && <div className="message">{validateMsg}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm