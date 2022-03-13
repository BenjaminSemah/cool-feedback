import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./shared/RatingSelect"

const FeedbackForm = ({ handleAdd }) => {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [validateMsg, setValidateMsg] = useState('')

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true)
      setValidateMsg(null)
    } else if (text !== '' && text.trim().length <= 7) {
      setBtnDisabled(true)
      setValidateMsg('Text must be at least 10 characters')
    } else {
      setBtnDisabled(false)
      setValidateMsg(null)
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 5) {
      const newFeedback = {
        text,
        rating,
      }

      handleAdd(newFeedback)
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